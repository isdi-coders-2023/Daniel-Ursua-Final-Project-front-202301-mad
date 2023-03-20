/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { Plant } from "../models/plant.model";
import { PlantsApiRepo } from "../services/plants.api.repo";
import { usePlants } from "./use.plants";

describe("Given the plantUsers Custom Hook, a PlantApiRepo mock and a TestComponent", () => {
  let mockPayload: Plant;
  let mockRepo: PlantsApiRepo;

  mockPayload = {
    username: "test",
    email: "test",
  } as unknown as Plant;

  mockRepo = {
    addPlantRepo: jest.fn().mockRejectedValue("Error"),
  } as unknown as PlantsApiRepo;

  beforeEach(async () => {
    const TestComponent = function () {
      const { addPlant } = usePlants(mockRepo);

      return (
        <>
          <button onClick={() => addPlant(mockPayload)}>Add</button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });

  describe("When the TestComponent is rendered", () => {
    test("Then, the button should be in the document", async () => {
      const element = await screen.findByRole("button");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the TestComponent is rendered and the add button is clicked", () => {
    test("Then, the add plant function should be called", async () => {
      const element = await screen.findByRole("button");
      await act(async () => userEvent.click(element));
      expect(mockRepo.addPlantRepo).toHaveBeenCalled();
    });
  });
});

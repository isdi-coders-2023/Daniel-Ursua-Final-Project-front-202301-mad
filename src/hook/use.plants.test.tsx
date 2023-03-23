/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { Plant } from "../models/plant.model";
import { PlantsApiRepo } from "../services/plants.api.repo";
import { usePlants } from "./use.plants";
let mockPayload: Plant;
let mockRepo: PlantsApiRepo;

mockPayload = {
  name: "test",
  ubication: "test",
} as unknown as Plant;

mockRepo = {
  addPlantRepo: jest.fn(),
  getPlantsRepo: jest.fn(),
  getPlantById: jest.fn(),
} as unknown as PlantsApiRepo;

beforeEach(async () => {
  const TestComponent = function () {
    const { addPlant, getPlants, updatePlant } = usePlants(mockRepo);

    return (
      <>
        <button onClick={() => addPlant(mockPayload)}>Add</button>
        <button onClick={() => getPlants()}>Get</button>
        <button onClick={() => updatePlant("test")}>Update</button>
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

describe("Given the plantUsers Custom Hook, a PlantApiRepo mock and a TestComponent", () => {
  describe("And the TestComponent is rendered", () => {
    test("Then, three button should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements.length).toBe(3);
    });
  });

  describe("And the add button is clicked", () => {
    test("Then, the add functions should be called", async () => {
      const addButton = await screen.findByText(/add/i);
      await act(async () => userEvent.click(addButton));
      expect(mockRepo.addPlantRepo).toHaveBeenCalled();
    });
  });
  describe("And the get button is clicked", () => {
    test("Then, the getPlants functions should be called", async () => {
      const getButton = await screen.findByText(/get/i);
      await act(async () => userEvent.click(getButton));
      expect(mockRepo.getPlantsRepo).toHaveBeenCalled();
    });
  });
  describe("And the update button is clicked", () => {
    test("Then, the getById functions should be called", async () => {
      const updateButton = await screen.findByText(/update/i);
      await act(async () => userEvent.click(updateButton));
      expect(mockRepo.getPlantById).toHaveBeenCalled();
    });
  });

  describe("When the hooks methods in the repo throw errors", () => {
    beforeEach(() => {
      (mockRepo.addPlantRepo as jest.Mock).mockRejectedValue(new Error("test"));
    });

    test("Add method should throw an error", async () => {
      const addButton = await screen.findByText(/add/i);
      await act(async () => userEvent.click(addButton));
      const result = store.getState().errors.message;
      expect(result).toBe("test");
    });
    test("Get method should throw an error", async () => {
      const getPlants = await screen.findByText(/get/i);
      await act(async () => userEvent.click(getPlants));
      const result = store.getState().errors.message;
      expect(result).toBe("test");
    });
    test("Update method should throw an error", async () => {
      const updateButton = await screen.findByText(/update/i);
      await act(async () => userEvent.click(updateButton));
      const result = store.getState().errors.message;
      expect(result).toBe("test");
    });
  });
});

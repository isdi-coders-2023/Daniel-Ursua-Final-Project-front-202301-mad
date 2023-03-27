/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { configureStore } from "@reduxjs/toolkit";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { PlantInTheList, ProtoPlant } from "../models/plant.model";
import { User } from "../models/user.model";
import { reducer } from "../reducer/error.slice";
import { plantsReducer, State } from "../reducer/plant.slice";
import { userReducer } from "../reducer/user.slice";
import { PlantsApiRepo } from "../services/plants.api.repo";
import { usePlants } from "./use.plants";
jest.mock("@firebase/storage");
jest.mock("../hook/use.users.tsx");

let mockPayload: ProtoPlant;
let mockRepo: PlantsApiRepo;

mockPayload = {
  name: "test",
  location: "test",
} as unknown as ProtoPlant;

mockRepo = {
  addPlantRepo: jest.fn(),
  getPlantsRepo: jest.fn(),
  getPlantById: jest.fn(),
  deletePlantsRepo: jest.fn(),
} as unknown as PlantsApiRepo;

let mockToken = "test" as any;
const mockStore = configureStore({
  reducer: {
    users: userReducer,
    plants: plantsReducer,
    errors: reducer,
  },
  preloadedState: {
    users: {
      userLogged: {
        token: mockToken,
        user: { id: "test" } as unknown as User,
      },
    },
    plants: {
      plantList: [] as unknown as PlantInTheList[],
    } as unknown as State,
    errors: {
      message: "Test error",
    },
  },
});

const mockStoreFail = configureStore({
  reducer: {
    users: userReducer,
    plants: plantsReducer,
    errors: reducer,
  },
  preloadedState: {
    users: {
      userLogged: null,
    },
    errors: {
      message: "Test error",
    },
  },
});

const mockFile = "test" as unknown as File;

const TestComponent = function () {
  const { addPlant, getPlants, updatePlant, deletePlantById } =
    usePlants(mockRepo);

  return (
    <>
      <button onClick={() => addPlant(mockPayload, mockFile)}>Add</button>
      <button onClick={() => getPlants()}>Get</button>
      <button onClick={() => updatePlant("test")}>Update</button>
      <button onClick={() => deletePlantById("test")}>Delete</button>
    </>
  );
};
describe("Given the plantUsers Custom Hook, a PlantApiRepo mock and a TestComponent", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <Provider store={mockStore}>
          <TestComponent></TestComponent>
        </Provider>
      );
    });
  });

  describe("And the TestComponent is rendered", () => {
    test("Then, three button should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements.length).toBe(4);
    });
  });

  describe("And the add button is clicked", () => {
    test("Then, the add functions should be called", async () => {
      const addButton = await screen.findByText(/add/i);
      await userEvent.click(addButton);
      expect(mockRepo.addPlantRepo).toHaveBeenCalled();
    });
  });
  describe("And the get button is clicked", () => {
    test("Then, the getPlants function should be called", async () => {
      const getButton = await screen.findByText(/get/i);
      await userEvent.click(getButton);
      expect(mockRepo.getPlantsRepo).toHaveBeenCalled();
    });
  });
  describe("And the update button is clicked", () => {
    test("Then, the getById function should be called", async () => {
      const updateButton = await screen.findByText(/update/i);
      await userEvent.click(updateButton);
      expect(mockRepo.getPlantById).toHaveBeenCalled();
    });
  });
  describe("And the delete button is clicked", () => {
    test("Then, the deletePlantsRepo function should be called", async () => {
      const deleteButton = await screen.findByText(/delete/i);
      await userEvent.click(deleteButton);
      expect(mockRepo.deletePlantsRepo).toHaveBeenCalled();
    });
  });
});

describe("Given the same components, but without token in the store", () => {
  beforeEach(async () => {
    jest.resetAllMocks();
    render(
      <Provider store={mockStoreFail}>
        <TestComponent></TestComponent>
      </Provider>
    );
  });
  describe("And the add method in the repo throw errors", () => {
    test("Add method should throw an error", async () => {
      const addButtons = await screen.findAllByText(/Add/i);
      userEvent.click(addButtons[1]);
      const result = await mockStoreFail.getState().errors.message;
      expect(result).toBe("Test error");
    });
  });
  describe("And the get method in the repo throw errors", () => {
    test("Get method should throw an error", async () => {
      const getPlants = await screen.findByText(/get/i);
      await act(async () => userEvent.click(getPlants));
      const result = mockStoreFail.getState().errors.message;
      expect(result).toBe("You must to be logged");
    });
  });
  describe("And the update method in the repo throw errors", () => {
    test("Update method should throw an error", async () => {
      const updateButtons = await screen.findAllByText(/update/i);
      await act(async () => userEvent.click(updateButtons[1]));
      const result = mockStoreFail.getState().errors.message;
      expect(result).toBe("You must to be logged");
    });
  });
  describe("And the delete method in the repo throw errors", () => {
    test("Delete method should throw an error", async () => {
      const deleteButtons = await screen.findAllByText(/delete/i);
      await act(async () => userEvent.click(deleteButtons[1]));
      const result = mockStoreFail.getState().errors.message;
      expect(result).toBe("You must to be logged");
    });
  });
});

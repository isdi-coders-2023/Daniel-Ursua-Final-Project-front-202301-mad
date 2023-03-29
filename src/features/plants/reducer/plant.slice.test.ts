import { PayloadAction } from "@reduxjs/toolkit";
import { Plant, PlantInTheList } from "../features/plants/models/plant.model";
import { plantsReducer, PlantsState } from "./plant.slice";

const mockPlants = ["Plant1", "Plant2"] as unknown as PlantInTheList[];

const mockPlant = { name: "test", location: "test" } as unknown as Plant;

const mockPlantsID = [
  {
    id: "test 1",
    name: "plant 1",
  },
  {
    id: "test 2",
    name: "plant 2",
  },
];

const mockStateDelete: PlantsState = {
  plantList: [
    {
      id: "test 1",
      name: "plant 1",
    },
  ] as PlantInTheList[],
  actualPlant: null,
};

const mockInitialDelete: PlantsState = {
  plantList: mockPlantsID as PlantInTheList[],
  actualPlant: null,
};

const mockInitialState: PlantsState = {
  plantList: [] as PlantInTheList[],
  actualPlant: null,
};

const mockChanged: PlantsState = {
  plantList: mockPlants,
  actualPlant: null,
};
const mockChanged2: PlantsState = {
  plantList: [],
  actualPlant: mockPlant,
};

describe("Given the plant slice", () => {
  describe("When we call the getPlants method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<PlantInTheList[]> = {
        type: "plant/changePlantList",
        payload: mockPlants,
      };
      const element = plantsReducer(mockInitialState, mockAction);
      expect(element).toEqual(mockChanged);
    });
  });
  describe("When we call the changePlant method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<Plant> = {
        type: "plant/changePlant",
        payload: mockPlant,
      };
      const element = plantsReducer(mockInitialState, mockAction);
      expect(element).toEqual(mockChanged2);
    });
  });
  describe("When we call the deletePlant method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<PlantInTheList["id"]> = {
        type: "plant/deletePlant",
        payload: "test 2",
      };
      const element = plantsReducer(mockInitialDelete, mockAction);
      expect(element).toEqual(mockStateDelete);
    });
  });
});

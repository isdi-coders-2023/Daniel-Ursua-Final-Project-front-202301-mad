import { PayloadAction } from "@reduxjs/toolkit";
import { Plant, PlantInTheList } from "../models/plant.model";
import { plantsReducer, State } from "./plant.slice";
import { userReducer } from "./user.slice";

const mockPlants = ["Plant1", "Plant2"] as unknown as PlantInTheList[];

const mockPlant = { name: "test", location: "test" } as unknown as Plant;

const mockInitialState: State = {
  plantList: [] as PlantInTheList[],
  actualPlant: null,
};

const mockChanged: State = {
  plantList: mockPlants,
  actualPlant: null,
};
const mockChanged2: State = {
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
});

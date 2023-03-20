import { PayloadAction } from "@reduxjs/toolkit";
import { PlantList } from "../models/plant.model";
import { reducer, State } from "./plant.slice";

const mockPlants = ["Plant1", "Plant2"] as unknown as PlantList;

const mockInitialState: State = {
  PlantList: [],
};
const mockState: State = {
  PlantList: [],
};
describe("Given the plant slice", () => {
  describe("When we call the getPlants method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<PlantList> = {
        type: "plant/getPlants",
        payload: mockPlants,
      };
      const element = reducer(mockInitialState, mockAction);
      expect(element.PlantList).toEqual(mockPlants);
    });
  });
});

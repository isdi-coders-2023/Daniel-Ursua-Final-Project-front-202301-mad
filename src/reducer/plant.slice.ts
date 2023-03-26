import { createSlice } from "@reduxjs/toolkit";
import { Plant, PlantInTheList } from "../models/plant.model";

export type State = {
  plantList: PlantInTheList[];
  actualPlant: Plant | null;
};

export const initialState: State = {
  plantList: [],
  actualPlant: null,
};

export const slice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    changePlantList(state, action) {
      state.plantList = [...state.plantList, ...action.payload];
    },
    changePlant(state, action) {
      state.actualPlant = action.payload;
    },
  },
});

export const { changePlantList, changePlant } = slice.actions;
export const { reducer } = slice;

import { createSlice } from "@reduxjs/toolkit";
import { PlantList } from "../models/plant.model";

export type State = {
  PlantList: PlantList[];
};

export const initialState: State = {
  PlantList: [],
};

export const slice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    getPlants(state, action) {
      state.PlantList = action.payload;
    },
  },
});

export const { getPlants } = slice.actions;
export const { reducer } = slice;

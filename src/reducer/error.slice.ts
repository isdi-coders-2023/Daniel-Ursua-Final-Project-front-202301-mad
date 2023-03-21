import { createSlice } from "@reduxjs/toolkit";

export type State = {
  message: string | null;
};

export const initialState: State = {
  message: null,
};

export const slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setError } = slice.actions;
export const { reducer } = slice;

import { configureStore } from "@reduxjs/toolkit";
import { reducer as userRed } from "../reducer/user.slice";
import { reducer as errorRed } from "../reducer/error.slice";
import { reducer as plantRed } from "../reducer/plant.slice";

jest.mock("../components/nav.menu/nav.menu.tsx");

export const store = configureStore({
  reducer: {
    users: userRed,
    plants: plantRed,
    errors: errorRed,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

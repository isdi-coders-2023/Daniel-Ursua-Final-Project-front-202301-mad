import { configureStore } from "@reduxjs/toolkit";
import { userReducer as userRed } from "../reducer/user.slice";
import { reducer as errorRed } from "../reducer/error.slice";
import { plantsReducer as plantRed } from "../reducer/plant.slice";

export const store = configureStore({
  reducer: {
    users: userRed,
    plants: plantRed,
    errors: errorRed,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

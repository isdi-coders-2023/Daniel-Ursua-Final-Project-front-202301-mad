import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducer/user.slice";
import { reducer as errorRed } from "../reducer/error.slice";

export const store = configureStore({
  reducer: {
    users: reducer,
    plants: reducer,
    errors: errorRed,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

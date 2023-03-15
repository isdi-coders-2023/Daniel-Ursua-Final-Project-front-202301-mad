import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducer/user.slice";

export const store = configureStore({
  reducer: {
    users: reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

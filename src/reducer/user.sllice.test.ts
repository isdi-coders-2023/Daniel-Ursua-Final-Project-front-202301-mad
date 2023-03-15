import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user.model";
import { State, reducer, LoginData } from "./user.slice";

const mockUser = {
  token: "test",
  user: "test",
} as unknown as LoginData;

const mockInitialState: State = {
  userLogged: null,
};
const mockState: State = {
  userLogged: null,
};
describe("Given the user slice", () => {
  describe("When we call the login method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<LoginData> = {
        type: "user/login",
        payload: mockUser,
      };
      const element = reducer(mockInitialState, mockAction);
      expect(element.userLogged).toEqual(mockUser);
    });
  });
  describe("When we call the logout method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<State> = {
        type: "user/logout",
        payload: mockState,
      };
      const element = reducer(mockInitialState, mockAction);
      expect(element).toEqual(mockState);
    });
  });
});

import { PayloadAction } from "@reduxjs/toolkit";
import { ErrorMessage, reducer, State } from "./error.slice";

const mockError = "test error";

const mockInitialState: State = {
  message: null,
};

const mockFinalState: State = {
  message: "test error",
};

describe("Given the error slice", () => {
  describe("When we call the setError method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<string> = {
        type: "error/setError",
        payload: mockError,
      };
      const element = reducer(mockInitialState, mockAction);
      expect(element).toEqual(mockFinalState);
    });
  });
});

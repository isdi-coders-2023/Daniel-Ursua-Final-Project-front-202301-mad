/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import RegisterPage from "./register";

describe("Given the register page", () => {
  describe("When it is render", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    test("Then it should print three headings", () => {
      const elements = screen.getAllByRole("heading");

      expect(elements.length).toBe(3);
    });
  });
});

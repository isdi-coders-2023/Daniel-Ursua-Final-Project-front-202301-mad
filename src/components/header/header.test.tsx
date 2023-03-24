import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { Header } from "./header";

describe("Given the header component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", () => {
      render(
        <Provider store={store}>
          <Header></Header>
        </Provider>
      );

      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MenuOption } from "../header/header";
import { NavMenu } from "../nav.menu/nav.menu";
import { Footer, footerOptions } from "./footer";

const mockOptions = [
  { label: "test", path: "test" },
  { label: "test2", path: "test2" },
] as MenuOption[];

describe("Given the header component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", () => {
      render(
        <Provider store={store}>
          <Footer />
        </Provider>
      );

      const element = screen.getByTestId("footer");
      expect(element).toBeInTheDocument();
    });
  });
});

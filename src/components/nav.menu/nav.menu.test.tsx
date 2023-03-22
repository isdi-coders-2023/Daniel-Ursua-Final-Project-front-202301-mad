/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MenuOption } from "../header/header";
import { MenuProps, NavMenu } from "./nav.menu";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given the nav component", () => {
  const mockOptions: MenuOption[] = [
    {
      label: "test",
      path: "test",
    },
    {
      label: "test2",
      path: "test2",
    },
  ];

  const mockProp: MenuProps = {
    options: mockOptions,
  };
  describe("When it is render", () => {
    test("Then it should print an unorder list", () => {
      render(
        <Provider store={store}>
          <Router>
            <NavMenu options={mockProp}></NavMenu>
          </Router>
        </Provider>
      );
      const element = screen.getByDisplayValue(/test/i);
      expect(element).toBeInTheDocument();
    });
  });
});

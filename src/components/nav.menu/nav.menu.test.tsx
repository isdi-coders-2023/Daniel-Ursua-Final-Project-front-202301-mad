/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MenuOption } from "../header/header";
import { NavMenu } from "./nav.menu";
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

  describe("When it is render", () => {
    test("Then it should print an unorder list", () => {
      render(
        <Router>
          <NavMenu options={mockOptions}></NavMenu>
        </Router>
      );

      const element = screen.getAllByRole("listitem");
      expect(element[0]).toBeInTheDocument();
    });
  });
});

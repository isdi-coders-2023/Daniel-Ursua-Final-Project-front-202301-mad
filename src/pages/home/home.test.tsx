/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./home";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given the home page", () => {
  describe("When it is render", () => {
    beforeEach(() => {
      render(
        <Router>
          <Home></Home>
        </Router>
      );
    });
    describe("When the user click on login button", () => {
      test("Then, handlelogin should go to login", async () => {
        const button = screen.getAllByRole("button");
        fireEvent.click(button[0]);
        const element = await screen.findAllByRole("heading");
        expect(element.length).toBe(1);
      });
    });
  });
});

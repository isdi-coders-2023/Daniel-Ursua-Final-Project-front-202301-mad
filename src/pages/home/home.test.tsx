import { render, screen } from "@testing-library/react";
import Home from "./home";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given the home page", () => {
  describe("When it is render", () => {
    render(
      <Router>
        <Home></Home>
      </Router>
    );
    test("Then it should return the login and register button", () => {
      const element = screen.getAllByRole("button");
      expect(element[0]).toBeInTheDocument();
      expect(element[1]).toBeInTheDocument();
    });
  });
});

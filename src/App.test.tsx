import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given the App component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", () => {
      render(
        <Router>
          <App></App>
        </Router>
      );
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
});

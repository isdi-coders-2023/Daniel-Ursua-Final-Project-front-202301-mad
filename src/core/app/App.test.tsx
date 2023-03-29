import { act, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given the App component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", async () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        render(
          <Router>
            <App></App>
          </Router>
        );
      });

      const element = screen.getByText("TEST");
      expect(element).toBeInTheDocument();
    });
  });
});

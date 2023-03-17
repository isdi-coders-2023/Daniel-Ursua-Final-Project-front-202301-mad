import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", () => {
      render(<App></App>);
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});

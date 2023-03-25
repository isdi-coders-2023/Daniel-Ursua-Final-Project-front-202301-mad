/* eslint-disable testing-library/no-render-in-setup */
import PlantList from "../../components/plantList/plantList";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PlantList />
      </Router>
    </Provider>
  );
});

describe("Given the plantList page", () => {
  describe("When it is render", () => {
    test("Then it should render the PlantList component", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});

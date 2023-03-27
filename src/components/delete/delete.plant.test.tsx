/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { usePlants } from "../../hook/use.plants";
import { Delete, deleteProps } from "./delete.plant";

jest.mock("../../hook/use.plants");
jest.mock("../../services/plants.api.repo.ts");

beforeEach(() => {
  (usePlants as jest.Mock).mockReturnValue({ deletePlantById: jest.fn() });
  render(
    <Provider store={store}>
      <Delete id={"test"}></Delete>;
    </Provider>
  );
});

describe("Given the Delete component", () => {
  describe("When it is render", () => {
    test("Then it should print a button", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
  describe("If we click on it", () => {
    test("Then it should call the deletePlantById hook", () => {
      const element = screen.getByRole("button");
      fireEvent.click(element);
      expect(usePlants).toHaveBeenCalled();
    });
  });
});

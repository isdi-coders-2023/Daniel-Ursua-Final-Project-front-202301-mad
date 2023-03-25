/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import { Pagination } from "./pagination";

jest.mock("react");
(useEffect as jest.Mock).mockResolvedValue("test");

const mockRepo = {
  getPlants: jest.fn(),
} as unknown as PlantsApiRepo;

beforeEach(() => {
  render(
    <Provider store={store}>
      <Pagination></Pagination>
    </Provider>
  );
});

describe("Given the pagination component", () => {
  describe("When it is render", () => {
    test("Then it should print a button", () => {});
  });
});

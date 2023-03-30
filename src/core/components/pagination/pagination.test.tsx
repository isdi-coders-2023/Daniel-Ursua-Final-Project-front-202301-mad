/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import { Pagination } from "./pagination";

jest.mock("../../../features/plants/hooks/use.plants.tsx");

const mockRepo = {
  getPlants: jest.fn(),
} as unknown as PlantsApiRepo;

beforeEach(() => {
  (usePlants as jest.Mock).mockReturnValue({
    getPlants: jest.fn(),
  });
  render(<Pagination></Pagination>);
});

describe("Given the pagination component", () => {
  describe("When it is render", () => {
    test("Then it should print a button", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
});
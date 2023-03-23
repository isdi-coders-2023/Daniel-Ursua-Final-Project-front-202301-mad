/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { usePlants } from "../../hook/use.plants";
import { PlantInTheList, Ubication } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import CardPlant from "./card.plant";

jest.mock("../../services/plants.api.repo.ts");
jest.mock("../../hook/use.plants");

const mockPlant: PlantInTheList = {
  photo: "test image",
  ubication: "test ubication" as Ubication,
  name: "test name",
  id: "test id",
};
beforeEach(() => {
  (usePlants as jest.Mock).mockReturnValue({ updatePlant: jest.fn() });
  render(<CardPlant info={mockPlant}></CardPlant>);
});

describe("Given the card plant component", () => {
  describe("When it is render", () => {
    test("Then it should print differents elements", async () => {
      const image = await screen.findByText(/image/i);
      expect(image).toBeInTheDocument();
      const ubication = await screen.findByText(/ubication/i);
      expect(ubication).toBeInTheDocument();
      const name = await screen.findByText(/name/i);
      expect(name).toBeInTheDocument();
    });
  });
  describe("When we click on the component", () => {
    test("It should call the updatePlant method", async () => {
      const image = await screen.findByText(/image/i);
      await fireEvent.click(image);
      expect(usePlants({} as PlantsApiRepo).updatePlant).toHaveBeenCalled();
    });
  });
});

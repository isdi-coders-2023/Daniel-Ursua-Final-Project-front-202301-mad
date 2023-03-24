import { Plant, PlantInTheList, ProtoPlant } from "../models/plant.model";
import { PlantsApiRepo } from "./plants.api.repo";

const mockResp = {
  name: "test",
  location: "test",
} as unknown as Plant;
const mockPlant = {
  name: "test",
} as ProtoPlant;

const mockPlants = [
  {
    name: "test",
  },
  {
    name: "test2",
  },
  { name: "test3" },
] as PlantInTheList[];
describe("Given the plants api repo", () => {
  const repo = new PlantsApiRepo();

  describe("When instantiated", () => {
    test("Then it should make a new instance", () => {
      expect(repo).toBeInstanceOf(PlantsApiRepo);
    });
  });
  describe("When we call the add method", () => {
    test("if the answer is not ok, then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("error");
      const result = repo.addPlantRepo(mockPlant);
      await expect(result).rejects.toThrow();
    });
    test("If the answer is ok, then it should return the plant added", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResp),
      });
      const result = await repo.addPlantRepo(mockPlant);
      expect(result).toEqual(mockResp);
    });
  });

  describe("Given the get plants in the repo", () => {
    const repo = new PlantsApiRepo();
    describe("And the resp is not ok", () => {
      test("Then it should throw an http error", async () => {
        (global.fetch as jest.Mock).mockResolvedValue("test");
        const result = repo.getPlantsRepo();
        await expect(result).rejects.toThrow();
      });
    });
    describe("And the resp is ok", () => {
      test("Then it should return all the data", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(mockPlants),
        });
        const result = await repo.getPlantsRepo();
        expect(result).toBe(mockPlants);
      });
    });
  });
  describe("Given the get plants by Id in the repo", () => {
    const repo = new PlantsApiRepo();
    describe("And the resp is not ok", () => {
      test("Then it should throw an http error", async () => {
        (global.fetch as jest.Mock).mockResolvedValue("test");
        const result = repo.getPlantById("test");
        await expect(result).rejects.toThrow();
      });
    });
    describe("And the resp is ok", () => {
      test("Then it should return one register", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(mockResp),
        });
        const result = await repo.getPlantById("test");
        expect(result).toBe(mockResp);
      });
    });
  });
});

import { Plant, ProtoPlant } from "../models/plant.model";
import { PlantsApiRepo } from "./plants.api.repo";

const mockResp = {
  name: "test",
  ubication: "test",
} as unknown as Plant;
const mockPlant = {
  name: "test",
} as ProtoPlant;
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
});

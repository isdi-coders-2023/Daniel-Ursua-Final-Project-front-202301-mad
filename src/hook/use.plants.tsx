import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ProtoPlant } from "../models/plant.model";
import { PlantsApiRepo } from "../services/plants.api.repo";

export function usePlants(repo: PlantsApiRepo) {
  const plants = useSelector((state: RootState) => state);
  const addPlant = async (info: ProtoPlant) => {
    try {
      const data = await repo.addPlantRepo(info);
    } catch (error) {
      console.error("Error");
    }
  };

  return {
    plants,
    addPlant,
  };
}

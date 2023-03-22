import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { ProtoPlant } from "../models/plant.model";
import { setError } from "../reducer/error.slice";
import { PlantsApiRepo } from "../services/plants.api.repo";

export function usePlants(repo: PlantsApiRepo) {
  const plants = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const addPlant = async (info: ProtoPlant) => {
    try {
      await repo.addPlantRepo(info);
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  return {
    plants,
    addPlant,
  };
}

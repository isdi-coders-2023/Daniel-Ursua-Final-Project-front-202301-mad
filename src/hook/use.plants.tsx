import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { ProtoPlant } from "../models/plant.model";
import { setError } from "../reducer/error.slice";
import { changePlant, changePlantList } from "../reducer/plant.slice";
import { PlantsApiRepo } from "../services/plants.api.repo";
import { storage } from "../services/firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export function usePlants(repo: PlantsApiRepo) {
  const plants = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const addPlant = async (info: ProtoPlant, file: File) => {
    try {
      const storageRef = ref(storage, info.name);
      await uploadBytes(storageRef, file);
      const imgURL = await getDownloadURL(storageRef);
      info.photo = imgURL;
      await repo.addPlantRepo(info);
    } catch (error) {
      dispatch(setError((error as Error).message));
      console.log((error as Error).message);
    }
  };

  const getPlants = async () => {
    try {
      const result = await repo.getPlantsRepo();
      dispatch(changePlantList(result));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };
  const updatePlant = async (id: string) => {
    try {
      const result = await repo.getPlantById(id);
      dispatch(changePlant(result));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };
  return {
    plants,
    addPlant,
    getPlants,
    updatePlant,
  };
}

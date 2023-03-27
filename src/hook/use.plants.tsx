import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { ProtoPlant } from "../models/plant.model";
import { setError } from "../reducer/error.slice";
import { changePlant, changePlantList } from "../reducer/plant.slice";
import { PlantsApiRepo } from "../services/plants.api.repo";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useCallback } from "react";
import { storage } from "../services/firebase/firebase";

export function usePlants(repo: PlantsApiRepo) {
  const plants = useSelector((state: RootState) => state.plants);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  const addPlant = async (info: ProtoPlant, file: File) => {
    try {
      const token = users.userLogged?.token;
      if (!token) throw new Error("You must to be logged");
      console.log(ref(storage, file.name));
      const storageRef = ref(storage, file.name);
      await uploadBytes(storageRef, file);
      const imgURL = await getDownloadURL(storageRef);
      info.photo = imgURL;
      await repo.addPlantRepo(info, token);
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const getPlants = useCallback(async () => {
    try {
      // debugger;
      const token = users.userLogged?.token;
      if (!token) {
        throw new Error("You must to be logged");
      }
      const actualPlants = plants.plantList;
      const actualPage = Math.ceil(actualPlants.length / 5);
      const result = await repo.getPlantsRepo(token, actualPage + 1);
      dispatch(changePlantList(result));
    } catch (error) {
      console.log("Error", (error as Error).message);
      dispatch(setError((error as Error).message));
    }
  }, [dispatch, repo, users.userLogged?.token]);

  const updatePlant = async (id: string) => {
    try {
      const token = users.userLogged?.token;
      if (!token) throw new Error("You must to be logged");
      const result = await repo.getPlantById(id, token);
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

import { useEffect, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { PlantInTheList } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import CardPlant from "../card/card.plant";

export default function PlantList() {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { getPlants, plants } = usePlants(repo);
  useEffect(() => {
    getPlants();
  }, [getPlants]);
  const plantsArray = plants.plantList;
  return (
    <>
      <h1>Let's find your plants!</h1>
      <ul>
        {plantsArray.map((item: PlantInTheList) => (
          <CardPlant info={item} key={item.id}></CardPlant>
        ))}
      </ul>
    </>
  );
}

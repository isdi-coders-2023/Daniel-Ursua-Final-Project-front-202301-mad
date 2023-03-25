import { useEffect, useMemo } from "react";
import { Card } from "react-bootstrap";
import { usePlants } from "../../hook/use.plants";
import { PlantInTheList } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";

export default function PlantList() {
  debugger;
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { getPlants, plants } = usePlants(repo);
  useEffect(() => {
    getPlants();
  }, [getPlants]);

  const plantsArray = plants.plantList;
  return (
    <>
      <h1>Let's find your plants!</h1>
      <main>
        {plantsArray.map((item: PlantInTheList) => (
          <Card {...item} key={item.id}></Card>
        ))}
      </main>
    </>
  );
}

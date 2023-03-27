import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { PlantInTheList } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";

type CardProps = {
  info: PlantInTheList;
};

export default function CardPlant({ info }: CardProps) {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { updatePlant } = usePlants(repo);

  const handleClick = async (ev: SyntheticEvent) => {
    await updatePlant(info.id);
  };

  return (
    <div onClick={handleClick}>
      <li>
        <span>{info.photo}</span>
        <p>{info.location}</p>
        <p>{info.name}</p>
      </li>
    </div>
  );
}

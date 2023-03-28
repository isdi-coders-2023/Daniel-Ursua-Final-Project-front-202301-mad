import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { PlantInTheList } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import { Delete } from "../delete/delete.plant";

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
      <li key={info.id}>
        <span>
          <img src={info.photo} alt={info.name} />
        </span>
        <p>{info.location}</p>
        <p>{info.name}</p>
        <Delete id={info.id}></Delete>
      </li>
    </div>
  );
}

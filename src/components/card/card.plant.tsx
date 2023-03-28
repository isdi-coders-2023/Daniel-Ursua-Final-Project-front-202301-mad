import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { PlantInTheList } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import { Delete } from "../delete/delete.plant";
import styles from "./card.module.scss";

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
      <li key={info.id} className={styles.card}>
        <img src={info.photo} alt={info.name} className={styles.photo} />
        <section className={styles.info}>
          <p className={styles.location}>{info.location}</p>
          <span className={styles.name}>
            <p>{info.name}</p>
            <span className={styles.delete}>
              <Delete id={info.id}></Delete>
            </span>
          </span>
        </section>
      </li>
    </div>
  );
}

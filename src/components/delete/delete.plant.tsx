import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import styles from "./delete.plant.module.scss";

export type deleteProps = {
  id: string;
};

export function Delete({ id }: deleteProps) {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { deletePlantById } = usePlants(repo);
  const handleClick = async (ev: SyntheticEvent) => {
    deletePlantById(id);
  };

  return (
    <button type="button" onClick={handleClick} className={styles.delete}>
      Delete
    </button>
  );
}

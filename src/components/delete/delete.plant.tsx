import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { PlantsApiRepo } from "../../services/plants.api.repo";

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
    <button type="button" onClick={handleClick}>
      Borrar
      <i role="button" className="fa-solid fa-shovel"></i>
    </button>
  );
}

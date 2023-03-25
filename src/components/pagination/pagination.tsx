import { SyntheticEvent, useEffect, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { PlantsApiRepo } from "../../services/plants.api.repo";

export function Pagination() {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { getPlants } = usePlants(repo);
  useEffect(() => {
    getPlants();
  }, [getPlants]);

  const handleLoad = async (ev: SyntheticEvent) => {
    await getPlants();
  };
  return (
    <>
      <button onClick={handleLoad}> Load more</button>
    </>
  );
}

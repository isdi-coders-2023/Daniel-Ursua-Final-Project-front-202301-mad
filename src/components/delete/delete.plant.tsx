import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { useUsers } from "../../hook/use.users";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import { UsersApiRepo } from "../../services/users.api.repo";

export type deleteProps = {
  id: string;
};

export function Delete({ id }: deleteProps) {
  debugger;
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const userRepo = useMemo(() => new UsersApiRepo(), []);
  const { deletePlantById } = usePlants(repo);
  const { checkUser } = useUsers(userRepo);
  const validUser = checkUser(id);
  const handleClick = async (ev: SyntheticEvent) => {
    deletePlantById(id);
  };

  if (validUser) {
    return (
      <>
        <i
          role="button"
          onClick={handleClick}
          className="fa-solid fa-shovel"
        ></i>
      </>
    );
  }
  return null;
}

import { Plant } from "./plant.model";

export type User = { id: string } & ProtoUser;

export type ProtoUser = {
  name: string;
  age: string;
  gender: string;
  email: string;
  passwd: string;
  friends: User[];
  enemies: User[];
};

export type State = {
  userLogged: {
    token: string;
    user: User;
  } | null;
  plants: Plant[];
};

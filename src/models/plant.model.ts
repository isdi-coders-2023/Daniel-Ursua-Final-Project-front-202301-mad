import { User } from "./user.model";

export type Ubication = "indoor" | "outdoor" | "both";

export type ProtoPlant = {
  photo: string;
  name: string;
  ubication: Ubication;
  height: string;
  lightness: string;
  humidity: string;
  difficult: string;
  petFriendly: boolean;
};

export type PlantList = {
  photo: string;
  name: string;
  ubication: Ubication;
};
export type hasId = {
  id: string;
};
export type Plant = hasId & ProtoPlant;

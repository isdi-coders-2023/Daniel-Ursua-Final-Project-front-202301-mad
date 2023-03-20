import { Plant, ProtoPlant } from "../models/plant.model";

export interface PlantRepoStructure {
  addPlantRepo(info: ProtoPlant): Promise<Plant>;
}

export class PlantsApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/plants/";
  }
  async addPlantRepo(info: ProtoPlant): Promise<Plant> {
    const resp = await fetch(this.url + "add", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as Plant;

    return data;
  }
}

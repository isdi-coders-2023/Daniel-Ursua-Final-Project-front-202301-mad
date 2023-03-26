import { Plant, PlantInTheList, ProtoPlant } from "../models/plant.model";

export interface PlantRepoStructure {
  addPlantRepo(info: ProtoPlant): Promise<Plant>;
}

export class PlantsApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/plants/";
  }
  async addPlantRepo(info: ProtoPlant, token: string): Promise<Plant> {
    const resp = await fetch(this.url + "add", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as Plant;

    return data;
  }
  async getPlantsRepo(token: string, page?: number): Promise<PlantInTheList[]> {
    const resp = await fetch(`${this.url}?page=${page}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data.results;
  }
  async getPlantById(id: string, token: string): Promise<Plant> {
    const resp = await fetch(this.url + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as Plant;
    return data;
  }
}

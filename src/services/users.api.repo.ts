import { ProtoUser } from "../models/user.model";
import { LoginData } from "../reducer/user.slice";

export interface UserRepoStructure {
  registerUser(user: ProtoUser): Promise<LoginData>;
  loginUser(user: ProtoUser): Promise<LoginData>;
}

export class UserApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users/";
  }
  async loginUser(user: ProtoUser): Promise<LoginData> {
    const resp = await fetch(this.url + "login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as LoginData;

    return data;
  }
}

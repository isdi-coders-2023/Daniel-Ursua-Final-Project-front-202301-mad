import { User } from "../models/user.model";
import { LoginData } from "../reducer/user.slice";

export interface UserRepoStructure {
  registerUserRepo(user: Partial<User>): Promise<User>;
  loginUser(user: Partial<User>): Promise<LoginData>;
}

export class UsersApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users/";
  }
  async registerUserRepo(user: Partial<User>): Promise<User> {
    const resp = await fetch(this.url + "register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as User;

    return data;
  }
  async loginUserRepo(user: Partial<User>): Promise<LoginData> {
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

import { ProtoUser } from "../models/user.model";
import { LoginData } from "../reducer/user.slice";
import { UserApiRepo } from "./users.api.repo";

const fetch = jest.fn();
const mockResp = {
  token: "test",
  user: "test",
} as unknown as LoginData;
const mockUser = {
  name: "test",
} as ProtoUser;
describe("Given the users api repo", () => {
  const repo = new UserApiRepo();

  describe("When instantiated", () => {
    test("Then it should make a new instance", () => {
      expect(repo).toBeInstanceOf(UserApiRepo);
    });
  });
  describe("When we call the login user method", () => {
    test("If the answer is not ok, then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("error");
      const result = repo.loginUser(mockUser);
      await expect(result).rejects.toThrow();
    });
    test("If the answer is ok, then it should return the login info", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResp),
      });
      const result = await repo.loginUser(mockUser);
      expect(result).toEqual(mockResp);
    });
  });
});

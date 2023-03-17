import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { User } from "../models/user.model";
import { login } from "../reducer/user.slice";
import { UsersApiRepo } from "../services/users.api.repo";

export function useUsers(repo: UsersApiRepo) {
  const users = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const loginUser = async (info: Partial<User>) => {
    try {
      const data = await repo.loginUserRepo(info);
      dispatch(login(data));
    } catch (error) {
      console.error("Error");
    }
  };
  const register = async (info: Partial<User>) => {
    try {
      await repo.registerUserRepo(info);
    } catch (error) {
      console.error("error");
    }
  };
  return {
    users,
    loginUser,
    register,
  };
}

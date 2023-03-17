/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hook/use.users";
import { User } from "../../models/user.model";
import { UsersApiRepo } from "../../services/users.api.repo";

export function LogUserForm() {
  const repo = useMemo(() => new UsersApiRepo(), []);
  const { loginUser } = useUsers(repo);

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formLogUser = ev.currentTarget;
    const logUser: Partial<User> = {
      email: (formLogUser.elements[0] as HTMLInputElement).value,
      passwd: (formLogUser.elements[1] as HTMLInputElement).value,
    };
    loginUser(logUser);

    formLogUser.reset();
  };

  return (
    <>
      <form className="login-form" data-testid="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="login-form__field"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-form__field"
          name="password"
          role="textbox"
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

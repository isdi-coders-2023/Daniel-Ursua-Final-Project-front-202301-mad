/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hook/use.users";
import { User } from "../../models/user.model";
import { UsersApiRepo } from "../../services/users.api.repo";

export function RegUserForm() {
  const repo = useMemo(() => new UsersApiRepo(), []);
  const { register } = useUsers(repo);

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formRegUser = ev.currentTarget;
    const regUser: Partial<User> = {
      name: (formRegUser.elements[0] as HTMLInputElement).value,
      email: (formRegUser.elements[1] as HTMLInputElement).value,
      passwd: (formRegUser.elements[2] as HTMLInputElement).value,
    };
    register(regUser);

    formRegUser.reset();
  };

  return (
    <>
      <form className="reg-form" data-testid="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          className="reg-form__field"
          name="name"
        />
        <input
          type="text"
          placeholder="Email"
          className="reg-form__field"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="reg-form__field"
          name="password"
          role="textbox"
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
}

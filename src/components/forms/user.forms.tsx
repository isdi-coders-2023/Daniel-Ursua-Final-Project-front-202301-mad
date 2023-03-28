/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hook/use.users";
import { User } from "../../models/user.model";
import { UsersApiRepo } from "../../services/users.api.repo";
import { useNavigate } from "react-router-dom";
import styles from "./logform.module.scss";

export function LogUserForm() {
  const repo = useMemo(() => new UsersApiRepo(), []);
  const { loginUser } = useUsers(repo);
  const navigate = useNavigate();

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formLogUser = ev.currentTarget;
    const logUser: Partial<User> = {
      email: (formLogUser.elements[0] as HTMLInputElement).value,
      passwd: (formLogUser.elements[1] as HTMLInputElement).value,
    };
    loginUser(logUser);
    navigate("/plants");
    formLogUser.reset();
  };

  return (
    <>
      <form className={styles.form} data-testid="form" onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className={styles.email}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.passwd}
            name="password"
            role="textbox"
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </>
  );
}

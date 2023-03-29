import { Link } from "react-router-dom";
import { MenuOption } from "../header/header.js";
import styles from "./nav.menu.module.scss";

export type MenuProps = {
  options: MenuOption[];
};

export function NavMenu({ options }: MenuProps) {
  console.log({ options });
  return (
    <nav>
      <ul className={styles.ul}>
        {options.map((item: MenuOption) => (
          <li key={item.label} className={styles.item}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

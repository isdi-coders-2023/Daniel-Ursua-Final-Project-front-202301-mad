import { NavMenu } from "../nav.menu/nav.menu";
import styles from "./header.module.scss";

export type MenuOption = {
  label: string;
  path: string;
};

export const headerOptions: MenuOption[] = [
  { label: "Plants", path: "/plants" },
  { label: "Add plant", path: "/add" },
  { label: "Logout", path: "/" },
];

export function Header() {
  return (
    <header data-testid="header" className={styles.header}>
      <NavMenu options={headerOptions} />
    </header>
  );
}

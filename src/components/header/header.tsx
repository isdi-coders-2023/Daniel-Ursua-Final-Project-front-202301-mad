import { NavMenu } from "../nav.menu/nav.menu";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Plants", path: "/plants" },
  { label: "My plants", path: "/my-plants" },
  { label: "Add plant", path: "/add" },
];

export function Header() {
  return (
    <header>
      <h1>PlantApp</h1>
      <NavMenu options={menuOptions} />
    </header>
  );
}

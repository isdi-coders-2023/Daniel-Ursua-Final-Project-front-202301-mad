import { NavMenu } from "../nav.menu/nav.menu";

export type MenuOption = {
  label: string;
  path: string;
};

export const headerOptions: MenuOption[] = [
  { label: "Plants", path: "/plants" },
  { label: "Add plant", path: "/add" },
  { label: "Greenhouse", path: "/greenhouse" },
];

export function Header() {
  return (
    <header data-testid="header">
      <NavMenu options={headerOptions} />
    </header>
  );
}

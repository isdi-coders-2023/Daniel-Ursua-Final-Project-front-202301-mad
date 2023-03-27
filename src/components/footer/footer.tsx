import { MenuOption } from "../header/header";
import { NavMenu } from "../nav.menu/nav.menu";

export const footerOptions: MenuOption[] = [
  { label: "Plants", path: "/plants" },
  { label: "Add plant", path: "/add" },
  { label: "Greenhouse", path: "/greenhouse" },
];

export function Footer() {
  return (
    <footer data-testid="footer">
      <NavMenu options={footerOptions} />
    </footer>
  );
}

import { Link } from "react-router-dom";
import { MenuOption } from "../header/header.js";

export type MenuProps = {
  options: MenuOption[];
};

export function NavMenu({ options }: MenuProps) {
  console.log({ options });
  return (
    <nav>
      <ul>
        {options.map((item: MenuOption) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

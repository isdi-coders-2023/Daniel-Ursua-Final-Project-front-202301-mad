import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MenuOption } from "../header/header";
import { NavMenu } from "./nav.menu";

const mockOptions: MenuOption[] = [
  {
    label: "test",
    path: "test",
  },
  {
    label: "test2",
    path: "test2",
  },
];

describe("Given the nav component", () => {
  render(
    <Provider store={store}>
      <NavMenu menuOptions={mockOptions}></NavMenu>
    </Provider>
  );

  describe("When it is render", () => {
    test("Then it should print an unorder list", () => {});
  });
});

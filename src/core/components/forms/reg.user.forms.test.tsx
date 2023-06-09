/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UsersApiRepo } from "../../../features/users/services/users.api.repo";
import { RegUserForm } from "./reg.user.forms";

jest.mock("../../../features/users/hooks/use.users.tsx");

describe("Given RegUserForm component", () => {
  beforeEach(async () => {
    await act(async () => {
      (useUsers as jest.Mock).mockReturnValue({
        register: jest.fn(),
      });
      render(
        <Provider store={store}>
          <RegUserForm></RegUserForm>
        </Provider>
      );
    });
  });

  describe("When the component is rendered", () => {
    test("Then the name <input> should be in the document", () => {
      const inputs = screen.getAllByRole("textbox");
      expect(inputs[0]).toBeInTheDocument();
    });

    test("Then the mail <input> should be in the document", () => {
      const inputs = screen.getAllByRole("textbox");
      expect(inputs[1]).toBeInTheDocument();
    });

    test("Then the password <input> should be in the document", () => {
      const inputs = screen.getAllByRole("textbox");
      expect(inputs[2]).toBeInTheDocument();
    });

    test("Then the <button> should be in the document", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then, the handleSubmit function should be called", async () => {
      const usersMockRepo = {} as unknown as UsersApiRepo;
      const inputs = screen.getAllByRole("textbox");
      await userEvent.type(inputs[0], "test");
      await userEvent.type(inputs[1], "test");
      await userEvent.type(inputs[2], "test");
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(useUsers(usersMockRepo).register).toHaveBeenCalledWith({
        name: "test",
        email: "test",
        passwd: "test",
      });
    });
  });
});

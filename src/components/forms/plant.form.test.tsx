/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { usePlants } from "../../hook/use.plants";
import { PlantsApiRepo } from "../../services/plants.api.repo";
import { PlantForm } from "./plant.form";

jest.mock("../../hook/use.plants");

beforeEach(async () => {
  await act(async () => {
    (usePlants as jest.Mock).mockReturnValue({
      addPlant: jest.fn(),
    });
    render(
      <Provider store={store}>
        <PlantForm></PlantForm>
      </Provider>
    );
  });
});
describe("Given AddPlantForm component", () => {
  describe("When the component is rendered", () => {
    test("Then the text inputs should be in the document", () => {
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
    });

    test("Then the radio inputs should be in the document", () => {
      const inputs = screen.getAllByRole("radio");
      expect(inputs[0]).toBeInTheDocument();
      expect(inputs[1]).toBeInTheDocument();
      expect(inputs[2]).toBeInTheDocument();
    });

    test("Then the height input should be in the document", () => {
      const input = screen.getByRole("spinbutton");
      expect(input).toBeInTheDocument();
    });

    test("Then the range input should be in the document", () => {
      const inputs = screen.getAllByRole("slider");
      expect(inputs[0]).toBeInTheDocument();
      expect(inputs[1]).toBeInTheDocument();
      expect(inputs[2]).toBeInTheDocument();
    });

    test("Then the petFriendly input should be in the document", () => {
      const input = screen.getByRole("checkbox");
      expect(input).toBeInTheDocument();
    });

    test("Then the <button> should be in the document", () => {
      const input = screen.getByRole("button");
      expect(input).toBeInTheDocument();
    });
  });
});
describe("Given AddplantForm component", () => {
  describe("When there is no file to upload", () => {
    test("Then, the handleSubmit function should not be called", async () => {
      const plantsMockRepo = {} as unknown as PlantsApiRepo;
      const textInput = screen.getByRole("textbox");
      await userEvent.type(textInput, "test");
      const radioInputs = screen.getByLabelText("Indoor");
      await fireEvent.change(radioInputs, { target: { value: "outdoor" } });
      const numberInput = screen.getByRole("spinbutton");
      await userEvent.type(numberInput, "6");
      const sliderInputs = screen.getAllByRole("slider");
      await fireEvent.change(sliderInputs[0], { target: { value: 2 } });
      await fireEvent.change(sliderInputs[1], { target: { value: 2 } });
      await fireEvent.change(sliderInputs[2], { target: { value: 2 } });
      const checkInput = screen.getByRole("checkbox");
      await userEvent.click(checkInput);
      const fileInput = screen.getByPlaceholderText("Photo");
      userEvent.type(fileInput, "test");
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(usePlants(plantsMockRepo).addPlant).not.toHaveBeenCalled();
    });
  });
  describe("When all the fields are complete", () => {
    test("Then, the handleSubmit function should be called", async () => {
      const plantsMockRepo = {} as unknown as PlantsApiRepo;
      const textInput = screen.getByRole("textbox");
      await userEvent.type(textInput, "test");
      const radioInputs = screen.getByLabelText("Indoor");
      await fireEvent.change(radioInputs, { target: { value: "outdoor" } });
      const numberInput = screen.getByRole("spinbutton");
      await userEvent.type(numberInput, "6");
      const sliderInputs = screen.getAllByRole("slider");
      await fireEvent.change(sliderInputs[0], { target: { value: 2 } });
      await fireEvent.change(sliderInputs[1], { target: { value: 2 } });
      await fireEvent.change(sliderInputs[2], { target: { value: 2 } });
      const checkInput = screen.getByRole("checkbox");
      await userEvent.click(checkInput);
      const fileInput = screen.getByPlaceholderText("Photo");
      userEvent.upload(
        fileInput,
        new File(["test"], "test.png", {
          type: "image/png",
        })
      );
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(usePlants(plantsMockRepo).addPlant).toHaveBeenCalledWith(
        {
          name: "test",
          location: "outdoor",
          height: "6",
          humidity: "2",
          lightness: "2",
          difficult: "2",
          petFriendly: true,
        },
        new File(["test"], "test.png", {
          type: "image/png",
        })
      );
    });
  });
});

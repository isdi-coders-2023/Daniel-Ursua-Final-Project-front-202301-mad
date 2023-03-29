import { PlantForm } from "../../components/forms/plant.form";
import { Header } from "../../components/header/header";

const addOptions = {
  h1: "Add",
  h2: "a new plant",
};

export default function AddPage() {
  return (
    <>
      <PlantForm titles={addOptions}></PlantForm>
      <Header></Header>
    </>
  );
}

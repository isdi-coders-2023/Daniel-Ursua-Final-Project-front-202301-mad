import { PlantForm } from "../../core/components/forms/plant.form";

const editOptions = {
  h1: "Edit",
  h2: "your plant",
};

export default function EditPage() {
  return (
    <>
      <PlantForm titles={editOptions}></PlantForm>
    </>
  );
}

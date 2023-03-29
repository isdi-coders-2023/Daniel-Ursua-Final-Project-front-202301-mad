import { PlantForm } from "../../components/forms/plant.form";
import { Header } from "../../components/header/header";
import styles from "./add.module.scss";

export default function AddPage() {
  return (
    <>
      <h1 className={styles.h1}>Add</h1>
      <h2 className={styles.h2}>a new plant</h2>
      <PlantForm></PlantForm>
      <Header></Header>
    </>
  );
}

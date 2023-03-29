import { Header } from "../../components/header/header";
import { Pagination } from "../../components/pagination/pagination";
import PlantList from "../../components/plantList/plantList";
import styles from "./plantList.module.scss";

export default function PlantListPage() {
  return (
    <>
      <PlantList></PlantList>
      <span className={styles.pagination}>
        <Pagination></Pagination>
      </span>
      <Header></Header>
    </>
  );
}

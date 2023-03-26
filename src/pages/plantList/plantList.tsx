import { Header } from "../../components/header/header";
import { Pagination } from "../../components/pagination/pagination";
import PlantList from "../../components/plantList/plantList";

export default function PlantListPage() {
  return (
    <>
      <Header></Header>
      <PlantList></PlantList>
      <Pagination></Pagination>
    </>
  );
}

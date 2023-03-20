import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/login/login"));
const Register = lazy(() => import("../pages/register/register"));
const AddPlants = lazy(() => import("../pages/add/add"));
//Future rout const Plants = lazy (() => import ('../pages/plants/plantList'));
//Future rout const Plants = lazy (() => import ('../pages/plants/editPlant'));
//Future rout const Plants = lazy (() => import ('../pages/plants/detail'));

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/add"} element={<Register></Register>}></Route>
      </Routes>
    </Suspense>
  );
}

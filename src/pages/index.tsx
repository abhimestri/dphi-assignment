import Navbar from "../container/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;

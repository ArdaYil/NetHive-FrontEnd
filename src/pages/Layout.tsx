import { Outlet } from "react-router-dom";
import NavBar from "../components/general/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;

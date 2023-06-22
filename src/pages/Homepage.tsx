import NavSidebar from "../components/NavSidebar/NavSidebar";
import { Navigate } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navigate to="/register" />
      <NavSidebar />
    </>
  );
};

export default Homepage;

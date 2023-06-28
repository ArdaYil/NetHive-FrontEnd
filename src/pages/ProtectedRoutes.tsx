import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../hooks/useAuth";
import NavBar from "../components/NavBar";

const ProtectedRoutes = () => {
  const user = getUser();

  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;

import { Navigate, Outlet } from "react-router-dom";
import useRegister from "../hooks/userRegister";

const ProtectedRoutes = () => {
  const user = null;

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoutes;

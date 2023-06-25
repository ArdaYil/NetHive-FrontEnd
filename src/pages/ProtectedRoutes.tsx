import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const user = useAuth();

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoutes;

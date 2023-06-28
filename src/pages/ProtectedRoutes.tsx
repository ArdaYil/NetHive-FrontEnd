import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const user = getUser();

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoutes;

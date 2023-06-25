import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

export default router;

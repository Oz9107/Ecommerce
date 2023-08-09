import { Navigate, Outlet } from "react-router-dom";

//realizamos la ruta protegida

const ProtectedRoutes = () => {
  if (localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectTo = "/" }) => {
  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = (props) => {
  const { restricted = false, redirectTo = "/" } = props;

  const isLoggedIn = localStorage.getItem("token");

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;

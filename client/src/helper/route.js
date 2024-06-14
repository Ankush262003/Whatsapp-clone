import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, Component }) => {
  return isAuth ? Component : <Navigate to={"/login"} />
};

const PublicRoute = ({ isAuth, Component }) => {
  return isAuth ? <Navigate to={"/"} /> : Component;
};

export { PrivateRoute, PublicRoute };

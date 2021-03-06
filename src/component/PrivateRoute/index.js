import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
function PrivateRoute(props) {
  const isLoggeIn = useAuth();
  return isLoggeIn ? <Route {...props} /> : <Redirect to="/Login" />;
}

export default PrivateRoute;

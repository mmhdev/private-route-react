import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import AuthProvider from "./component/Provider/AuthProvider";
import PrivateRoute from "./component/PrivateRoute";
import "./styles.css";

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        {routes.map((route, item) =>
          route.private ? (
            <PrivateRoute key={item} {...route} />
          ) : (
            <Route key={item} {...route} />
          )
        )}
      </Switch>
    </AuthProvider>
  );
}

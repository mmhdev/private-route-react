import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";
import useAuthAction from "../../hooks/useAuthAction";
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {
  const setToken = useAuthAction();
  const history = useHistory();
  const isLogged = useAuth();
  const handelLogin = () => {
    setToken("QpwL5tke4Pnpja7X4");
    history.push("/");
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {isLogged ? <Redirect to="/" /> : null}
      <Typography variant="h6">Welecome To Login Page</Typography>
      <Typography variant="body1">
        you cant access to panel before login try it ...{" "}
      </Typography>
      <Button onClick={() => history.push("/")} color="primary">
        Switch To Panel
      </Button>
      <Button
        onClick={() => handelLogin()}
        className="btn"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;

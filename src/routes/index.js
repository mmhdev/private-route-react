import Login from "../pages/Login";
import Panel from "../pages/Panel";
import NotFound from "../pages/NotFound";

const routes = [
  {
    exact: true,
    path: "/",
    component: Panel,
    private: true
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;

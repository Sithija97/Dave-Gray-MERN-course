import { createBrowserRouter } from "react-router-dom";
import { Layout, Public, Login } from "../components";

export const ROOT = "/";
export const LOGIN = "login";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <Public /> },
      { path: LOGIN, element: <Login /> },
    ],
  },
]);

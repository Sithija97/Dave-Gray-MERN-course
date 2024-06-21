import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import { Public } from "../components/public";
import { Login } from "../features/auth/login";
import { DashLayout } from "../components/dash-layout";
import { Welcome } from "../features/auth/welcome";
import { Notes } from "../features/notes";
import { Users } from "../features/users";

export const ROOT = "/";
export const LOGIN = "login";
export const DASH = "dash";
export const NOTES = "notes";
export const USERS = "users";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <Public /> },
      { path: LOGIN, element: <Login /> },
      {
        path: DASH,
        element: <DashLayout />,
        children: [
          { index: true, element: <Welcome /> },
          { path: NOTES, element: <Notes /> },
          { path: USERS, element: <Users /> },
        ],
      },
    ],
  },
]);

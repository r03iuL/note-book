import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Archive from "../components/dashboard/notes/Archive";
import AllNotes from "../components/dashboard/notes/AllNotes";
import Trash from "../components/dashboard/notes/Trash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element:<Home />
      }, {
        path: "login", 
        element: <LogIn />,
      }, {
        path: "signup",
        element: <SignUp />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element:<AllNotes />
      },
       {
        path: "archive",
        element: <Archive/>,
      },
       {
        path: "trash",
        element: <Trash />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

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
       
    ],
  },
]);

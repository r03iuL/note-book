import React from "react";
import NavBar from "../components/homePage/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/homePage/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

import React from "react";
import SideBar from "../components/dashboard/SideBar";
import DashNav from "../components/dashboard/DashNav";
import FolderCarousel from "../components/dashboard/FolderCarousel";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col flex-1 bg-white">
        <DashNav />
        <main className="p-6 overflow-y-auto flex-1 rounded-xl bor-2 border-purple-600">
          <FolderCarousel />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

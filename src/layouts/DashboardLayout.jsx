import React from "react";
import SideBar from "../components/dashboard/SideBar";
import DashNav from "../components/dashboard/DashNav";
import FolderCarousel from "../components/dashboard/folders/FolderCarousel";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen max-w-screen m-0">
      <SideBar />
      <div className="flex flex-col flex-1 bg-white">
        <DashNav />
        <main className="p-6 w-full overflow-y-auto overflow-x-hidden flex-1 rounded-xl bor-2 border-purple-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-mono">
         Folders
      </h2>
          <FolderCarousel />
          <h2 className="text-2xl font-bold text-gray-800 my-4 font-mono">
         All Notes
      </h2>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

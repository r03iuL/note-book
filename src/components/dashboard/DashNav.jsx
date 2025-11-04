import React from "react";
import { Link } from "react-router-dom";

const DashNav = () => {
  return (
    <div className="navbar bg-base-100 shadow-none py-6 border-b-2 border-purple-500/80">
      <div className="flex justify-between w-4/5 ">
        <h3 className="font-semibold font-mono text-3xl px-4">MY NOTES </h3>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-4/5"
        />
      </div>

      
    </div>
  );
};

export default DashNav;

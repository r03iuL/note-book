import React from "react";
import { Link } from "react-router-dom";

const DashNav = () => {
  return (
    <div className="navbar bg-base-100 shadow-none py-6">
      <div className="flex justify-between w-4/5 ">
        <h3 className="font-semibold font-manrope text-4xl px-4">MY NOTES </h3>
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

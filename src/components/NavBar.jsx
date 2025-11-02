import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-transparent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-purple-700"
            >
             <li>
                <a >Home</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>About Us </a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Log In</a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
          <a className="btn bg-transparent border-none shadow-none text-white text-4xl ml-0 md:ml-6 font-lobster" href="#">NoteBook</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg gap-2">
            <li>
                <a className="bg-transparent rounded-full hover:bg-purple-400 border-2">Home</a>
              </li>
              <li>
                <a className="bg-transparent rounded-full hover:bg-purple-400">Dashboard</a>
              </li>
              <li>
                <a className="bg-transparent rounded-full hover:bg-purple-400">Pricing</a>
              </li>
              <li>
                <a className="bg-transparent rounded-full hover:bg-purple-400">About Us </a>
              </li>

              <li>
                <a className="bg-transparent rounded-full hover:bg-purple-400">Contact</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          <a className="btn rounded-full text-lg text-purple-700  rounded-full hover:bg-purple-400 hover:text-white ">Log In</a>
          <a className="btn rounded-full bg-transparent shadow-none border-2 text-white text-lg mr-10 bg-transparent rounded-full hover:bg-purple-400">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

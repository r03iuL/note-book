import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-linear-to-b from-black/30 to-transparent text-white z-50 absolute top-0">
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
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow text-purple-700"
            >
             <li>
                <a href="/#home" >Home</a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a href="/#pricing">Pricing</a>
              </li>
              <li>
                <a href="/#about-us">About Us</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>

              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn bg-transparent border-none shadow-none text-white text-4xl ml-0 md:ml-6 font-lobster" href="#">NoteBook</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg gap-2">
            <li>
                <a href="/#home" className="bg-transparent rounded-full hover:bg-purple-400 border-2">Home</a>
              </li>
              <li>
                <Link to="/dashboard" className="bg-transparent rounded-full hover:bg-purple-400">Dashboard</Link>
              </li>
              <li>
                <a href="/#pricing" className="bg-transparent rounded-full hover:bg-purple-400">Pricing</a>
              </li>
              <li>
                <a href="/#about-us" className="bg-transparent rounded-full hover:bg-purple-400">About Us </a>
              </li>

              <li>
                <a href="/#faq" className="bg-transparent rounded-full hover:bg-purple-400">FAQ</a>
              </li>

              <li>
                <a href="/#contact" className="bg-transparent rounded-full hover:bg-purple-400">Contact</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          <Link to="/login" className="btn rounded-full text-lg text-purple-700 hover:bg-purple-400 hover:text-white ">Log In</Link>
          <Link to="/signup" className="btn rounded-full bg-transparent shadow-none border-2 text-white text-lg mr-10  hover:bg-purple-400">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

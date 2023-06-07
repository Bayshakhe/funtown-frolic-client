import React, { useState } from "react";
import logo from "/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [dropdownNav, setDropdownNav] = useState(false);
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : "notActive")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instractors"
          className={({ isActive }) => (isActive ? "activeLink" : "notActive")}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "activeLink" : "notActive")}
        >
          Classes
        </NavLink>
      </li>

      <li>
        <a className="button">Login</a>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-lg static rounded-full px-5">
      <div className="navbar-start">
        <img src={logo} alt="" className="w-14" />
        <h1 className="text-3xl font-semibold">Funtown<span className="text-[#019999]">Frolic</span></h1>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">{navItems}</ul>
        </div>
        <div onClick={() => setDropdownNav(!dropdownNav)} className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {dropdownNav && (
            <ul
              tabIndex={0}
              className="menu menu-sm absolute right-0  mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
            >
              {navItems}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

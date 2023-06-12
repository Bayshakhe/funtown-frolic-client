import React, { useState } from "react";
import logo from "/Logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Header = () => {
  const { user, logOut } = useAuth();
  const [dropdownNav, setDropdownNav] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instractors"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allClasses"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={`${
              isAdmin
                ? "/dashboard/manageClasses"
                : isInstructor
                ? "dashboard/myClass"
                : "/dashboard/selectedClass"
            }`}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Dashboard
          </NavLink>
          {/* <NavLink
          to={`/dashboard/myClass`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          Dashboard
        </NavLink> */}
        </li>
      )}
      {user && (
        <div className="avatar">
          <div className="w-[44px] rounded-full mr-2 ml-3">
            <img src={user.photoURL} title={user.displayName} />
          </div>
        </div>
      )}
      {user ? (
        <li>
          <button onClick={logOut} className="button">
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login" className="button">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar z-10 bg-white bg-opacity-80 shadow-lg fixed rounded-full px-3 py-0">
      <div className="navbar-start">
        <img src={logo} alt="" className="w-12" />
        <Link to="/" className="text-2xl font-semibold">
          Funtown<span className="text-[#019999]">Frolic</span>
        </Link>
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

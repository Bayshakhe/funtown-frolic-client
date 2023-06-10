import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "/Logo.png";
import useAuth from "../../hooks/useAuth";
import StudentDashboard from "../../pages/Dashboard/StudentDashboard";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../../pages/Dashboard/InstructorDashboard";

const Dashboard = () => {
  const { user,logOut } = useAuth();
  const student = true;
  const admin = false;
  const instructor = false;
//   console.log(user);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="button drawer-button lg:hidden"
          >
            Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content gap-2">
            {/* Sidebar content here */}
            <li>
              <div className="navbar-start flex items-center gap-2">
                <img src={logo} alt="" className="w-12" />
                <Link to="/" className="text-2xl font-semibold">
                  Funtown<span className="text-[#019999]">Frolic</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="flex flex-col mx-auto mb-3">
                <img src={user?.photoURL} className="w-20 rounded-full" />
                <p className="font-bold text-xl text-teal">
                  {user?.displayName}
                </p>
              </div>
            </li>
            {student && <StudentDashboard></StudentDashboard>}
            {admin && <AdminDashboard></AdminDashboard>}
            {instructor && <InstructorDashboard></InstructorDashboard>}
            <div className="divider my-2 text-teal font-semibold ">
              ---------------------------------------------
            </div>

            <li className="font-semibold">
              <NavLink to="/">
                <BiHome className="text-xl"></BiHome>
                Home
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to="/allClasses"
              >
              <BsReverseLayoutTextSidebarReverse className="text-xl"></BsReverseLayoutTextSidebarReverse>
                All Classes
              </NavLink>
            </li>
            <li onClick={logOut} className="font-semibold">
              <NavLink to='/'>
                <AiOutlineLogout className="text-xl"></AiOutlineLogout>
                Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

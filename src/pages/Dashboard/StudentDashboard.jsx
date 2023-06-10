import React from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/selectedClass"
          className={({ isActive }) =>
            isActive ? "bg-teal text-white font-semibold" : "font-semibold"
          }
        >
          <AiOutlineSelect className="text-xl"></AiOutlineSelect>
          My Selected Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dsdi"
          className={({ isActive }) =>
            isActive ? "bg-teal text-white font-semibold" : "font-semibold"
          }
        >
          <BiSelectMultiple className="text-xl"></BiSelectMultiple>
          My Enrolled Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dsdi"
          className={({ isActive }) =>
            isActive ? "bg-teal text-white font-semibold" : "font-semibold"
          }
        >
          <TfiWallet className="text-xl"></TfiWallet>
          Payment History
        </NavLink>
      </li>
    </>
  );
};

export default StudentDashboard;

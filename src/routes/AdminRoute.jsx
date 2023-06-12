import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading, refetch] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="text-center mt-32">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  } else if (user && isAdmin) {
    return children;
  }
  refetch();
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;

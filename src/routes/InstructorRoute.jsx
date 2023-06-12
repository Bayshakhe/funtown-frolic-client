import React from "react";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const [isInstructor, isInstructorLoading, refetch] = useInstructor();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <div className="text-center mt-32">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  } else if (user && isInstructor) {
    return children;
  }
  refetch();
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;

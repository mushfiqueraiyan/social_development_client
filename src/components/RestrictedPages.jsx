import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router";

const RestrictedPages = ({ children }) => {
  const { user, loader } = use(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
        <span className="loading loading-bars loading-xl text-green-600"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }

  return children;
};

export default RestrictedPages;

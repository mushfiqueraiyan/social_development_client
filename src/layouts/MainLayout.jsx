import React, { use, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthProvider";
import useTheme from "../hook/useTheme";

const MainLayout = () => {
  const theme = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  return (
    <div>
      <div
        className={`sticky top-0 z-20 ${
          theme == "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        }`}
      >
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

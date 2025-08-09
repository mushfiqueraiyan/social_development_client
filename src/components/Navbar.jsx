import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import { Moon, Sun } from "lucide-react";
import useTheme from "../hook/useTheme";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const [scroll, setScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useTheme();

  const handleLogout = () => {
    try {
      logout();
      toast.error("Logged Out");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const nextTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);

    // This event makes all components update theme state!
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <div>
      <div
        className={` flex items-center px-5 py-2  shadow-sm  z-10 ${
          scroll ? "bg-green-900 text-white " : ""
        }`}
      >
        <div className="flex-1 items-center">
          <Link
            to={"/"}
            className={`text-2xl md:text-3xl font-extrabold ${
              theme == "dark" ? "text-white" : "text-green-700"
            }`}
          >
            Save Trees
          </Link>
        </div>
        <div className="flex items-center">
          {/* Theme controller  */}
          <button
            className="cursor-pointer transition-all "
            onClick={toggleTheme}
          >
            {darkMode ? <Sun size={25} color="yellow" /> : <Moon size={25} />}
          </button>

          {/* Menu start */}
          <ul className="menu menu-horizontal items-center px-1">
            <li className="text-lg mr-2 hidden md:flex">
              <NavLink
                className={({ isPending, isActive }) =>
                  isPending
                    ? "pending..."
                    : isActive
                    ? "border-b-2 border-green-500 "
                    : "hover:border-b-2 border-green-500"
                }
                to={"/upcoming-event"}
              >
                Upcoming Events
              </NavLink>
            </li>
            <li className="text-lg mr-2 hidden md:flex">
              <NavLink
                className={({ isPending, isActive }) =>
                  isPending
                    ? "pending..."
                    : isActive
                    ? "border-b-2 border-green-500 "
                    : "hover:border-b-2 border-green-500"
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li className="text-lg mr-2 hidden md:flex">
              <NavLink
                className={({ isPending, isActive }) =>
                  isPending
                    ? "pending..."
                    : isActive
                    ? "border-b-2 border-green-500 "
                    : "hover:border-b-2 border-green-500"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    data-tooltip-id="name-tooltip"
                    data-tooltip-content={user.displayName}
                    className="w-10 rounded-full relative"
                  >
                    <img alt={user.displayName} src={user.photoURL} />
                  </div>
                </div>
                <Tooltip id="name-tooltip" className="z-10" />

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={"/create-event"}>Create Event</Link>
                  </li>
                  <li>
                    <Link to={"/manage-event"}>Manage Event</Link>
                  </li>
                  <li>
                    <Link to={"/joined-event"}>Joined Event</Link>
                  </li>
                  <li className="block md:hidden">
                    <Link to={"/upcoming-event"}>Upcoming Events</Link>
                  </li>
                  <li className="block md:hidden">
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li className="block md:hidden">
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
                <button
                  onClick={handleLogout}
                  className="py-3 px-5 rounded-xl bg-red-600 text-white text-md ml-3"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <Link
                  to={"/login"}
                  className="btn bg-green-700 text-white rounded-full"
                >
                  Login
                </Link>
                <Link
                  to={"/registration"}
                  className="btn hidden md:flex  text-green-700 bg-transparent border-green-700 rounded-full"
                >
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

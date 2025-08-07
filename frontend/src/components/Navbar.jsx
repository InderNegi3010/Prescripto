import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate, NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

function Navbar() {
  const navigate = useNavigate();
  const { token, userData, setToken } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex items-center justify-between text-sm py-4 sm:py-6 mb-8 border-b border-gray-100 bg-gradient-to-r from-white via-blue-50/30 to-indigo-50/30 backdrop-blur-lg shadow-lg shadow-blue-100/20 rounded-xl mx-2 sm:mx-4 px-4 sm:px-8 sticky top-4 z-50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-200/30">
      {/* Logo with enhanced styling */}
      <div className="relative group">
        <img
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          className="w-32 sm:w-40 lg:w-44 cursor-pointer transform hover:scale-110 transition-all duration-300 hover:drop-shadow-xl relative z-10"
          src={assets.logo}
          alt="logo"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 font-medium bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
        <NavLink
          to="/"
          onClick={() => scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600"
              : "text-slate-700 hover:text-indigo-600"
          }
        >
          {({ isActive }) => (
            <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
              <span className="relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:text-shadow">
                HOME
              </span>
              {isActive ? (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-10 animate-pulse"></div>
              ) : null}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ width: isActive ? "80%" : "0%" }}
              ></div>
            </li>
          )}
        </NavLink>

        <NavLink
          to="/doctors"
          onClick={() => scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600"
              : "text-slate-700 hover:text-indigo-600"
          }
        >
          {({ isActive }) => (
            <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
              <span className="relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                ALL DOCTORS
              </span>
              {isActive ? (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-10 animate-pulse"></div>
              ) : null}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ width: isActive ? "80%" : "0%" }}
              ></div>
            </li>
          )}
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600"
              : "text-slate-700 hover:text-indigo-600"
          }
        >
          {({ isActive }) => (
            <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
              <span className="relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                ABOUT
              </span>
              {isActive ? (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-10 animate-pulse"></div>
              ) : null}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ width: isActive ? "80%" : "0%" }}
              ></div>
            </li>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600"
              : "text-slate-700 hover:text-indigo-600"
          }
        >
          {({ isActive }) => (
            <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
              <span className="relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                CONTACT
              </span>
              {isActive ? (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-10 animate-pulse"></div>
              ) : null}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ width: isActive ? "80%" : "0%" }}
              ></div>
            </li>
          )}
        </NavLink>
      </ul>

      {/* Right side content */}
      <div className="flex items-center gap-2 sm:gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group relative">
            {/* Profile section with glassmorphism effect */}
            <div className="flex items-center gap-1 sm:gap-2 bg-white/70 backdrop-blur-md rounded-full px-2 sm:px-4 py-1 sm:py-2 shadow-lg border border-white/50 transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:scale-105">
              <img
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-indigo-200 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                src={userData.image}
                alt="Profile"
              />
              <img
                className="w-2 sm:w-3 transition-all duration-300 group-hover:rotate-180 group-hover:scale-125 opacity-70"
                src={assets.dropdown_icon}
                alt=""
              />
            </div>

            {/* Enhanced Dropdown */}
            {/* Enhanced Dropdown */}
            <div className="absolute top-0 right-0 pt-12 sm:pt-16 text-base font-medium text-gray-600 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out">
              <div className="min-w-48 sm:min-w-56 bg-white/95 backdrop-blur-xl rounded-2xl flex flex-col gap-2 p-3 sm:p-4 shadow-2xl border border-white/50 transform translate-y-[-20px] group-hover:translate-y-0 transition-all duration-500 ease-out">
                {/* My Profile */}
                <div
                  onClick={() => {
                    navigate("my-profile");
                    scrollTo(0, 0);
                  }}
                  className="hover:text-indigo-600 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 p-2 sm:p-3 rounded-xl transform hover:scale-105 hover:translate-x-2 relative overflow-hidden group/item text-sm sm:text-base"
                >
                  <span className="relative z-10 font-medium">My Profile</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* My Appointments */}
                <div
                  onClick={() => {
                    navigate("my-appointments");
                    scrollTo(0, 0);
                  }}
                  className="hover:text-indigo-600 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 p-2 sm:p-3 rounded-xl transform hover:scale-105 hover:translate-x-2 relative overflow-hidden group/item text-sm sm:text-base"
                >
                  <span className="relative z-10 font-medium">
                    My Appointments
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="border-t border-gradient-to-r from-transparent via-gray-200 to-transparent my-2"></div>

                {/* Logout */}
                <div
                  onClick={logout}
                  className="hover:text-red-600 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 p-2 sm:p-3 rounded-xl text-red-500 transform hover:scale-105 hover:translate-x-2 relative overflow-hidden group/item font-medium text-sm sm:text-base"
                >
                  <span className="relative z-10">Logout</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-pink-400/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium hidden md:block hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-700 transform hover:scale-110 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-indigo-300/50 relative overflow-hidden group text-xs sm:text-sm"
          >
            <span className="relative z-10">Create Account</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          </button>
        )}

        {/* Mobile menu button */}
        <div className="md:hidden bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
          <img
            onClick={() => setShowMenu(true)}
            className="w-5 sm:w-6 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200"
            src={assets.menu_icon}
            alt=""
          />
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`${
            showMenu
              ? "fixed w-full opacity-00 visible"
              : "fixed w-full opacity-0 invisible"
          } md:hidden left-0 top-0 bottom-0 z-50 bg-gradient-to-br from-white to-blue-50 backdrop-blur-3xl transition-all duration-500 ease-out`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-6 sm:py-8 border-b border-white/50">
            <img
              className="w-28 sm:w-36 drop-shadow-md"
              src={assets.logo}
              alt=""
            />
            <div className="bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-110">
              <img
                className="w-6 sm:w-7 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200 hover:rotate-90"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt=""
              />
            </div>
          </div>
          <ul className="flex flex-col items-center gap-3 sm:gap-4 mt-8 sm:mt-10 px-4 sm:px-6 text-base sm:text-lg font-semibold">
            <NavLink
              className="w-full text-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:scale-105 hover:shadow-lg transform text-slate-700 hover:text-indigo-600"
              onClick={() => {
                setShowMenu(false);
                scrollTo(0, 0);
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="w-full text-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:scale-105 hover:shadow-lg transform text-slate-700 hover:text-indigo-600"
              onClick={() => {
                setShowMenu(false);
                scrollTo(0, 0);
              }}
              to="/doctors"
            >
              All Doctors
            </NavLink>
            <NavLink
              className="w-full text-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:scale-105 hover:shadow-lg transform text-slate-700 hover:text-indigo-600"
              onClick={() => {
                setShowMenu(false);
                scrollTo(0, 0);
              }}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="w-full text-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:scale-105 hover:shadow-lg transform text-slate-700 hover:text-indigo-600"
              onClick={() => {
                setShowMenu(false);
                scrollTo(0, 0);
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

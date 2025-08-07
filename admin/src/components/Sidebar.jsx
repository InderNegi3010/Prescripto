import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

function Sidebar() {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-white ">
      {aToken && (
        <ul className=" flex flex-col hidden md:flex items-center gap-8 font-medium bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
          <NavLink
            to="/admin-dashboard"
            onClick={() => scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:text-indigo-600"
            }
          >
            {({ isActive }) => (
              <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
                <span className="flex items-center gap-2 relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:text-shadow">
                  <img src={assets.home_icon} alt="" /> Dashboard
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
            to="/all-apointments"
            onClick={() => scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:text-indigo-600"
            }
          >
            {({ isActive }) => (
              <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
                <span className="flex items-center gap-2 relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <img src={assets.appointment_icon} alt="" /> Appointments
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
            to="/add-doctor"
            onClick={() => scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:text-indigo-600"
            }
          >
            {({ isActive }) => (
              <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
                <span className="flex items-center gap-2 relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <img src={assets.add_icon} alt="" /> Add Doctor
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
            to="/doctor-list"
            onClick={() => scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:text-indigo-600"
            }
          >
            {({ isActive }) => (
              <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
                <span className="flex items-center gap-2 relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <img src={assets.people_icon} alt="" /> Doctors List
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
      )}

      {dToken && (
        <ul className=" flex flex-col hidden md:flex items-center gap-8 font-medium bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
          <NavLink
            to="/doctor-dashboard"
            onClick={() => scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:text-indigo-600"
            }
          >
            {({ isActive }) => (
              <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
                <span className="flex items-center gap-2 relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:text-shadow">
                  <img src={assets.home_icon} alt="" /> Dashboard
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
            to="/doctor-appointments"
            onClick={() => scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:text-indigo-600"
            }
          >
            {({ isActive }) => (
              <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
                <span className="flex items-center gap-2 relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <img src={assets.appointment_icon} alt="" /> Appointments
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
            to="/doctor-profile"
            onClick={() => scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:text-indigo-600"
            }
          >
            {({ isActive }) => (
              <li className="py-2 px-4 text-center relative group transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50">
                <span className="flex items-center gap-2 relative z-10 font-semibold tracking-wide text-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <img src={assets.people_icon} alt="" /> Profile
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
      )}
    </div>
  );
}

export default Sidebar;

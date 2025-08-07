import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";

function Navbar() {
  const { aToken, setAToken } = useContext(AdminContext);

  const logout = () => {
    aToken && setAToken("")
    aToken && localStorage.removeItem("aToken")
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 sm:py-6 mb-8 border-b border-gray-100 bg-gradient-to-r from-white via-blue-50/30 to-indigo-50/30 backdrop-blur-lg shadow-lg shadow-blue-100/20 rounded-xl mx-2 sm:mx-4 px-4 sm:px-8 sticky top-4 z-50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-200/30">
      <div className="relative group flex items-center gap-2 text-xs">
        <img
          className="w-32 sm:w-40 lg:w-44 cursor-pointer transform hover:scale-110 transition-all duration-300 hover:drop-shadow-xl relative z-10"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-500 cursor-pointer">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
      onClick={logout}
       className="w-full sm:w-auto bg-red-100 text-red-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-red-500 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out tracking-wide">
        Logout
      </button>
    </div>
  );
}

export default Navbar;

import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

function SpecialityMenu() {
  return (
    <div
      id="speciality"
      className="relative flex flex-col items-center gap-8 text-gray-800 py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-100 rounded-full opacity-25 animate-pulse delay-1000"></div>

      {/* Header Section */}
      <div className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
            Find by Speciality
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
        
        <p className="sm:w-2/3 lg:w-1/2 mx-auto text-center text-gray-600 text-lg leading-relaxed">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment, hassle-free.
        </p>
      </div>

      {/* Speciality Cards */}
      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto pb-4 px-4">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            onClick={() => window.scrollTo(0, 0)}
            className="group flex flex-col items-center text-sm cursor-pointer flex-shrink-0 transform transition-all duration-500 hover:scale-110"
            to={`/doctors/${item.speciality}`}
          >
            <div className="relative p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-purple-50 border border-gray-100 group-hover:border-indigo-200">
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Image container */}
              <div className="relative">
                <img 
                  className="w-16 sm:w-20 md:w-24 mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" 
                  src={item.image} 
                  alt={item.speciality} 
                />
                
                {/* Animated ring around image */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-indigo-300 group-hover:animate-pulse transition-all duration-300"></div>
              </div>
              
              {/* Specialty name */}
              <p className="text-center font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-300 group-hover:font-semibold">
                {item.speciality}
              </p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-8 transition-all duration-300"></div>
            </div>
            
            {/* Floating "View Doctors" text */}
            <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-full">
                View Doctors
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll indicator for mobile */}
      <div className="sm:hidden flex items-center gap-2 text-gray-400 text-xs animate-pulse">
        <span>Scroll to see more</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default SpecialityMenu;
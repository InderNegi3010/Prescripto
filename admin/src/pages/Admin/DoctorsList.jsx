import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
            All Doctors
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manage your medical team and their availability status
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center gap-4 border border-indigo-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Doctor Image */}
              <div className="relative z-10">
                <img
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-lg group-hover:border-indigo-200 transition-all duration-300 group-hover:scale-105"
                  src={item.image}
                  alt={item.name}
                />
                {/* Online Status Indicator */}
                <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                  item.available ? 'bg-green-500' : 'bg-gray-400'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    item.available ? 'bg-green-300' : 'bg-gray-200'
                  } ${item.available ? 'animate-pulse' : ''}`}></div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="text-center relative z-10 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-indigo-600 font-semibold text-sm bg-indigo-50 px-3 py-1 rounded-full mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
                  {item.speciality}
                </p>
                
                {/* Availability Toggle */}
                <div className="mt-4 p-3 bg-gray-50 rounded-2xl group-hover:bg-white transition-colors duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        onChange={() => changeAvailability(item._id)} 
                        type="checkbox" 
                        checked={item.available}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                    <span className={`text-sm font-semibold transition-colors duration-300 ${
                      item.available ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {item.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
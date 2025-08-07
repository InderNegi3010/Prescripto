import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";

function Dashboard() {
  const { aToken, cancelAppointment, dashData, getDashData } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">
                    {dashData.doctors}
                  </p>
                  <p className="text-gray-600 font-medium">Total Doctors</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <img
                    className="w-8 h-8"
                    src={assets.doctor_icon}
                    alt="Doctors"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">
                    {dashData.appointments}
                  </p>
                  <p className="text-gray-600 font-medium">Appointments</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <img
                    className="w-8 h-8"
                    src={assets.appointments_icon}
                    alt="Appointments"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-500">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">
                    {dashData.patients}
                  </p>
                  <p className="text-gray-600 font-medium">Total Patients</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <img
                    className="w-8 h-8"
                    src={assets.patients_icon}
                    alt="Patients"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Bookings Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <img className="w-6 h-6" src={assets.list_icon} alt="" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">
                  Latest Bookings
                </h2>
                <p className="text-blue-100 text-sm">
                  Recent appointment activities
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {dashData.latestAppointments.map((item, index) => (
              <div
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group"
                key={index}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      src={item.docData.image}
                      alt={item.docData.name}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      {item.docData.name}
                    </p>
                    <p className="text-gray-500 text-xs">{item.slotDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {item.cancelled ? (
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                      Cancelled
                    </span>
                  ) : (
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                      title="Cancel Appointment"
                    >
                      <img
                        className="w-14 h-14 group-hover:scale-110 transition-transform duration-200"
                        src={assets.cancel_icon}
                        alt="Cancel"
                      />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {dashData.latestAppointments.length === 0 && (
            <div className="px-6 py-8 text-center">
              <div className="text-gray-400 text-sm">
                No recent appointments
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default Dashboard;

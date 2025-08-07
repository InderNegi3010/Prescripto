import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import { toast } from "react-toastify";
import axios from "axios";

function MyAppointments() {
  const { token, backendUrl } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
   
  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <p className=" font-semibold mt-12 text-gray-700">My appointment</p>
      <div>
        {appointments.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] sm:flex sm:gap-6 gap-4 "
            key={index}
          >
            <div>
              <img className="w-50" src={item.docData.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600 py-10 ">
              <p className="text-neutral-800 font-semibold">
                {item.docData.name}
              </p>
              <p>{item.docData.speciality}</p>

              <p className="text-zinc-700 mt-1 ">Address:</p>
              <p className="text-sm">{item.docData.address.line1}</p>
              <p className="text-sm">{item.docData.address.line2}</p>
              <p className="text-sm mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time :
                </span>{" "}
                {item.slotDate} | {item.slotTime}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              {!item.cancelled && (
                <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out tracking-wide">
                  Pay Online
                </button>
              )}
              {!item.cancelled && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="w-full sm:w-auto bg-red-100 text-red-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-red-500 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out tracking-wide"
                >
                  Cancel Appointment
                </button>
              )}
              {item.cancelled && (
                <button className="w-full sm:w-auto bg-red-100 text-red-600 font-semibold px-6 py-2 rounded-lg shadow-md ">
                  Appointment cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;

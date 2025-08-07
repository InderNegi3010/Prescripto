import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

function Appointements() {
  const { docId } = useParams();
  const { doctors, currency, backendUrl, token, getDoctorsData } =
    useContext(AppContext);
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const navigate = useNavigate();

  const [docInfo, setDocsInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocsInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlot([]);

    const today = new Date();
    const slots = [];

    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
      const currentDay = new Date(today);
      currentDay.setDate(today.getDate() + dayOffset);

      // Set start time
      let startTime;
      if (dayOffset === 0) {
        // For today: start from next available slot (current time + 1 hour, rounded to next 30-min slot)
        startTime = new Date();
        startTime.setHours(startTime.getHours() + 1);
        startTime.setMinutes(startTime.getMinutes() >= 30 ? 30 : 0);
        startTime.setSeconds(0, 0);

        // If it's past 9 PM or before 10 AM, start at 10 AM
        if (startTime.getHours() >= 21 || startTime.getHours() < 10) {
          startTime.setHours(10, 0, 0, 0);
        }
      } else {
        // For future days: always start at 10 AM
        startTime = new Date(currentDay);
        startTime.setHours(10, 0, 0, 0);
      }

      // Set end time (9 PM)
      const endTime = new Date(currentDay);
      endTime.setHours(21, 0, 0, 0);

      // Generate 30-minute slots
      const daySlots = [];
      const slotTime = new Date(startTime);

      while (slotTime < endTime) {
        daySlots.push({
          datetime: new Date(slotTime),
          time: slotTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
        });

        slotTime.setMinutes(slotTime.getMinutes() + 30);
      }

      slots.push(daySlots);
    }

    setDocSlot(slots);
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("first login to book appointment");
      return navigate("/login");
    }

    try {
      const date = docSlot[slotIndex][0].datetime;

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = day + "-" + month + "-" + year;

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        { docId, slotDate, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Doctor Details Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Doctor Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  className="w-full sm:max-w-80 lg:max-w-72 rounded-xl shadow-xl object-cover aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 p-2"
                  src={docInfo.image}
                  alt={docInfo.name}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 lg:p-10 transform hover:scale-[1.02] transition-all duration-300">
              {/* Doctor Name and Verification */}
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {docInfo.name}
                </h1>
                <div className="relative">
                  <img
                    className="w-6 h-6 animate-pulse"
                    src={assets.verified_icon}
                    alt="Verified"
                  />
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-indigo-700">
                    {docInfo.degree} - {docInfo.speciality}
                  </span>
                </div>
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200">
                  <span className="text-sm font-semibold text-emerald-700">
                    {docInfo.experience}
                  </span>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">About</h3>
                  <img
                    className="w-4 h-4 opacity-60"
                    src={assets.info_icon}
                    alt="Info"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {docInfo.about}
                </p>
              </div>

              {/* Appointment Fee */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full border border-amber-200">
                <span className="text-amber-700 font-medium">
                  Consultation Fee:
                </span>
                <span className="text-amber-800 font-bold text-lg">
                  {currency} {docInfo.fees}
                </span>
              </div>
            </div>
          </div>

          {/* Booking Slots Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Available Slots
              </h2>
              <p className="text-gray-600">
                Select your preferred date and time
              </p>
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Choose Date
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-100">
                {docSlot.length &&
                  docSlot.map((item, index) => (
                    <div
                      onClick={() => setSlotIndex(index)}
                      className={`flex-shrink-0 text-center p-4 min-w-[80px] rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        slotIndex === index
                          ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 hover:border-indigo-300"
                      }`}
                      key={index}
                    >
                      <p
                        className={`text-xs font-medium mb-1 ${
                          slotIndex === index
                            ? "text-indigo-100"
                            : "text-gray-500"
                        }`}
                      >
                        {item[0] && dayOfWeek[item[0].datetime.getDay()]}
                      </p>
                      <p className="text-lg font-bold">
                        {item[0] && item[0].datetime.getDate()}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Choose Time
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {docSlot.length &&
                  docSlot[slotIndex].map((item, index) => (
                    <button
                      onClick={() => setSlotTime(item.time)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        item.time === slotTime
                          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                          : "bg-gray-50 hover:bg-indigo-50 text-gray-700 border border-gray-200 hover:border-indigo-300"
                      }`}
                      key={index}
                    >
                      {item.time.toLowerCase()}
                    </button>
                  ))}
              </div>
            </div>

            {/* Book Appointment Button */}
            <div className="flex justify-center">
              <button
                onClick={bookAppointment}
                className={`relative px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  slotTime
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!slotTime}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 blur"></div>
                <span className="relative">
                  {slotTime ? "Book Appointment" : "Select Date & Time"}
                </span>
              </button>
            </div>

            {/* Selected Appointment Summary */}
            {slotTime && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">
                  Appointment Summary
                </h4>
                <p className="text-green-700">
                  <span className="font-medium">Doctor:</span> {docInfo.name} |
                  <span className="font-medium"> Date:</span>{" "}
                  {docSlot[slotIndex][0]?.datetime.toDateString()} |
                  <span className="font-medium"> Time:</span> {slotTime} |
                  <span className="font-medium"> Fee:</span> {currency}{" "}
                  {docInfo.fees}
                </p>
              </div>
            )}
          </div>
        </div>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointements;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 md:px-10">
      <h1 className="text-3xl font-semibold text-center text-blue-700">
        Top Doctors to Book
      </h1>
      <p className="max-w-md text-center text-gray-600 text-sm leading-relaxed">
        Simply browse through our extensive list of trusted doctors and schedule
        your appointment with ease.
      </p>

      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="bg-white border border-blue-100 rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <img
              className="w-full h-70 object-cover bg-blue-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 space-y-1">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() =>{ navigate("/doctors"); scrollTo(0,0)}} className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 cursor-pointer transition-all duration-300">
        View More
      </button>
    </div>
  );
}

export default TopDoctors;

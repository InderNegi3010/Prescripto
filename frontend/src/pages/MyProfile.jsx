import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import {assets} from "../assets/assets"
import axios from "axios";
import { toast } from "react-toastify";

function MyProfile() {
  const { userData, setUserData, token, backendUrl, loadUserData } =
    useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {

    try {
      
      const formData = new FormData()

      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address) )
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      image && formData.append("image", image)

      const {data} = await axios.post(backendUrl + "/api/user/update-profile", formData, {headers: {token}})
      if (data.success) {
        toast.success(data.message)
        await loadUserData()
        setIsEdit(false)
        setImage(false)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  return (
    userData && (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-2">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            {isEdit ? (
              <label htmlFor="image">
                <div className="inline-block relative cursor-pointer ">
                  <img className="w-36 rounded opacity-75" src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                  <img className="w-10 absolute bottom-12 rigth-12" src={image ? "" : assets.upload_icon} alt="" />
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden/>
              </label>
            ) : (
              <img
                src={userData.image}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-indigo-200 shadow"
              />
            )}

            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="text-2xl font-semibold text-center border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-1"
              />
            ) : (
              <p className="text-2xl font-semibold text-center text-gray-800">
                {userData.name}
              </p>
            )}
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col gap-4">
            <p className="text-lg font-semibold text-indigo-700 mb-2">
              Contact Information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-base text-gray-800 break-all">
                  {userData.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                {isEdit ? (
                  <input
                    type="text"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                    className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-1"
                  />
                ) : (
                  <p className="text-base text-gray-800">{userData.phone}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                {isEdit ? (
                  <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line1: e.target.value },
                        }))
                      }
                      value={userData.address.line1}
                      type="text"
                      placeholder="Address Line 1"
                      className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-1"
                    />
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                      value={userData.address.line2}
                      type="text"
                      placeholder="Address Line 2"
                      className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-1"
                    />
                  </div>
                ) : (
                  <p className="text-base text-gray-800">
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col gap-4">
            <p className="text-lg font-semibold text-indigo-700 mb-2">
              Basic Information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                {isEdit ? (
                  <select
                    onChange={(e) =>
                      setUserData({ ...userData, gender: e.target.value })
                    }
                    value={userData.gender}
                    className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-1"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p className="text-base text-gray-800">{userData.gender}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">Birthday</p>
                {isEdit ? (
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, dob: e.target.value })
                    }
                    value={userData.dob}
                    type="date"
                    className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-1"
                  />
                ) : (
                  <p className="text-base text-gray-800">{userData.dob}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {isEdit ? (
              <button
                onClick={updateUserProfileData}
                className="bg-indigo-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out tracking-wide backdrop-blur-md text-white font-semibold py-2 px-8 rounded-lg transition-all duration-200 shadow-md"
              >
                Save Information
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-base px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out tracking-wide backdrop-blur-md"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default MyProfile;

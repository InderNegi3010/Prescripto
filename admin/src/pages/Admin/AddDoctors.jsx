import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctors = () => {
  const [docImg, setDocImg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [education, setEducation] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");
  const [available, setAvailable] = useState("");

  const { aToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("speciality", speciality);
      formData.append("degree", education);
      formData.append("about", about);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      formData.append("available", available);

      // console log formData

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken, "Content-Type": "multipart/form-data", } }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(false)
        setName("")
        setPassword("")
        setEmail("")
        setAddress1("")
        setFees("")
        setSpeciality("")
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-white px-20 hide-scrollbar">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col gap-8 border border-indigo-100"
      >
        <p className="text-2xl font-bold text-indigo-700 mb-2 text-center">
          Add Doctor
        </p>

        {/* Upload Area */}
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="doc-img"
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload"
              className="w-24 h-24 object-contain bg-indigo-50 rounded-xl border-2 border-dashed border-indigo-200 hover:border-indigo-400 transition-all duration-200"
            />
            <span className="text-sm text-gray-500">Upload doctor picture</span>
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
        </div>

        {/* Form Fields */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Doctor Name
              </p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                required
                className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Doctor Email
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Your email"
                required
                className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Doctor Password
              </p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="text"
                placeholder="Password"
                required
                className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Experience
              </p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                required
                className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder="Fees"
                required
                className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Speciality
              </p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                required
                className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
              >
                <option value="General physician">General physician</option>
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Education
              </p>
              <input
                onChange={(e) => setEducation(e.target.value)}
                value={education}
                type="text"
                placeholder="Education"
                required
                className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Address</p>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <input
                  onChange={(e) => setAddress1(e.target.value)}
                  value={address1}
                  type="text"
                  placeholder="Address 1"
                  required
                  className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
                />
                <input
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2}
                  type="text"
                  placeholder="Address 2"
                  required
                  className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mt-3">Available</p>
                <select
                  className="mt-3 w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200"
                  onChange={(e) => setAvailable(e.target.value)}
                  value={available}
                >
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* About Doctor */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            placeholder="Write about Doctor"
            rows={5}
            required
            className="w-full border-b-2 border-indigo-200 focus:border-indigo-500 outline-none bg-transparent py-2 px-2 rounded transition-all duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-10 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out tracking-wide mt-2 mx-auto block"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctors;

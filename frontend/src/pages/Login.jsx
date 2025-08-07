import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const { token, setToken, backendUrl } = useContext(AppContext);

  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);

        } else {
          toast.error(data.message);
        }

      } else {

        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);

        } else {
          toast.error(data.message);
        }


      } 

    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col items-center p-8 w-[340px] sm:min-w-96 m-auto mt-14 rounded-xl gap-4 text-zinc-600 text-sm shadow-lg ">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="prata-regular text-3xl mb-4">
          Please {state === "Sign Up" ? "sign up" : "Login"} to book appointment
        </p>

        {state === "Login" ? null : (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="w-full border border-zinc-300 rounded-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="w-full border border-zinc-300 rounded-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="w-full border border-zinc-300 rounded-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <div className="flex justify-between w-full text-sm">
          <p className="cursor-pointer text-blue-500 hover:underline">
            Forget your password?
          </p>
          {state === "Login" ? (
            <p
              onClick={() => {
                setState("Sign Up");
                setEmail("");
                setPassword("");
                setName("");
              }}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => {
                setState("Login");
                setEmail("");
                setPassword("");
                setName("");
              }}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Login
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-base px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out tracking-wide backdrop-blur-md"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
      </div>
    </form>
  );
}

export default Login;

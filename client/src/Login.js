import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
     if(username && password){
      const res = await Axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
      });
      alert("login successfull");
      const token = res.data.user;
      //  console.log(token);
      localStorage.setItem("Token", token);
      // console.log("Token set in localStorage:", token);
      navigate('/home')
     }
    } catch (error) {
      alert("wrong credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="p-6 rounded-3xl max-sm:border-black border border-orange-200 shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login To Enter</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-lg outline-none px-4 py-2 w-full my-4 bg-gray-800 "
          type="text"
          placeholder="Enter username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg outline-none px-4 py-2 w-full my-4 bg-gray-800"
          type="password"
          placeholder="Enter password"
        />
        <button
          onClick={loginUser}
          className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-700 w-full"
        >
          Login
        </button>
      </div>
    </div>

  );
};

export default Login;

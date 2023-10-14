import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await Axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
      });
      alert("login successfull");
      const token = res.data.user;
      //  console.log(token);
      localStorage.setItem("Token", token);
    } catch (error) {
      alert("wrong credentials");
    }
  };

  console.log(localStorage.getItem("Token"));
  return (
    <div className="flex justify-center items-center h-[550px]">
      <div className="flex flex-col items-center border p-5 border-orange-200 rounded-3xl w-5/12">
        <h1 className="text-xl">Login To Enter</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-2xl outline-none px-3 py-2 w-full my-4 bg-gray-800"
          type="text"
          placeholder="Enter username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-2xl outline-none px-3 py-2 w-full my-4 bg-gray-800"
          type="password"
          placeholder="Enter password"
        />
        <Link to="/home">
          <button
            onClick={loginUser}
            className="bg-orange-600 py-1 px-2 rounded-2xl text-gray-900 font-semibold"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

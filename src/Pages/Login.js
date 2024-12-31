import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import loginBg from "../assets/Images/login-bg.jpg";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "testuser" && password === "password123") {
      localStorage.setItem("token", "loggedin");
      localStorage.setItem("username", username);

      navigate("/Home");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 py-6 w-96"
        >
          <h1 className="text-2xl font-bold mb-10 nameholder text-green-600">
            Login Page
          </h1>
          <div className="mb-4">
            <label className="block nameholder1 text-gray-700 text-sm font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full  nameholder1 px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block nameholder1 text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 nameholder1 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 nameholder1 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
        {error && (
          <p className="text-red-500 nameholder1 text-sm mt-4">{error}</p>
        )}
      </div>
    </>
  );
}

export default Login;

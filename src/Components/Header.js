import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [Sidebar, setSidebar] = useState(false);
  const [username, setUsername] = useState("");

  const openSidebar = () => {
    setSidebar(!Sidebar);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername);
    }
  }, [navigate]);
  console.log("name", username);
  return (
    <div className="bg-transparent/50  h-[80px] flex fixed top-0 w-full z-10">
      <div
        className={`fixed top-0 left-0 h-full bg-black/95 text-white w-64 transform ${
          Sidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-green-600 px-4 nameholder1">
              Menu
            </h2>
            <button
              className="text-white focus:outline-none"
              onClick={openSidebar}
            >
              <FaTimes className="text-green-600" size={20} />
            </button>
          </div>
          <button
            onClick={() => navigate("/Home")}
            className="text-left nameholder1 py-4 px-4 rounded hover:bg-[#2a2a2a]"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/Gallery")}
            className="text-left nameholder1 py-4 px-4 rounded hover:bg-[#2a2a2a]"
          >
            Photos
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between px-5 py-5">
          <button
            className="text-white px-3 py-2 rounded-lg focus:outline-none hover:bg-green-700"
            onClick={openSidebar}
          >
            <FaBars size={24} />
          </button>
          <h1 className="text-white text-2xl font-medium nameholder">
            Photo Management
          </h1>
          {username ? (
            <h3 className="px-5 nameholder1 rounded-lg text-xl justify-center items-center text-white   focus:outline-none">
              {username}
            </h3>
          ) : (
            <button
              onClick={() => navigate("/")}
              className="px-5 h-10 nameholder rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

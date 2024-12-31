import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [Sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!Sidebar);
  };

  return (
    <div className="bg-[#2a2a2a] h-12 flex fixed top-0 w-full z-10">
      <div
        className={`fixed top-0 left-0 h-full bg-black/100 text-white w-64 transform ${
          Sidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-green-600 px-4">Menu</h2>
            <button
              className="text-white focus:outline-none"
              onClick={openSidebar}
            >
              <FaTimes className="text-green-600" size={20} />
            </button>
          </div>
          <button className="text-left py-4 px-4 rounded hover:bg-[#2a2a2a]">
            Dashboard
          </button>
          <button className="text-left py-4 px-4 rounded hover:bg-[#2a2a2a]">
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
          <h1
            className="text-white text-3xl font-semibold font-sans"
            style={{ fontFamily: "poppins" }}
          >
            Photo Management
          </h1>
          <button className="px-5 h-10 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

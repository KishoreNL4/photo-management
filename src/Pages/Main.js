import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/Images/bg.jpg";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/ ");
  };

  return (
    <div
      className="min-h-screen relative flex items-center justify-center bg-[#2a2a2a] opacity-300"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex absolute justify-center flex-col items-center space-y-4 px-6 text-center">
        <h1 className="text-black text-2xl font-small nameholder1">
          Welcome to Dashboard
        </h1>
        <h1 className="text-black text-4xl nameholder font-semibold">
          Preserve Your Moments and
          <span className="text-green-700"> Keep Them Safe Forever</span>
        </h1>
        <div className="flex flex-row justify-center items-center space-x-6">
          <button
            onClick={() => navigate("/Gallery")}
            className="bg-green-600 nameholder1 text-center h-12 hover:bg-green-700 px-6 py-3 rounded-md text-white text-[18px] w-[200px]"
          >
            My Gallery
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-center nameholder1   hover:bg-red-700 px-6 py-3 rounded-md text-white text-[18px] w-[200px] h-12"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;

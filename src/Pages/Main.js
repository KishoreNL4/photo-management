import React from "react";

function Main() {
  return (
    <div className="bg-[#2a2a2a] min-h-screen pt-12">
      <div className="flex justify-center flex-col space-y-3 px-36 items-left min-h-[calc(100vh-3rem)]">
        <h1 className="text-white text-2xl font-small">Hi There!</h1>
        <h1 className="text-white text-4xl font-semibold">
          Welcome To Dashboard
        </h1>
        <h1 className="text-white text-2xl font-small">
          Build Your Own Gallery
        </h1>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white w-[130px] text-[16px]">
          My Gallery
        </button>
      </div>
    </div>
  );
}

export default Main;

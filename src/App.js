import React from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Photo from "./Pages/Photo";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Photo />} />
      </Routes>
    </div>
  );
}

export default App;

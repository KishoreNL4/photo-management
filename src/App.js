import React from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

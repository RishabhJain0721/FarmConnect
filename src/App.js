import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Farmer from "./Pages/Farmer";
import Consumer from "./Pages/Consumer";
import FarmerForm from "./Component/FarmerForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/farmer-form" element={<FarmerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

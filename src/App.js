import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Consumer from "./Pages/Consumer";
import ConsumerBuyCard from "./Components/ConsumerBuyCard";
// import { Route } from "react-router-dom";


import Farmer from "./Pages/Farmer";import FarmerForm from "./Component/FarmerForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consumer" element={<Consumer/>}/>
        <Route path="/consumerBuyCard" element={<ConsumerBuyCard/>}/>
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/farmer-form" element={<FarmerForm />} />
      </Routes>
    </BrowserRouter>
    // <Consumer/>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Consumer from "./Pages/Consumer";
import ConsumerBuyCard from "./Components/ConsumerBuyCard";
// import { Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consumer" element={<Consumer/>}/>
        <Route path="/consumerBuyCard" element={<ConsumerBuyCard/>}/>
      </Routes>
    </BrowserRouter>
    // <Consumer/>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import { auth } from "./firebase";
import Farmer from "./Pages/Farmer";
import FarmerForm from "./Component/FarmerForm";
function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user)
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      } else {
        setUser("");
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/farmer-form" element={<FarmerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

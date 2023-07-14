import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import AfterSignUp from "./Pages/AfterSignUp";
import { auth } from "./firebase";

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
        <Route path="/aftersignup" element={<AfterSignUp user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

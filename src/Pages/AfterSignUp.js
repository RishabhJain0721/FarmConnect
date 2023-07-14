import React from "react";
import { useLocation } from "react-router-dom";

const AfterSignUp = () => {
  const location = useLocation();
  const user = location.state.name || "Null";
  return (
    <div>
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default AfterSignUp;

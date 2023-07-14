import React from "react";
import { useFarmContext } from "../Context/useContext";
const Home = () => {
  const { home, setHome } = useFarmContext();
  return <h1>Home</h1>;
};

export default Home;

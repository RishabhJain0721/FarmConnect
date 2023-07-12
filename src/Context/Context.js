import { createContext, useState } from "react";

export const Context = createContext();



export const ContextProvider = ({ children }) => {
const [home,setHome] = useState("ghello");

  return (
    <Context.Provider value={{ home,setHome }}>
      {children}
    </Context.Provider>
  );
};
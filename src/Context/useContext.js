import { Context } from "./Context";
import { useContext } from "react";


export const useFarmContext = () => {
  const context = useContext(Context)
  return context;
}


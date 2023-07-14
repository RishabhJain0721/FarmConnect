import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [groceryDetail, setGroceryDetail] = useState({
    name: "",
    price: "",
    imageUrl: "",
    location: "Charbagh",
  });
  const [myList, setMyList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Context.Provider
      value={{
        groceryDetail,
        setGroceryDetail,
        myList,
        setMyList,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </Context.Provider>
  );
};

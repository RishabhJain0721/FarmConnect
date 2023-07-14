import { createContext, useState } from "react";
import Logo from '../Assets/Images/Tomato.jpg'

export const Context = createContext();




export const ContextProvider = ({ children }) => {

  const [consumerCardDetails,setconsumerCardDetails]=useState([
    {
      // image:<Logo/>,
      name:'Tomato',
      rate:'80',
      provider:'Satyapal',
      mob :'9856XXXXX',
      location:'Charbagh Lucknow',
    },
    {
      // image:<Logo/>,
      name:'Potato',
      rate:'40',
      provider:'Ramu',
      mob :'9856XXXXX',
      location:'Jankipuram Lucknow',
    },
    {
      name:'Carrot',
      image:<Logo/>,
      rate:'60',
      provider:'Rampal',
      mob :'9856XXXXX',
      location:'Hazratganj Lucknow',
    },
    {
      name:'Lady Finger',
      image:<Logo/>,
      rate:'50',
      provider:'Satyapal',
      mob :'9856XXXXX',
      location:'Charbagh Lucknow',
    },
    {
      name:'Lady Finger',
      image:<Logo/>,
      rate:'60',
      provider:'Rampal',
      mob :'9856XXXXX',
      location:'Hazratganj Lucknow',
    },
    {
      name:'Cabbage',
      image:<Logo/>,
      rate:'60',
      provider:'Satyapal',
      mob :'9856XXXXX',
      location:'Charbagh Lucknow',
    }
  ])

  const [consumerSearch,setConsumerSearch]=useState("");
  const [consumerBought,setConsumerBought]=useState({
    btname:"",
    btamount:"",
    btrate:"",
    btprovider:"",
    btmob:"",
    btlocation:"",
    btprice:"",
  })
  const [groceryDetail, setGroceryDetail] = useState({
    name: "",
    price: "",
    imageUrl: "",
    location: "Charbagh",
  });

 
 
  const [myList, setMyList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  return (
    <Context.Provider
      value={{
        groceryDetail,
        setGroceryDetail,
        myList,
        setMyList,
        isEditing,
        setIsEditing,
        currUser,
        setCurrUser,
        consumerSearch,setConsumerSearch,consumerBought,setConsumerBought,consumerCardDetails,setconsumerCardDetails
      }}
    >
      {children}
    </Context.Provider>
  );
};

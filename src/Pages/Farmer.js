import React,{useState} from "react";
import FarmerCardList from "../Components/FarmerCardList";
import Logo from "../Assets/Images/Logo.png";
import userImg from "../Assets/Images/userImg.png";
import { Link } from "react-router-dom";
import { useFarmContext } from "../Context/useContext";
import { useLocation } from "react-router-dom";

const Farmer = () => {
  const { setIsEditing, myList,currUserName, setCurrUserName } = useFarmContext();
  
 
  return (
    <div className="p-10">
      <div className="name flex justify-between mb-4 ">
        <img src={Logo} alt="failed to load" className="w-30 h-20 mb-4 opacity-80" />
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden">
            <img src={userImg} alt="Avatar" className="w-10 h-10" />
          </div>
          <span className="ml-4 font-normal font-poppins text-2xl">
            {currUserName}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 13l6-6H4l6 6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="name flex justify-between px-4 mb-6 ">
        <h1 className="text-5xl font-normal text-[#185B2B] font-serif">
          My List
        </h1>
        <Link to="/farmer-form">
          <button
            onClick={() => setIsEditing(false)}
            className="bg-[#A7D7C5]  text-[#35594B] font-normal px-4 py-2 rounded-md text-xl"
          >
            Add Item
          </button>
        </Link>
      </div>
      {myList.length > 0 ? (
        <FarmerCardList />
      ) : (
        <div className="text-3xl font-bold text-green-800 m-30 flex justify-center items-center h-2/3 ">
          <p>You have no items in your list</p>
        </div>
      )}
    </div>
  );
};

export default Farmer;

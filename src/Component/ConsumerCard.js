import React from "react";
import Tomato from "../Assets/Images/Tomato.jpeg";

const ConsumerCard = () => {
  return (
    <div className="max-w-xs px-4  bg-white shadow-md rounded-lg overflow-hidden card hover:translate-y-[-5px] transition duration-300 ease-in-out">
      <img src={Tomato} alt="Vegetable" className="w-full h-auto" />
      <div className="p-4">
        <div className="flex">
          <h3 className="text-xl font-bold mb-2 mr-5">Tomato</h3>
          <span className="text-[#35594B] mt-1 font-semibold">Rs 60/kg</span>
        </div>
        <div>
          <div className="flex items-center my-4">
            <input
              type="text"
              className="bg-green-500 outline-none text-white px-4 py-2 rounded-l-md w-24"
            />
            <span className="bg-green-500 text-white px-4 py-2 rounded-r-md w-12">
              kg
            </span>
            <button className="bg-green-500 text-white ml-12 px-4 py-2 rounded-md ml-2">
              Add
            </button>
          </div>
        </div>
        <p className=" mb-2 text-[#35594B]">Provider:Satyapal</p>
        <p className="text-[#35594B] mb-4">Mobile No.: 8534025615</p>
        <p className="text-[#35594B] mb-4">Location: Charbagh</p>
      </div>
    </div>
  );
};

export default ConsumerCard;

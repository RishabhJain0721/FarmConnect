import React from "react";
import { useState } from "react";
import Tomato from "../Assets/Images/Tomato.jpg";

// import { Context } from "../Context/Context";
import { useFarmContext } from "../Context/useContext";
import { Link } from "react-router-dom";

const ConsumerCard = ({cardDetail}) => {
  const [amount,setAmount] = useState(1);

  // console.log(cardDetail);
  const {image,name,rate,provider,mob,location} = cardDetail
  const {consumerBought,setConsumerBought} =useFarmContext()
  const {btname,btrate,btprovider,btmob,btlocation,btamount,btimage}=consumerBought

  function handlebuynow(){
    setConsumerBought({
      btimage:image,
      btname:name,
      btamount:amount,
      btprice:amount*rate,
      btmob:mob,
      btprovider:provider,
      btlocation:location,
      btrate:rate
    })
  }

 
  

  return (
    <div className="max-w-xs  px-2 pt-6 bg-white shadow-md rounded-lg overflow-hidden card hover:translate-y-[-5px] transition duration-300 ease-in-out mx-2 my-6">
      <img src={image} alt="Vegetable" className="w-full h-auto" />
      <div className="p-4">
        <div className="flex">
          <h3 className="text-xl font-bold mb-2 mr-5">{name}</h3>
          <span className="text-[#35594B] mt-1 font-semibold">Rs {rate}/kg</span>
        </div>
        <div>
          <div className="flex items-center my-4">
            <input
              type="text"
              className="bg-green-500 outline-none text-white px-4 py-2 rounded-l-md w-24"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            />
            <span className="bg-green-500 text-white px-4 py-2 rounded-r-md w-12">
             kg
            </span>
            <Link to="/consumerBuyCard">
            <button className="bg-green-500 text-white ml-12 px-4 py-2 rounded-md ml-2"
            onClick={handlebuynow}>
              Buy Now
            </button>
            </Link>
            
          </div>
        </div>
        <p className=" mb-2 text-[#35594B]">Provider:{provider}</p>
        <p className="text-[#35594B] mb-4">Mobile No.:{mob}</p>
        <p className="text-[#35594B] mb-4">Location: {location}</p>
      </div>
    </div>
  );
};

export default ConsumerCard;
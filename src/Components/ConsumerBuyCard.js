import React from 'react'
import Tomato from '../Assets/Images/Tomato.jpg'
import { Link } from 'react-router-dom'

import { useFarmContext } from "../Context/useContext";

export default function ConsumerBuyCard() {

  const {consumerBought,setConsumerBought} =useFarmContext()
  const {btimage,btname,btrate,btprovider,btmob,btlocation,btamount,btprice}=consumerBought

  // function handleAddItem(){
  //     setConsumerBought
  // }
  return (
    <div className="consumerBuyCard flex justify-center m-auto">
    <div className="max-w-xs px-2 pt-6 bg-white shadow-md rounded-lg overflow-hidden card hover:translate-y-[-5px] transition duration-300 ease-in-out mx-2 my-6">
  <div className="flex justify-between items-center">
    <h3 className="text-xl font-bold mb-2 mr-5">{btname}</h3>
    <Link to='/consumer'>
    <button className="text-gray-500 hover:text-red-500 focus:outline-none"
      
      // onClick={handleAddItem}
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M15.707 4.293a1 1 0 010 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707A1 1 0 015.707 4.293L10 8.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    </Link>
  </div>
  <div className="p-4 bg-green-500 text-white font-bold ">
    You bought {btamount}kg {btname} at a rate of Rs {btrate}/kg.
  </div>
  <img src={btimage} alt="Vegetable" className="w-full h-auto" />
  <div className="p-4">
 
    <p className="mb-2 text-[#35594B] font-bold">Total Price: Rs.{btprice}  </p>
    <p className="mb-2 text-[#35594B] font-bold">Provider: {btprovider}</p>
    <p className="text-[#35594B] font-bold mb-4">Mobile No.:{btmob}</p>
    <p className="text-[#35594B] font-bold mb-4">Location: {btlocation}</p>
  </div>
</div>

</div>

  )
}

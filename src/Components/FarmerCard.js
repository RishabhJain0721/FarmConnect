import React from "react";
import { useFarmContext } from "../Context/useContext";
import { useNavigate } from "react-router-dom";

const FarmerCard = ({ cardDetail }) => {
  const { imageUrl, name, location, price } = cardDetail;
  const { myList, setMyList, setGroceryDetail, setIsEditing } =
    useFarmContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    setMyList((prev) => prev.filter((p) => p.id != cardDetail.id));
  };
  const handleEdit = () => {
    setGroceryDetail(cardDetail);
    setIsEditing(true);
    navigate("/farmer-form");
  };
  return (
    <>
      <div className=" w-500 max-w-xs bg-white shadow-md rounded-lg overflow-hidden card hover:translate-y-[-5px] transition duration-300 ease-in-out">
        <div className="">
          <img
            src={imageUrl}
            alt="Vegetable"
            className="object-cover h-48 w-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="mb-2 text-[#35594B]">
            Current Price: Rs {" " + price}/kg
          </p>
          <p className="text-[#35594B] mb-4">Location: {location}</p>
          <div className="flex justify-between">
            <button
              className="bg-[#A7D7C5] text-[#35594B] px-4 py-2 mr-4 rounded-md"
              onClick={handleEdit}
            >
              Edit Details
            </button>
            <button
              className="bg-[#EA3131] text-white px-4 py-2 rounded-md"
              onClick={handleDelete}
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FarmerCard;

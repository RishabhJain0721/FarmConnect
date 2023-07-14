import React, { useState } from "react";
import { useFarmContext } from "../Context/useContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FarmerForm = () => {
  const {
    groceryDetail,
    setGroceryDetail,
    setMyList,
    isEditing,
    setIsEditing,
  } = useFarmContext();
  const [name, setName] = useState(isEditing ? groceryDetail.name : "");
  const [price, setPrice] = useState(isEditing ? groceryDetail.price : "");
  const [imageUrl, setImageUrl] = useState(
    isEditing ? groceryDetail.imageUrl : ""
  );
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setGroceryDetail((prev) => ({
      ...prev,
      name,
      price,
      imageUrl,
    }));
    if (isEditing) {
      setMyList((prev) => {
        const arr = prev;
        for (let ele of prev) {
          if (ele.id == groceryDetail.id) {
            ele.name = name;
            ele.price = price;
            ele.imageUrl = imageUrl;
          }
        }
        return prev;
      });
    } else {
      setMyList((prev) => [
        ...prev,
        {
          name,
          price,
          imageUrl,
          location: groceryDetail.location,
          id: uuidv4(),
        },
      ]);
    }
    setName("");
    setPrice("");
    setIsEditing(false);
    navigate("/farmer");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen x">
        <form className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-6">
            <label htmlFor="name" className="text-2xl font-bold text-gray-800">
              Vegetable Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 mt-2 text-lg text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="text-2xl font-bold text-gray-800">
              Price: (per kg)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-4 py-3 mt-2 text-lg text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="text-2xl font-bold text-gray-800">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full mt-2"
              onChange={handleImageUpload}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 mt-4 text-xl font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};

export default FarmerForm;

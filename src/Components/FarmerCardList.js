import React from "react";
import { useFarmContext } from "../Context/useContext";

import FarmerCard from "../Components/FarmerCard";

const FarmerCardList = () => {
  const { myList } = useFarmContext();
  return (
    <div className="flex flex-wrap">
      {myList.map((cardDetail) => (
        <div className="max-w-xs mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <FarmerCard cardDetail={cardDetail} key={cardDetail.imageUrl} />
        </div>
      ))}
    </div>
  );
};

export default FarmerCardList;

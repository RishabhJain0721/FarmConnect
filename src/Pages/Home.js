import React from "react";
import { useNavigate } from "react-router-dom";
import leftImage from "../Assets/Images/homePageImg.jpg";
import fclogo from "../Assets/Images/Logo.png";
import { useFarmContext } from "../Context/useContext";

const Home = () => {
  const navigate = useNavigate();
  const {currUser,setCurrUser} = useFarmContext();

  const handleFarmerClick = () => {
    // Redirect to the farmer login or signup page
    navigate("/login");
    setCurrUser("farmer")
  };

  const handleConsumerClick = () => {
    // Redirect to the consumer login or signup page
    navigate("/login");
    setCurrUser("consumer")
  };

  return (
    <div className="homePage">
      <div className="homeLeft">
        <img src={leftImage} alt="failed to load" />
      </div>

      <div className="homeRight">
        <div className="header">FARMCONNECT</div>
        <br />

        <div className="buttons">
          <button
            className="ui huge homePageButtonColor button"
            onClick={handleFarmerClick}
          >
            I am a farmer
          </button>
          <br />
          <br />
          <button
            className="ui huge homePageButtonColor button"
            onClick={handleConsumerClick}
          >
            I am a consumer
          </button>
        </div>

        <p>Bringing farmers and consumers together without any middlemen!</p>

        <div className="logo">
          <img src={fclogo} alt="failed to load" />
        </div>
      </div>
    </div>
  );
};

export default Home;

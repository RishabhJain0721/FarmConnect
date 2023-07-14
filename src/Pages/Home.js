import React from "react";
import { useNavigate } from "react-router-dom";
import { useFarmContext } from "../Context/useContext";
import leftImage from "../images/homePageImages/homePageImg.jpg";
import fclogo from "../images/homePageImages/fclogo.png";

const Home = () => {
  const { home, setHome } = useFarmContext();
  const navigate = useNavigate();

  const handleFarmerClick = () => {
    // Redirect to the farmer login or signup page
    navigate("/login");
  };

  const handleConsumerClick = () => {
    // Redirect to the consumer login or signup page
    navigate("/login");
  };

  return (
    <div className="homePage">
      <div className="homeLeft">
        <img src={leftImage} alt="failed to load" />
      </div>

      <div className="homeRight">
        <div className="ui huge header head">Farm Connect</div>
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

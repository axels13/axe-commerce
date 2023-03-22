import React from "react";
import "./card.css";

import banner from "../../assets/banner.jpg";
const Card = () => {
  return (
    <div>
      <div className="banner__container">
        <div className="banner__flex">
          <div className="banner__text">
            <h3>Creative harmonious living </h3>
            <p>
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <button>SHOP NOW</button>
          </div>

          <div className="banner__img">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

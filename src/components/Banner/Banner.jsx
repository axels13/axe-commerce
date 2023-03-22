import React from "react";
import "./banner.css";
import banner2 from "../../assets/banner_reverse.jpg";
const Banner = () => {
  return (
    <section className="banner__container">
      <div className="">
        <div className=" banner_reversed">
          <div className="banner__text">
            <h3>Creative harmonious living </h3>
            <p>
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <button>SHOP NOW</button>
          </div>

          <div>
            <img src={banner2} alt="banner" className="banner_img_reverse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

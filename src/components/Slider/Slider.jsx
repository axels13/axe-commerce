import React from "react";
import "./Slider.css";
import { items } from "../../items";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");

    if (slider.scrollLeft > 0) {
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    let sliderWidth = slider.scrollWidth;
    let sliderVisibleWidth = slider.clientWidth;
    if (slider.scrollLeft < sliderWidth - sliderVisibleWidth) {
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };

  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <div>
      <div>
        <div className="slider__container_btns">
          <h3>Trending Now</h3>
          <div className="slider__btns">
            <button name="slider" onClick={slideLeft}>
              <AiOutlineArrowLeft />
            </button>

            <button name="slider" onClick={slideRight}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div id="slider" className="slider__container">
          {filteredItems.map((item) => (
            <div className="slider__list" key={item.id}>
              <Link to={`/product/${item.id}`} onClick={() => window.top(0, 0)}>
                <div>
                  <img src={item.img} alt="product" width={300} />
                </div>

                <div className="item-description">
                  <p>{item.name}</p>
                  <p className="item-description_name">{item.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

import React from "react";
import ask from "../../assets/products/ash.jpg";
import planta from "../../assets/products/planta.png";
import silla from "../../assets/products/silla.jpg";
import negra from "../../assets/products/negra.jpg";

import "./popular.css";
const Popular = () => {
  return (
    <section id="popular">
      <div>
        <h2>Trending Now</h2>

        <div className="popular__container">
          <div className="popular__card">
            <img src={ask} alt="bridge" />
            <div className="popular__text">
              <h4>Gejst Shelf A Black Ash/Black</h4>
              <span className="popular__price">115$</span>
            </div>
          </div>

          <div className="popular__card">
            <img src={planta} alt="bridge" />
            <div className="popular__text">
              <h4>Cube Lolo Vase black</h4>
              <span className="popular__price">161$</span>
            </div>
          </div>

          <div className="popular__card">
            <img src={silla} alt="bridge" />
            <div className="popular__text">
              <h4>Traditional Armchair</h4>
              <span className="popular__price">89$</span>
            </div>
          </div>

          <div className="popular__card">
            <img src={negra} alt="bridge" />
            <div className="popular__text">
              <h4>The Sun Pendant Black</h4>
              <span className="popular__price">160$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;

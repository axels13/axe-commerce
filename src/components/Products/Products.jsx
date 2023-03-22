import React from "react";

import sillon from "../../assets/products/sillon.jpg";

import toaster from "../../assets/products/toaster.jpg";

import lampara from "../../assets/products/lampara.png";

import mueble from "../../assets/products/mueble.jpg";

import luz from "../../assets/products/luz.jpg";

import oil from "../../assets/products/oil.jpg";

import lamp from "../../assets/products/lamp.jpg";

import ash from "../../assets/products/ash.jpg";

import "./Products.css";
const Products = () => {
  return (
    <section id="products">
      <main>
        <h2 className="title">Products more orders!!</h2>

        <div className="products__container">
          <div className="products__card">
            <img src={sillon} alt="bridge" />
            <div className="products__text">
              <h4>Little Armchair Sheepskin</h4>
              <span className="products__price">986$</span>
            </div>
          </div>

          <div className="products__card">
            <img src={toaster} alt="toaster" />
            <div className="products__text">
              <h4>Pop-Up-Toaster</h4>
              <span className="products__price">45$</span>
            </div>
          </div>

          <div className="products__card">
            <img src={lampara} alt="bridge" />
            <div className="products__text">
              <h4>Lapm Light Blue</h4>
              <span className="products__price">79$</span>
            </div>
          </div>

          <div className="products__card">
            <img src={mueble} alt="mueble" />
            <div className="products__text">
              <h4>Pulp unit-5 Compartments</h4>
              <span className="products__price">254$</span>
            </div>
          </div>

          <div className="products__card">
            <img src={luz} alt="bridge" width={400} />
            <div className="products__text">
              <h4>Golden Modern Light</h4>
              <span className="products__price">189$</span>
            </div>
          </div>

          <div className="products__card">
            <img src={oil} alt="bridge" width={400} />
            <div className="products__text">
              <h4>Body oil 200ml</h4>
              <span className="products__price">67$</span>
            </div>
          </div>

          <div className="products__card">
            <img src={lamp} alt="bridge" width={400} />
            <div className="products__text">
              <h4>Black and White Lamp</h4>
              <span className="products__price">220$</span>
            </div>
          </div>

          <div className="products__card">
            <img src={ash} alt="bridge" width={400} />
            <div className="products__text">
              <h4>Gejst Shelf A Black Ash/Black</h4>
              <span className="products__price">115$</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Products;

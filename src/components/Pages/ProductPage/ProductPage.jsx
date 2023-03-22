import React, { useContext, useState } from "react";
import "./ProductPage.css";
import { items } from "../../../items";
import { useParams } from "react-router-dom";
import Slider from "../../Slider/Slider";
import { CartContext } from "../../../context/CartContext";
const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const item = items.filter((item) => item.id === parseInt(id));
  const [image, setImage] = useState(item[0].img);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(item[0]);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };
  const changeImage = (e) => {
    setImage(e.target.src);
  };
  return (
    <section>
      <div>
        <div className="page__container">
          <div className="page__container__flex">
            <div className="page__container__gallery">
              <div className="img_container">
                <img
                  src={image}
                  alt="products"
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </div>
              <div className="page__container_images">
                <img
                  className="images"
                  src={item[0].img}
                  alt="product"
                  width={200}
                  height={200}
                  onMouseOver={changeImage}
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                  width={200}
                  height={200}
                  className="images"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                  width={200}
                  height={200}
                  className="images"
                />
              </div>
            </div>

            <div className="page__card__text">
              <div>
                <h2>{item[0].name}</h2>
                <p>{item[0].specs}</p>
              </div>

              <div className="page__card_btns">
                <div className="page__card_quantity">
                  <p>Quantity</p>

                  <button onClick={decrease}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increase}>+</button>
                  <p className="price">{calcPrice(quantity).toFixed(2)}$</p>
                </div>

                <div>
                  <div className="page__card_buttons">
                    <button
                      className="page__card_add"
                      onClick={handleAddToCart}
                    >
                      add to cart
                    </button>
                    <button className="page__card_buy">buy now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default ProductPage;

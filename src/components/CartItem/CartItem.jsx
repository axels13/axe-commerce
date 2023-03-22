import React, { useContext, useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const { removeFromCart } = useContext(CartContext);

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

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="cart__item">
      <div>
        <img src={item.img} alt="" width={100} />
      </div>

      <div className="cart_items__container">
        <div className="cart__items_text">
          <h3>{item.name}</h3>
          <p>{calcPrice(quantity, item.price).toFixed(2)}$</p>
        </div>
        <div className="cart_items__btns">
          <button onClick={decrease}>-</button>
          <p>{quantity}</p>
          <button onClick={increase}>+</button>
          <GrFormClose
            className="icon"
            onClick={() => handleRemoveFromCart(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

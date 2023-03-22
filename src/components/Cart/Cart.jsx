import React, { useContext, useState } from "react";
import "./Cart.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = ({ handleClose }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="cart__container">
      <div className="cart__card">
        <div className="cart__flex">
          <div className="cart__close">
            <h3>Your Shopping cart</h3>
          </div>

          <div className="cart__icon__close" onClick={handleClose}>
            <AiOutlineCloseCircle />
          </div>
        </div>
        {/* cart item */}
        <div>
          <div className="cart__list">
            {cartItems.length !== 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleAddToCart={handleAddToCart}
                />
              ))
            ) : (
              <EmptyCart />
            )}
          </div>
        </div>
        {/*  borde  */}
        <div className="cart_items__check">
          <div>
            <p>Subtotal</p>
            <span>45.00$</span>
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

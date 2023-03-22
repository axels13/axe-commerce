import React from "react";
import Empty from "../../assets/empty-cart.png";

import "./Empty.css";
const EmptyCart = () => {
  return (
    <div className="empty">
      <img src={Empty} alt="vacio" />
      <h3>Your cart is empty</h3>
    </div>
  );
};

export default EmptyCart;

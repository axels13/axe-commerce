import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { cartItems } = useContext(CartContext);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowCart(false);
  };

  return (
    <header id="header">
      <nav className="nav_container">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="nav_logo" />
          </Link>
        </div>

        <div>
          <button className="nav_btn" onClick={handleToggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>

        {/* menu desktop */}
        <ul className="nav_desk">
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
          <li>
            <Link to="/product/1">PRODUCT PAGE</Link>
          </li>
          {/* CART  */}
          <li>
            <span className="cart" onClick={() => setShowCart(!showCart)}>
              <BsFillCartFill />
            </span>

            <span className="cart-count">{cartItems.length}</span>
          </li>
        </ul>
        <ul className={`nav_mobile ${showMenu ? "active" : ""}`}>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
          <li>
            <Link to="/product/1">PRODUCT PAGE</Link>
          </li>

          <li>
            <span className="cart" onClick={() => setShowCart(!showCart)}>
              <BsFillCartFill />
            </span>
          </li>
        </ul>
      </nav>
      {showCart && <Cart cartItems={cartItems} handleClose={handleClose} />}
    </header>
  );
};

export default Navbar;

import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Categories from "./components/Pages/Categories/Categories";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import CartContextProvider from "./context/CartContext";
const App = () => {
  return (
    <CartContextProvider>
      <>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}>
            {" "}
          </Route>
          <Route path="/product/:id" element={<ProductPage />}>
            {" "}
          </Route>
        </Routes>

        <Footer />
      </>
    </CartContextProvider>
  );
};

export default App;

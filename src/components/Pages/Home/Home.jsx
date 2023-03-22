import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Card from "../../Card/Card";
import Contact from "../../Contact/Contact";
import Popular from "../../Popular/Popular";
import Products from "../../Products/Products";
import "./home.css";
const Home = () => {
  return (
    <>
      <section className="container">
        <main className="home__grid">
          <div className="grid-one">
            <Link to="/" className="grid_card">
              <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-1.3de7da0f1e4634169c62.jpg"
                alt="living"
              />
              <h2 className="grid_text">Live Comfortably</h2>
            </Link>
          </div>

          <div className="grid-two">
            <Link to="/" className="grid_card">
              <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg"
                alt="crema"
              />
              <h2 className="grid_text">Skincare</h2>
            </Link>
          </div>

          <div className="grid-three">
            <Link to="/" className="grid_card">
              <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-3.60734311499ba1dbbc41.jpg"
                alt="living"
              />
              <h2 className="grid_text">Kitchen</h2>
            </Link>
          </div>

          <div className="grid-four">
            <Link to="/" className="grid_card">
              <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-4.672d1d0d7656e2a778f6.jpg"
                alt="pc"
              />
              <h2 className="grid_text">Electronics</h2>
            </Link>
          </div>
        </main>
      </section>

      <Products />

      <Card />

      <Popular />

      <Banner />

      <Contact />
    </>
  );
};

export default Home;

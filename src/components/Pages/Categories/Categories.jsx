import React, { useEffect, useState } from "react";
import products from "../../../products";
import ProductCard from "../../ProductCard/ProductCard";
import "./Categories.css";
const Categories = () => {
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    }

    if (category === "electronics") {
      const filteredProducts = products.filter(
        (item) => item.category === "electronics"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "lamps") {
      const filteredProducts = products.filter(
        (item) => item.category === "lamps"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "furnitures") {
      const filteredProducts = products.filter(
        (item) => item.category === "furnitures"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "kitchen") {
      const filteredProducts = products.filter(
        (item) => item.category === "kitchen"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "chairs") {
      const filteredProducts = products.filter(
        (item) => item.category === "chairs"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "skin care") {
      const filteredProducts = products.filter(
        (item) => item.category === "skin care"
      );
      setAllProducts(filteredProducts);
    }
  });

  return (
    <section id="categories">
      <main>
        <h1>Catalogo</h1>
        <div className="btn_container">
          <button onClick={() => setCategory("All")}>All</button>
          <button onClick={() => setCategory("furnitures")}>Furnitures</button>
          <button onClick={() => setCategory("electronics")}>
            Electronics
          </button>
          <button onClick={() => setCategory("lamps")}>Lamps</button>
          <button onClick={() => setCategory("kitchen")}>Kitchen</button>
          <button onClick={() => setCategory("chairs")}>Chairs</button>
          <button onClick={() => setCategory("skin care")}>Skin Care</button>
        </div>
      </main>

      <div className="categories__card_container">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Categories;

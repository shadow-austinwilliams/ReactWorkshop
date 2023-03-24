import React from "react";

import ProductCard from "./components/product-card/product-card";
import productsJson from "./products.json";

import "./App.css";

function App() {
  const products = productsJson.products;

  return (
    <div className="App">
      <div className="header">
        <h1>Products</h1>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            name={product.name}
            imgSrc={product.img}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

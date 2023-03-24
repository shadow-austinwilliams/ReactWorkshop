import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Products</h1>
      </div>

      <div className="products-container">
        <div className="card-container">
          <img
            src="./assets/nike-sneakers.jpg"
            alt="nike sneakers"
            className="card-img"
          />
          <span className="card-title">Nike Sneakers</span>
          <span className="card-price">$79.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/converse-sneakers.jpg"
            alt="converse sneakers"
            className="card-img"
          />
          <span className="card-title">Converse Sneakers</span>
          <span className="card-price">$69.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/unbranded-sneakers.jpg"
            alt="nike sneakers"
            className="card-img"
          />
          <span className="card-title">Unbranded Sneakers</span>
          <span className="card-price">$49.99</span>
        </div>
        <div className="card-container">
          <img src="./assets/boots.jpg" alt="boots" className="card-img" />
          <span className="card-title">Leather Boots</span>
          <span className="card-price">$149.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/fancy-shoes.jpg"
            alt="fancy shoes"
            className="card-img"
          />
          <span className="card-title">Fancy Shoes</span>
          <span className="card-price">$249.99</span>
        </div>
        <div className="card-container">
          <img src="./assets/heels.jpg" alt="heels" className="card-img" />
          <span className="card-title">Heels</span>
          <span className="card-price">$89.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/multi-color-sneakers.jpg"
            alt="multi color sneakers"
            className="card-img"
          />
          <span className="card-title">Multi Color Sneakers</span>
          <span className="card-price">$129.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/timberlands.jpg"
            alt="timberlands"
            className="card-img"
          />
          <span className="card-title">Timberlands</span>
          <span className="card-price">$179.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/white-sneakers.jpg"
            alt="white sneakers"
            className="card-img"
          />
          <span className="card-title">White Sneakers</span>
          <span className="card-price">$119.99</span>
        </div>
        <div className="card-container">
          <img src="./assets/yeezys.jpg" alt="yeezys" className="card-img" />
          <span className="card-title">Yeezy's</span>
          <span className="card-price">$349.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/yellow-black-sneakers.jpg"
            alt="yellow and black sneakers"
            className="card-img"
          />
          <span className="card-title">Yellow Black Sneakers</span>
          <span className="card-price">$129.99</span>
        </div>
        <div className="card-container">
          <img
            src="./assets/yellow-sneakers.jpg"
            alt="yellow sneakers"
            className="card-img"
          />
          <span className="card-title">Yellow Sneakers</span>
          <span className="card-price">$49.99</span>
        </div>
      </div>
    </div>
  );
}

export default App;

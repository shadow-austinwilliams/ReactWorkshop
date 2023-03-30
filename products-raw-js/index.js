const products = [
  {
    name: "Nike Sneakers",
    img: "./assets/nike-sneakers.jpg",
    price: 79.99,
  },
  {
    name: "Converse Sneakers",
    img: "./assets/converse-sneakers.jpg",
    price: 69.99,
  },
  {
    name: "Unbranded Sneakers",
    img: "./assets/unbranded-sneakers.jpg",
    price: 49.99,
  },
  {
    name: "Leather Boots",
    img: "./assets/boots.jpg",
    price: 149.99,
  },
  {
    name: "Fancy Shoes",
    img: "./assets/fancy-shoes.jpg",
    price: 249.99,
  },
  {
    name: "Heels",
    img: "./assets/heels.jpg",
    price: 89.99,
  },
  {
    name: "Multi Color Sneakers",
    img: "./assets/multi-color-sneakers.jpg",
    price: 129.99,
  },
  {
    name: "Timberlands",
    img: "./assets/timberlands.jpg",
    price: 179.99,
  },
  {
    name: "White Sneakers",
    img: "./assets/white-sneakers.jpg",
    price: 119.99,
  },
  {
    name: "Yeezy's",
    img: "./assets/yeezys.jpg",
    price: 349.99,
  },
  {
    name: "Yellow Black Sneakers",
    img: "./assets/yellow-black-sneakers.jpg",
    price: 129.99,
  },
  {
    name: "Yellow Sneakers",
    img: "./assets/yellow-sneakers.jpg",
    price: 49.99,
  },
];

const displayProducts = () => {
  console.log(products);

  products.forEach((product) => {
    const productsContainer = document.getElementById("products-container");
    const newProductDiv = document.createElement("div");
    newProductDiv.className = "card-container";
    newProductDiv.innerHTML = `
      <img
        src="${product.img}"
        alt="${product.name}"
        class="card-img"
      />
      <span class="card-title">${product.name}</span>
      <span class="card-price">$${product.price}</span>
    `;
    productsContainer.appendChild(newProductDiv);
  });
};

displayProducts();

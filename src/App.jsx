import React from "react";
import "./App.css";
import Card_1 from "./Components/Card_1";
import Card_2 from "./Components/Card_2";
import Card_3 from "./Components/Card_3";

const App = () => {
  const Products = [
    {
      product_name: "Wireless Headphones",
      category: "electronics",
      price: "₹1999",
      imgUrl:
        "https://avstore.in/cdn/shop/files/1.AVStore-Sonos-Ace-Front-Angled-View-Hero-Black.jpg?v=1725620870",
    },
    {
      product_name: "Smart watch",
      category: "gadgets",
      price: "₹2999",
      imgUrl:
        "https://ddfndelma2gpn.cloudfront.net/color/1591/oraimo_watch_5_black_1.webp",
    },
    {
      product_name: "Running shoes",
      category: "fashion",
      price: "₹2499",
      imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];
  return (
    <>
      <div className="container-wrapper">
        <div className="container">
          <h1 className="title">Our Products</h1>

          <div className="card-container">
            <Card_1 data={Products[0]} />
            <Card_2 data={Products[1]} />
            <Card_3 data={Products[2]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

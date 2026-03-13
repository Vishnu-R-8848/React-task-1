import React from "react";

const Card_2 = ({data}) => {
  return (
    <div className="card">
      <img src={data.imgUrl} alt="" />
      <h2 className="product-name">{data.product_name}</h2>
      <h3 className="category-text">{data.category}</h3>
      <p className="price-text">{data.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card_2;

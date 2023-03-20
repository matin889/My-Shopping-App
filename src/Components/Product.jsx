import React from "react";

const Product = ({ item }) => {
  const { id, title, price, description, image, rating } = item;
  return (
    <article key={id} className="product">
      <img src={image} alt="photo" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <h2 className="product__price">Price: ${price}</h2>
        <p className="product__rating">Rating: {rating.rate}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add Cart</button>
      </div>
    </article>
  );
};

export default Product;

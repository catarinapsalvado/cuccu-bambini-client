import React from "react";
import { Link } from "react-router-dom";
import { Button } from '../pages/LoginPage/LoginPage.styles'

function ProductCard(props) {
  const { image, name, price, _id } = props.item;

  return (
    <div className="img-container">
      <img className="cardImage" src={image} alt="image_product" />
      <h3 className="name">{name}</h3>
      <p className="price">{price}</p>
      <Link to={`/product-details/${_id}`}>
        <Button>See item</Button>
      </Link>
    </div>
  );
}

export default ProductCard;

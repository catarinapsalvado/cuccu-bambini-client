import React from "react";



function ItemCart(props) {
  const { image, name, price, _id } = props.item;

  return (
    <div className="img-container">
      <img className="cardImage" src={image} alt="image_product" />
      <h3 className="name">{name}</h3>
      <p className="price">{price}</p>
    
    </div>
  );
}

export default ItemCart;


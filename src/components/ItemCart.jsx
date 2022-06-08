import React from "react";
import axios from "axios";

function ItemCart(props) {
  const { image, name, price, _id } = props.item;


  const removeFromCart = (productId) => {
    const storedToken = localStorage.getItem("authToken");
      axios
        .put(`${process.env.REACT_APP_API_URL}/api/cart/remove/${productId}`, {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          props.setIsUpdated(false)
        })
        .catch((err) => {
          console.log(err)
        });
    }

  return (
    <div className="img-container">
      <img className="cardImage" src={image} alt="image_product" />
      <h3 className="name">{name}</h3>
      <p className="price">{price}</p>
      <button onClick={() => removeFromCart(_id)}>Remove</button>

    </div>
  );
}

export default ItemCart;


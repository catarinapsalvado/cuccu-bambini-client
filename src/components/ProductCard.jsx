import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../pages/Styles/Form.styles.jsx'
import { Cardtag } from  "../pages/Styles/Card.styles.jsx"
import axios from "axios";


function ProductCard(props) {
  const { image, name, price, _id } = props.item;
  const navigate = useNavigate();

  const addToCart = (productId) => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/api/cart/${productId}`, {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          console.log('Product Addedd', response)
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      navigate('/login')
    }
  };

  return (
    <Cardtag>
    <div className="img-container">
      <img className="cardImage" src={image} alt="image_product" />
      <h3 className="name">{name}</h3>
      <p className="price">{price} €</p>
      <Link to={`/product-details/${_id}`}>
        <Button>See Item</Button>
      </Link>
      <Button onClick={() => addToCart(_id)}>Add to Cart</Button>

    </div></Cardtag>
  );
}

export default ProductCard;

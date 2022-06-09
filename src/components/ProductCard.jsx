import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../pages/Styles/Form.styles.jsx'
import { Cardtag } from  "../pages/Styles/Card.styles.jsx"
import axios from "axios";



function ProductCard(props) {
  const [isInCart, setIsInCart] = useState(false)
  const { image, name, price, _id } = props.item;
  const cart = props.cart
  const navigate = useNavigate();

  const checkCart = () => {
    cart.product?.forEach(product => {
      if(product._id === _id) {
        setIsInCart(true)
      }
    })
  }

  const addToCart = (productId) => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/api/cart/${productId}`, {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          props.setIsUpdated(false)
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      navigate('/login')
    }
  };

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

  useEffect(() => {
    checkCart()
  }, [props.isUpdated])
  

  return (
    
    <div className="cardContainer">
      <img className="cardImage" width='100%' src={image} alt="image_product" />
      <h3 className="name">{name}</h3>
      <p className="price"> Price: {price} €</p>
      <Link to={`/product-details/${_id}`}>
        <Button>See Item</Button>
      </Link>
      {isInCart ? <Button onClick={() => removeFromCart(_id)}>Remove from Cart</Button> : <Button onClick={() => addToCart(_id)}>Add to Cart</Button>}

    </div>
  );
}

export default ProductCard;

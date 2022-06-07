import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ItemCart from "../components/ItemCart";

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { productId } = useParams();

  const getCart = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  };

  const editCart = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/cart/${productId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <h1>This is a Cart</h1>

      {cart &&
        cart.map((item) => {
          return (
            <ItemCart key={item._id} className="cart" item={item}></ItemCart>
          );
        })}
    </div>
  );
}

export default Cart;

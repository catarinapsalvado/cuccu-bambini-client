import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ItemCart from "../components/ItemCart";
import { Button, Title } from "./Styles/Form.styles";
import {Cardtag, CartTag} from "./Styles/Card.styles"

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isUpdated, setIsUpdated] = useState(true);
  const { productId } = useParams();

  const getCart = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        let totalCart = 0;
        response.data.product.forEach((item) => {
          return (totalCart += Number(item.price));
        });
        setTotal(totalCart);
        setCart(response.data);
        setIsUpdated(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCart();
  }, [isUpdated]);

  return (
    <div>
      <Title>Your Cart</Title>
      <CartTag>
      {cart &&
        cart.product?.map((item) => {
          return (
            <ItemCart
              key={item._id}
              className="cart"
              item={item}
              setIsUpdated={setIsUpdated}
            />
          );
        })}
        </CartTag>

      <Title>Total: {total} €</Title>
    </div>
  );
}

export default Cart;

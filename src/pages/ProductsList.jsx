import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import AddProduct from "./AddProducts";
import { Card, CardGroup } from "react-bootstrap";
import { Cardtag } from "./Styles/Card.styles";
import {Title} from "./Styles/Form.styles"

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [searchProducts, setSearchProducts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  /* const storedToken = localStorage.getItem("authToken");  */
  // Send the token through the request "Authorization" Headers

  const getProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products-list`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getCart = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        setCart(response.data)
        setIsUpdated(true)
      }
        )
      .catch((error) => console.log(error));
  };

  /* const searchFilter = (search) => {
    let filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchProducts(filteredProducts);
    setProducts(filteredProducts);
  }; */

  useEffect(() => {
    getProducts();
    getCart();
  }, [isUpdated]);

  return (
    <div>
      <Title>Our products</Title>

      {/* <Searchbar searchFilter={searchFilter} /> */}

      {products && cart &&
        products.map((item) => {
          return (
            
            <Cardtag>
            <ProductCard
              key={item._id}
              className="card"
              item={item}
              cart={cart}
              isUpdated={isUpdated}
              setIsUpdated={setIsUpdated}
            ></ProductCard>
            </Cardtag>
          );
        })}
    </div>
  );
}

export default ProductsList;
/*  <Grid container spacing={5}>
        {products.map((product) => (
          <Grid key={product._id} item xs={6} md={3}>
            <ProductCard
              key={product._id}
              /*{...product}*/

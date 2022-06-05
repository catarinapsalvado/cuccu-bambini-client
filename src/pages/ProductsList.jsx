import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/material";

function ProductsList() {
  const [products, setProducts] = useState([]);

  /* const storedToken = localStorage.getItem("authToken");  */

  // Send the token through the request "Authorization" Headers
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/products-list`)
    .then((response) => setProducts(response.data))
    .catch((error) => console.log(error));
     
    /*   useEffect(() => {
      ProductsList();
    }, []);   */

  return (
    <div>
     <Grid container spacing={5}>
        {products.map((product) => (
          <Grid key={product._id} item xs={6} md={3}>
            <ProductCard
              key={product._id}
              /*{...product}*/  />
      
          </Grid>
        ))}
      </Grid>
   {/*    <h3>List of products</h3>

      {products &&
        products.map((product) => {
          return (
            <ProductCard key={product._id} className="card">
           
            </ProductCard>
          );
        })} */}
    </div>
  );
}

export default ProductsList;

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  const [products, setproducts] = useState([]);
  //search useState

  /* const getAllProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/products-list`)
      .then((response) => setSearch(response.data))
      .catch((error) => console.log(error));
  }; */

  return (
    //search > 0 && display

    //search < 1 && =>
    <div className="homepage">
      <h1>Welcome to Cuccu, Bambini!</h1>
      <div className="homepage-links">
        <Link to="/products-list">See all the products</Link>
        <br />

        <Link to="/category/clothings">Clothings</Link>

        <br />
        <Link to="/category/footwear">Footwear</Link>

        <br />
        <Link to="/category/baby-gear">Baby Gear</Link>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const [item, setItem] = useState([]);
  const { productId } = useParams();

  const getProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products-list/${productId}`)
      .then((response) => {
        console.log(productId);
        console.log(response.data);
        setItem(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div className="itemDetails">
      {item && (
        <>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.brand}</p>
          <p>{item.size}</p>
          <Link to="/products-list">
            <button>Back to Products List</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ProductDetails;

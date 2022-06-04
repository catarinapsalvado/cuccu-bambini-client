import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"; 

 function ProductsList (){

     const [products, setProducts] = useState([]);

  /* const storedToken = localStorage.getItem("authToken");  */
 
  // Send the token through the request "Authorization" Headers
 axios
    .get(
    `${process.env.REACT_APP_API_URL}/api/products-list`,
  )
    .then((response) => setProducts(response.data))
    .catch((error) => console.log(error));
 
   /*  useEffect(() => {
      ProductsList();
    }, []);  */
  
   
    return (
      <div>
        <h3>List of products</h3>
    
        {products.map((product) => {
          return (
            <div key={product._id} className="card">
            <Link to={`/products-list/${product._id}`}>
            <h3>{product.name}</h3>
            <img src={product.image} alt="products" />
            </Link>  
              <p>Price: {product.price}</p>
              <p>{product.size}</p>
              <p>{product.brand}</p>
             <button> See more </button>
            </div>
          );
        })}
      </div>
    );
    }

 
 
export default ProductsList; 

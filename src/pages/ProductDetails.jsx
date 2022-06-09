import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext, useContext } from "../context/auth.context";
import { ContainerProductDetails, ContainerAllProductDetails, ImageCard  } from "./Styles/ProductDetails.styles"
import { Button, ButtonDetails } from "./Styles/Form.styles.jsx";


function ProductDetails() {
  const [item, setItem] = useState([]);
  const { productId } = useParams();
  const { user } = useContext(AuthContext);

  console.log(user);

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
  }, []);

  return (

  
    <div className="itemDetails">
    
      {item && (
        <>
        <ContainerAllProductDetails>
        <ImageCard src={item.image}/>
        <ContainerProductDetails>
          <h1>{item.name}</h1>
          <p class="description"><b>Description: </b>{item.description}</p>
          <p><b>Price: </b> {item.price}€</p>
          <p><b>Brand: </b> {item.brand}</p>
          <p><b>Size: </b> {item.size}</p>
        <div class='btn-product-detail'>
          <Link to="/cart">
            <ButtonDetails>Add to Cart</ButtonDetails>
          </Link>
         
          <Link to="/products-list">
            <ButtonDetails class='btn-back'>Back </ButtonDetails>
          </Link></div>
          {user && user.role === "admin" && (
            <>
            <Link to={`/product-details/${item._id}/edit`}>
              <ButtonDetails>Edit Product</ButtonDetails>
              </Link>
            </>
          )}
         </ContainerProductDetails>
          
          </ContainerAllProductDetails>
        </>
      )}
      
    </div>
 
 
  );
}

export default ProductDetails;

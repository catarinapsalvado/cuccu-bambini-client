import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext, useContext } from "../context/auth.context";
import { ContainerProductDetails, ContainerAllProductDetails } from "./ProductDetails.styles"
import { Button } from "./LoginPage/LoginPage.styles";

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
    <ContainerAllProductDetails>
    <div className="itemDetails">
    
      {item && (
        <>
        <img src={item.image}/>
        <ContainerProductDetails>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.brand}</p>
          <p>{item.size}</p>
          </ContainerProductDetails>
          <Link to="/products-list">
            <Button>Back to Products List</Button>
          </Link>

          {user && user.role === "admin" && (
            <>
              <Link to={`/product-details/${item._id}/edit`}>
                <Button>Edit Products</Button>
              </Link>
            </>
          )}
        </>
      )}
      
    </div>
    </ContainerAllProductDetails>
  );
}

export default ProductDetails;

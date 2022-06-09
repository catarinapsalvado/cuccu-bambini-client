import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import AddProduct from "./AddProducts";
import { Card, CardGroup } from "react-bootstrap";
import { Cardtag } from "./Styles/Card.styles";
import { Title } from "./Styles/Form.styles";

function CategoryList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { category, _id } = useParams();
  const [searchProducts, setSearchProducts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  /* const storedToken = localStorage.getItem("authToken");  */
  // Send the token through the request "Authorization" Headers

  const getCategory = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/products-list/category/${category}`
      )

      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  const getCart = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        setCart(response.data);
        setIsUpdated(true);
      })
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
    getCategory();
    getCart();
  }, [isUpdated]);

  return (
    <div>
      {" "}
    
      <Title>{category.charAt(0).toUpperCase() + category.slice(1)} items</Title>
      
      {products.length > 0 && cart ? (
        
        <Cardtag>
        {products.map((item) => {
          return (
            
              <ProductCard
                key={item._id}
                className="card"
                item={item}
                cart={cart}
                isUpdated={isUpdated}
                setIsUpdated={setIsUpdated}
              ></ProductCard>
           
          ) 
        })}
      </Cardtag>
      
      ) : (
        <h2>'No products available'</h2>
      )}
    </div>
  );
}

export default CategoryList;

/* 
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function CategoryList() {
  const [products, setProducts] = useState([]);
  const { category, _id } = useParams();

  const getCategory = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/products-list/category/${category}`
      )

      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategory();
  }, []);

  console.log(products);

  return (
    <div>
      {" "}
      <h1>products</h1>
      <h3>{category.charAt(0).toUpperCase() + category.slice(1)} items</h3>
      {products.length > 0 ? (
        products.map((item) => {
          return (
            <ProductCard
              key={item._id}
              className="card"
              item={item}
            ></ProductCard>
          );
        })
      ) : (
        <h2>'No products available'</h2>
      )}
    </div>
  );
}

export default CategoryList;
{ 
   <ProductCard
              key={item._id}
              className="card"
              item={item}
            ></ProductCard> 
}
{
  /* <div>
<h3> {category.charAt(0).toUpperCase() + category.slice(1)} items</h3>
{products.length > 0 ? (
   products.map((item) => {
  return (
    <div key={item._id} className="carditem"> 
    <h3>{item.name}</h3>
    <img src={item.image} alt="item" />
      <p>Price: {item.price}</p>
      <p>{item.size}</p>
      <p>{item.brand}</p>
      <Link to={`/product-details/${_id}`}>
  <button>See item</button>
</Link>
    </div>
  );
}) 

) : (<h2>'No products available'</h2>)}


</div> 
}


*/

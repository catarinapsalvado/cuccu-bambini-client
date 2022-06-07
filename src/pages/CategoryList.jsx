import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom"; 

function CategoryList() {
  const [products, setProducts] = useState([]);
  const { category, _id } = useParams();
 
console.log(category)

const getCategory =()=>{
   axios
  .get(
  `${process.env.REACT_APP_API_URL}/api/products-list/category/${category}`)
  
  .then((response) => setProducts(response.data))
  .catch((error) => console.log(error)); 
  
}

   useEffect(() => {
    getCategory();
  }, []); 
  
  console.log(products)
 
  return (
    <div>
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
  );
  }



export default CategoryList;



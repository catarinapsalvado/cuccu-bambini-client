import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom"; 

function Clothing() {
  const [clothing, setClothing] = useState([]);
  const { category } = useParams();


  axios
  .get(
  `${process.env.REACT_APP_API_URL}/api/products-list/${category.enum[0]}`,
 /*  { headers: { Authorization: `Bearer ${storedToken}` } } */
)
  .then((response) => setClothing(response.data))
  .catch((error) => console.log(error));
/* 
   useEffect(() => {
    Clothing();
  }, []); 
 */
 
  return (
    <div>
      <h3>Clothing items</h3>
  
      {clothing.map((clothes) => {
        return (
          <div key={clothes._id} className="cardClothes"> 
          <h3>{clothes.name}</h3>
          <img src={clothes.image} alt="clothes-image" />
            <p>Price: {clothes.price}</p>
            <p>{clothes.size}</p>
            <p>{clothes.brand}</p>
           <button> See more </button>
          </div>
        );
      })}
    </div>
  );
  }



export default Clothing;



import React from 'react'
import { Link } from 'react-router-dom';


function ProductCard(props) {
    const { image, name, price } = props;
  return (

      <div className="img-container">
    <img className="cardImage" src="https://image.yfswebstatic.com/fit-in/950x950/origin/product/015658000069/61cee73b8a5eb.jpg" alt="image_product" />
      <h3 className="name">Catarina</h3>
      <p className="price">10€</p>
      <Link to="/products-list/${productId}">
      <button>See item</button>
    </Link> 
     

    </div>
  )
}

export default ProductCard
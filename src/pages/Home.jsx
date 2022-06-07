import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

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

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.babycenter.com/ims/2019/10/Zia-16-Edit_4x3.jpg.pagespeed.ce.bn_SOQjB8V.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome</h3>
              <p>Check all our baby products</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://www.babyfirst.com.br/assets/img/slide-1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Reuse </h3>
              <p>Contribute to a sustainable and circular economy</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.naturebaby.com.hk/media/wysiwyg/Wear_Desktop_Update650_x_900_px.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Sell what you no longer need</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

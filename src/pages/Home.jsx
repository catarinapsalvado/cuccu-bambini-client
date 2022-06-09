import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-carousel-minimal";
import { Card, CardGroup } from "react-bootstrap";
import imagecard1 from "../assets/R.png";
import imagecard2 from "../assets/omar-lopez-vTknj2OxDVg-unsplash.jpg";
import imagecard3 from "../assets/rent_baby_gear_equipment-1536x1253.webp";
import Logo from "../assets/3-removebg-preview.png";

function Home() {
  const [products, setproducts] = useState([]);

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1610901137736-d7cc46657b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=835&q=80",
      caption: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570657891791-e39a9d185540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      caption: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 0px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="2000vw"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            margin-bottom="50px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "2000px",
              maxHeight: "400px",
            }}
          />
          <br></br>
          <img src={Logo} alt="Logo" height="50px" />{" "}
          <p>
            <br></br> The fashion industry has an impact of textile production
            and waste on the environment. Clothing, footwear and home textiles
            contribute to water pollution, greenhouse gas emissions and
            landfill.
          </p>
          <p>
            We are all responsible. How can we help? By maintaining a circular
            economy, where you sell, we buy to sell to another family, while you
            can shop comfortably in your mobile app.
          </p>
          <p>
            Prepare future generations for reduced environmental impact and
            waste.
          </p>
          <CardGroup>
            <Card>
              <Card.Link as={Link} to="/category/clothings">
                <Card.Img
                  variant="top"
                  src={imagecard1}
                  alt=""
                  height="300vh"
                  weight="200px"
                  padding="20px"
                />
              </Card.Link>

              <Card.Body>
                <Card.Title>
                  <b>Clothing</b>
                </Card.Title>
                <Card.Text>
                  From underwear to costumes here you can find clothes for
                  newborns to children up to 6 years old. In the description we
                  have the condition of the item and the size.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Link as={Link} to="/category/footwear">
                <Card.Img
                  variant="top"
                  src={imagecard2}
                  alt=""
                  height="300vh"
                  weight="200px"
                  padding="20px"
                />
              </Card.Link>

              <Card.Body>
                <Card.Title>
                  <b>Footwear</b>
                </Card.Title>
                <Card.Text>
                  Shoes, sneakers, sandals, slippers, find your style and what
                  you need. Various sizes available.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Link as={Link} to="/category/baby-gear">
                <Card.Img
                  variant="top"
                  src={imagecard3}
                  alt=""
                  height="300vh"
                  weight="200px"
                  padding="20px"
                />
              </Card.Link>

              <Card.Body>
                <Card.Title>
                  <b>Baby gear</b>
                </Card.Title>
                <Card.Text>
                  All kinds of baby and children's items, from toys to nursery
                  items
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default Home;

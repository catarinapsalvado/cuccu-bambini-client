import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-carousel-minimal";
import { Card, CardGroup } from "react-bootstrap";
import imagecard1 from "../assets/R.png";
import imagecard2 from "../assets/omar-lopez-vTknj2OxDVg-unsplash.jpg";
import imagecard3 from "../assets/rent_baby_gear_equipment-1536x1253.webp";

function Home() {
  const [products, setproducts] = useState([]);

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1571211468362-33f20cb1982f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      caption: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586475915213-69971ee3c21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
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
          <br></br>
          <br></br>

          <CardGroup>
            <Card>
              <Card.Link as={Link} to="/category/clothings">
                <Card.Img
                  variant="top"
                  src={imagecard1}
                  alt=""
                  height="350px"
                  weight="25vw"
                  padding="20px"
                />
              </Card.Link>

              <Card.Body>
                <Card.Title>Clothing</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Link as={Link} to="/category/footwear">
                <Card.Img
                  variant="top"
                  src={imagecard2}
                  alt=""
                  height="350px"
                  weight="25vw"
                  padding="20px"
                />
              </Card.Link>

              <Card.Body>
                <Card.Title>Footwear</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Link as={Link} to="/category/baby-gear">
                <Card.Img
                  variant="top"
                  src={imagecard3}
                  alt=""
                  height="350px"
                  weight="25vw"
                  padding="20px"
                />
              </Card.Link>

              <Card.Body>
                <Card.Title>Baby gear</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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

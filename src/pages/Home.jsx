import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-carousel-minimal";
import { Card, CardGroup } from "react-bootstrap";

function Home() {
  const [products, setproducts] = useState([]);

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1571211468362-33f20cb1982f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586475915213-69971ee3c21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      caption: "Scotland",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Darjeeling",
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
            width="1000px"
            height="700px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "1000px",
              maxHeight: "700px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

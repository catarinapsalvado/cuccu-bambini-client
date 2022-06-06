import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <h1>Welcome to the Cuccu, Bambini!</h1>
      <div className="homepage-links">
        <Link to="/clothing">Clothing</Link>

        <br />
        <Link to="/footwear">Footwear</Link>

        <br />
        <Link to="/gear-baby">Baby gear</Link>
      </div>
    </div>
  );
}

export default Home;

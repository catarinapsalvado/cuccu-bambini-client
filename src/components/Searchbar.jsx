import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductsList from "../pages/ProductsList";

function Searchbar(props) {
  const { searchFilter } = props;
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchFilter(e.target.value);
  };

  const getAllProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/products-list`)
      .then((response) => setSearch(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <label htmlFor="search">Search </label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default Searchbar;

/* 

<form action="/products-list" method="get">
        <input
          type="text"
          name="products-list"
          id="search-bar"
          placeholder="Ex: dresses, cloth diapers"
        />
        <button className="button-home" type="submit">
          Go
        </button>
      </form> */

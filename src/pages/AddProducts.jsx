import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//use context user 

function AddProduct(props) {
  const { addNewProduct } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1);
  const [available, setAvailable] = useState("");

  //Handler functions

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      description,
      image,
      brand,
      category,
      size,
      price,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/create-product`, body)
      .then(() => {
        setName("");
        setDescription("");
        setImage("");
        setBrand("");
        setCategory("");
        setSize("");
        setPrice("");
        setAvailable("");
      })
      .then(() => {
        navigate("/product-list");
      })
      .catch((err) => alert(err));

    /* addNewProduct(body); */
  };

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  /*   const handleImage = (e) => setImage(e.target.value);
   */ const handleBrand = (e) => setBrand(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleAvailable = (e) => setAvailable(e.target.value);
  const navigate = useNavigate();

  /* const getProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/create-product/`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setImage(response.data.image);
        setAvailable(response.data.available);
        setBrand(response.data.brand);
        setCategory(response.data.category);
        setSize(response.data.size);
        setPrice(response.data.price);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }); */

  return (
    <div>
      <h4>Add Product</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleName(e)}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handlePrice}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <label htmlFor="category">Category</label>
        <input
          type="select"
          name="category"
          value={category}
          onChange={handleCategory}
        />

        <label htmlFor="available">Available</label>
        <input
          type="select"
          name="available"
          value={available}
          onChange={handleAvailable}
        />

        <label htmlFor="brand">Brand</label>
        <input type="text" name="brand" value={brand} onChange={handleBrand} />

        <label htmlFor="size">Size</label>
        <input type="text" name="size" value={size} onChange={handleSize} />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

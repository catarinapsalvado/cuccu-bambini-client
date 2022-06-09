import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Title,
  Form,
  UserInput,
  Button,
  Container,
} from "./Styles/Form.styles.jsx";
import styled from "styled-components";

function AddProduct(props) {
  const { addNewProduct } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  //Handler functions

  const handleFileUpload = (e) => {
    setIsUploading(true);
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
      .then((response) => {
        setImage(response.data.fileUrl);
        setIsUploading(false);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUploading) return;

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
        navigate("/products-list");
      })
      .catch((err) => alert(err));
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

  return (
    <div className="AddProducts">
      <Title>Add Product</Title>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <UserInput
            type="text"
            name="name"
            value={name}
            onChange={handleName}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={description}
            onChange={handleDescription}
          ></textarea>

          <label htmlFor="price">Price</label>
          <UserInput
            type="text"
            name="price"
            value={price}
            onChange={handlePrice}
          />

          <label htmlFor="brand">Brand</label>
          <UserInput
            type="text"
            name="name"
            value={brand}
            onChange={handleBrand}
          />

          <label htmlFor="size">Size</label>
          <UserInput
            type="text"
            name="size"
            value={size}
            onChange={handleSize}
          />
          
     

          <select
            category={category}
            value={category}
            onChange={handleCategory}
          >
            <option></option>
            <option>Footwear</option>
            <option>Baby-gear</option>
            <option>Clothing</option>
          </select>

          {/* 
        <label htmlFor="available">Available</label>
        <input
          type="select"
          name="available"
          value={available}
          onChange={handleAvailable}
        /> */}

          <label htmlFor="image">Image:</label>
          <UserInput type="file" onChange={(e) => handleFileUpload(e)} />

          <Button type="submit">Create</Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddProduct;

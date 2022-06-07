import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {Form, UserInput, Container, Button, Title} from "./LoginPage/LoginPage.styles"

function EditProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");

  const { productId } = useParams();

  const navigate = useNavigate();

  const getProducts = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products-list/${productId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setImage(response.data.image);
        setAvailable(response.data.available);
        setBrand(response.data.brand);
        setCategory(response.data.category);
        setSize(response.data.size);
        setPrice(response.data.price);
      })
      .catch((error) => console.log(error));
  };

  const deleteProduct = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/products-list/${productId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
      .then((response) => {
        setImage(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleBrand = (e) => setBrand(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleAvailable = (e) => setAvailable(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, size, brand, image, category, description, available };

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/products-list/${productId}`,
        body
      )
      /* { headers: { Authorization: `Bearer ${storedToken}` } } */
      .then(() => {
        setName("");
        setDescription("");
        setImage("");
        setAvailable("");
        setBrand("");
        setCategory("");
        setSize("");
        setPrice("");
        navigate(`/products-list`);
      })
      .catch((err) => console.log(err));
  };

  return (
  
    <div className="EditProducts">  
      <Title>Edit Product</Title>
      <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <UserInput type="text" name="name" value={name} onChange={handleName} />

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
        <UserInput type="text" name="name" value={brand} onChange={handleBrand} />

        <label htmlFor="size">Size</label>
        <UserInput type="text" name="size" value={size} onChange={handleSize} />

        <label htmlFor="category">Category</label>
        <UserInput
          type="text"
          name="category"
          value={category}
          onChange={handleCategory}
        />

        <label htmlFor="available">Available</label>
        <UserInput
          type="text"
          name="available"
          value={available}
          onChange={handleAvailable}
        />
        <label htmlFor="image">Image:</label>
        <UserInput type="file" onChange={(e) => handleFileUpload(e)} />

        {/*    <label htmlFor="image">
          Image:
          <input
            type="file"
            name="recipe-cover-image"
            value={image}
            onChange={handleImage}
            class="form-control-file"
          />
        </label> */} 
     
        <Button type="submit">Edit</Button>
      
      <Button onClick={deleteProduct}>Delete</Button>
      </Form>

      </Container>
    </div>
  );
}

export default EditProduct;

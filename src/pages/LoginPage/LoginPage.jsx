import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
 import { Title, Form, UserInput, Button,  Container } from '../Styles/Form.styles' 



function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="LoginPage">
     <Container> 
      <Title>Login</Title>

      <Form onSubmit={handleSubmit}>
      
        <label htmlFor="username">Email</label>
        <UserInput
          type="text"
          name="username"
          value={email}
          onChange={handleUsername}
        />

        <label htmlFor="password">Password</label>
        <UserInput
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <Button type="submit">LOGIN</Button>
      </Form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Don't have an account?</p>
      <Link to="/signup"> Sign up</Link>
       </Container> 
    </div>
  );
}

export default LoginPage;

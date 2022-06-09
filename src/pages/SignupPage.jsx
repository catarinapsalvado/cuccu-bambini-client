import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Title, Form, UserInput, ButtonLogin, Container } from './Styles/Form.styles.jsx'

function SignupPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password, email };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="SignupPage">
    <Container>
      <Title>Sign Up</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <UserInput
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />

        <label htmlFor="password">Password</label>
        <UserInput
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label htmlFor="email">E-mail</label>
        <UserInput type="text" name="email" value={email} onChange={handleEmail} />

        <ButtonLogin type="submit">SIGN UP</ButtonLogin>
      </Form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Already have an account?</p>
      <Link to="/login"> Login</Link>
      </Container>
    </div>
  );
}

export default SignupPage;


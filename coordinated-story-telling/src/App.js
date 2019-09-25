import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import UserForm from "./components/UserForm";
import LoginForm from "./components/LoginForm";
import "./App.css";

const Nav = styled.nav`
  text-align: center;
  padding: 30px;
`;

function App() {
  return (
    <div className="App">
      <Nav>
        <Link className="navLinks" to="/">
          Home
        </Link>
        <Link className="navLinks" to="/signup">
          Signup{" "}
        </Link>
        <Link className="navLinks" to="/login">
          Login
        </Link>
      </Nav>
      <h1>Coordinated Story-telling</h1>
      <div>
        {/* <Route exact path="/" component={WelcomePage} /> */}
        <Route exact path="/signup" component={UserForm} />
        <Route path="/login" component={LoginForm} />
      </div>
    </div>
  );
}

export default App;

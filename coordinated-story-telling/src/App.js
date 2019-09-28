import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import UserForm from "./components/UserForm";
import LoginForm from "./components/LoginForm";
import Stories from "./components/Stories";
import Story from "./components/Story";
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
        <Link className="navLinks" to="/about">
          About
        </Link>
        <Link className="navLinks" to="/signup">
          Signup{" "}
        </Link>
        <Link className="navLinks" to="/login">
          Login
        </Link>
        <Link className="navLinks" to="/stories">
          Stories
        </Link>
      </Nav>
      <h1>Coordinated Story-telling</h1>
      <div>
        {/* <Route exact path="/" component={WelcomePage} /> */}
        <Route exact path="/signup" component={UserForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/stories" exact component={Stories} />
        <Route path="/stories/:id" component={Story} />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;


import React from 'react';
import './App.css';
import Products from './components/products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";


function App(props) {
  return (
    
    <div className="App container">
      <div class="topnav">
      <LinkContainer to="/">
  <a class="active" href="#home">Home</a>
  </LinkContainer>
  <LinkContainer to="/login">
  <a href="#login">Login</a>
  </LinkContainer>
  <LinkContainer to="/signup">
  <a href="#register">Register</a>
  </LinkContainer>
  <LinkContainer to="/comparator">
  <a href="#comparator">Comparator</a>
  </LinkContainer>
  <LinkContainer to="/gallery">
  <a href="#gallery">Gallery</a>
  </LinkContainer>
  <LinkContainer to="/descriptions">
  <a href="#descriptions">Descriptions</a>
  </LinkContainer>
</div>
      <Routes />
    </div>
  );
}

export default App;
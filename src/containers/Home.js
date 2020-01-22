import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "../Routes";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {
  return (
    
    <div className="Home">
      <div className="lander">
        <h1>Game comparator</h1>
        <p>A simple game comparing app</p>
      </div>
    </div>
  );
}
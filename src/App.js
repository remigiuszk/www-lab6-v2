import fire from './config/Fire';
import React, {Component} from 'react';
import './App.css';
import LoginRegister from './components/LoginRegister'
import Home from './containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component{

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  logout=()=>{
    fire.auth().signOut();
  }

authListener(){
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({user});
    }else{
      this.setState({user:null});
    }
  });
}
render(){
  return(
    <div>
      {this.state.user ?(
         <div className="App container">
         <div class="topnav">
         <LinkContainer to="/">
     <a class="active" href="#home">Home</a>
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
     <button className="logoutButton" onClick={this.logout}>Logout</button>
   </div>
         <Routes />
       </div>) : (<LoginRegister />)}
    </div>
  );
}
}

export default App;
import React, { Component } from 'react'

import {Navbar, Nav,} from 'react-bootstrap';
import {Link} from "react-router-dom";


 class Header extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"><i style={{color:"#b7b7a4", margin: "0 50px", fontSize: "30px"}} className="fas fa-headphones-alt"></i></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link style={{color:"#ddbea9", margin: "0 30px"}} to ="/">Home</Link></Nav.Link>
        <Nav.Link><Link style={{color:"#ddbea9" , margin: "0 30px"}} to ="/">Artist</Link></Nav.Link>
        <Nav.Link><Link style={{color:"#ddbea9", margin: "0 30px"}} to ="/">Favorite</Link></Nav.Link>
        
      </Nav>
      
      <Nav.Link><i style={{color:"#b7b7a4", margin: "0 50px", fontSize: "24px"}} className="fab fa-napster"></i></Nav.Link>
      <Nav.Link><i style={{color:"#b7b7a4", margin: "0 50px", fontSize: "24px"}} className="fas fa-volume-up"></i></Nav.Link>

      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text style={{color:"#b7b7a4"}}>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Navbar>
    </div>
    )
  }
}



export default Header;
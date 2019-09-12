import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";

function Header() {

  return (
    <Navbar fixed="top" id="navbar" expand="lg">
      <Navbar.Brand href="/"><img id="logo" src="../../images/nclogo.png" alt="Nicholson Capital Management"></img></Navbar.Brand>
      <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link id="navlink" href="/"><span id="navlink">Home</span></Nav.Link>
          <Nav.Link id="navlink" href="/firm"><span id="navlink">Our Firm</span></Nav.Link>
          <NavDropdown title="Services" id="navlink">
            <NavDropdown.Item href="/wealthman">Wealth Management</NavDropdown.Item>
            <NavDropdown.Item href="/instretire">Institutional Retirement</NavDropdown.Item>
            <NavDropdown.Item href="/legconsult">Legacy & Consulting</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link id="navlink" href="/contact"><span id="navlink">Contact</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default Header;
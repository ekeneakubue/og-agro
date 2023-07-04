import './navbar.css'
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className='container-fluid mynav fixed-top bg-light'>
        <Navbar
        expanded={expand}
        expand="md"
        >
        <Container>
            <Navbar.Brand href="/" className="mylogo">
                <div><img src="images/footer_Logo.jpg" alt="logo" className="navbarLogo" /></div>
                <h4>OG Agro Exports</h4>
            </Navbar.Brand>

            <Navbar.Toggle
                className="setup text-success"
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                updateExpanded(expand ? false : "expanded");
                }}
            >
            <i class="bi bi-list"></i>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" defaultActiveKey="#home">

                <Nav.Item className="setup">
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                    Home
                </Nav.Link>
                </Nav.Item>

                <Nav.Item className="setup">
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                    About
                </Nav.Link>
                </Nav.Item>

                <Nav.Item className="setup">
                <Nav.Link as={Link} to="/products" onClick={() => updateExpanded(false)}>
                    Products
                </Nav.Link>
                </Nav.Item>

                <Nav.Item className="setup">
                <Nav.Link as={Link} to="/contacts" onClick={() => updateExpanded(false)}>
                    Contacts
                </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
}

export default NavBar;

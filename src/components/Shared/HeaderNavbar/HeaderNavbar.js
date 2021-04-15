import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="text-brand" as={Link} to="/">
          The Trusted Eye
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav.Link className="text-brand " as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-brand " as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-brand" as={Link} to="/ads">
            Contact Us
          </Nav.Link>
          <Button className="text-white  btn-brand" variant="outline-none">
            Log In
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;

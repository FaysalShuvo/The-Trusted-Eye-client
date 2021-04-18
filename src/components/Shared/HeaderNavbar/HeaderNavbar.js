import React, { useContext, useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const HeaderNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://hidden-headland-12235.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data);
      });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="text-brand" as={Link} to="/">
          The Trusted Eye
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>

          {isAdmin && (
            <Nav.Link
              className="text-brand "
              as={Link}
              to="/dashboard/order-list"
            >
              Dashboard
            </Nav.Link>
          )}

          <Nav.Link
            className="text-brand "
            as={Link}
            to="/dashboard/bookings-list"
          >
            Bookings
          </Nav.Link>

          <div>
            {loggedInUser.name === undefined ? (
              <Button
                as={Link}
                to="/login"
                className="text-white  btn-brand"
                variant="outline-none"
              >
                Log In
              </Button>
            ) : (
              <Button variant="info">{loggedInUser.name}</Button>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;

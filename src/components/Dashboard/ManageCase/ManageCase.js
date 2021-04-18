/* eslint-disable no-restricted-globals */
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const ManageCase = ({ allCase }) => {
  const { _id, name, title, price, email } = allCase || {};

  const deleteCase = (event, id) => {
    console.log("clicked");
    const url = `https://hidden-headland-12235.herokuapp.com/delete/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("delete");
      });
    window.location.reload(false);
  };

  return (
    <>
      <Navbar className="mt-2" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="">{name}</Nav.Link>
          <Nav.Link href="">{title}</Nav.Link>
          <Nav.Link href="">{email}$</Nav.Link>
          <Nav.Link href="">{price}$</Nav.Link>
        </Nav>
        <div className="p-3">
          <Button onClick={() => deleteCase(event, _id)} variant="danger">
            Delete
          </Button>
        </div>
        <div className="p-3">
          <Button variant="danger">Loading</Button>{" "}
        </div>
        <div className="p-3">
          <Button variant="danger">on going</Button>
        </div>
        <div className="p-3">
          <Button variant="danger">done</Button>
        </div>
      </Navbar>
    </>
  );
};

export default ManageCase;

import React from "react";
import { Card } from "react-bootstrap";
const Detective = ({ detective }) => {
  const { name, img, phone } = detective;
  return (
    <>
      <Card
        className="text-center "
        style={{ width: "15rem", height: "20rem" }}
      >
        <Card.Img variant="top" src={img} alt="detective" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{phone}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Detective;

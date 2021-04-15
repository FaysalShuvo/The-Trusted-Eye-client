import React from "react";
import { Card } from "react-bootstrap";

const Testimonial = ({ testimonial }) => {
  const { quote, name, from } = testimonial;
  return (
    <>
      <Card
        className="text-center "
        
        style={{ width: "15rem", height: "20rem" }}
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text>{from}</Card.Text>
          <Card.Text>{quote}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Testimonial;

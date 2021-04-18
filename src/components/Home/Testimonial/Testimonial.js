import React from "react";
import { Card } from "react-bootstrap";

const Testimonial = ({ testimonial }) => {
  const { email, review } = testimonial;
  return (
    <>
      <Card className="text-center mt-4 shadow" style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{review}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Testimonial;

import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceDetails = ({ service }) => {
  const { name, img, price } = service;
  return (
    <>
      <div className="col-md-3 text-center mt-5">
        <Card className="me-2" style={{ width: "15rem", height: "30rem" }}>
          <Card.Img variant="top" src={img} alt="service" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="row">
              <div className="col-md-6 mt-2">{price}$</div>
              <div className="col-md-6">
                <Button className="btn btn-brand">Hire Us</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ServiceDetails;

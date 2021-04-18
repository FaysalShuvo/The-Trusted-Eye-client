import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

const ServiceDetails = ({ service }) => {
  const { _id, title, description, imageURL, price } = service;
  const history = useHistory();
  const showOrder = (id) => {
    const url = `/dashboard/bookings/${id}`;
    history.push(url);
  };

  return (
    <>
      <div className="col-md-3 text-center mt-5">
        <Card className="me-2" style={{ width: "15rem", height: "30rem" }}>
          <Card.Img variant="top" src={imageURL} alt="service" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="row">
              <div className="col-md-6 mt-2">{price}$</div>
              <div className="col-md-6">
                <motion.div
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    background: "white",
                    scale: 1.15,

                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  <Button
                    onClick={() => showOrder(_id)}
                    className="btn btn-brand"
                  >
                    Hire Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ServiceDetails;

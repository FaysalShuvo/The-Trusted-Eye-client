import React from "react";
import { Card } from "react-bootstrap";
const NewsCard = ({ news }) => {
  const { title, author, description, authorImg, date } = news;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={authorImg} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="row">
            <div className="col-md-6">
              <Card.Text>
                
                <span className="mr-2">Author:</span> {author}
              </Card.Text>
            </div>
            <div className="col-md-6">
              <Card.Text>{date}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsCard;

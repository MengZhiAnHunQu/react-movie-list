import React from "react";
import { Button, Card, Col } from "react-bootstrap";

export const CustomCard = ({ movie, fun, btnDelete }) => {
  return (
    <Col sm="12" md="6" lg="4" xl="3">
      <Card>
        <Card.Img variant="top" src={movie?.Poster} height="300px" />
        <Card.Body>
          <Card.Title>{movie?.Title}</Card.Title>
          <Card.Title>{movie?.imdbRating}</Card.Title>

          <div className="d-flex justify-content-between">
            <Button variant="info" onClick={() => fun("happy", movie)}>
              Happy list
            </Button>
            <Button variant="primary" onClick={() => fun("sad", movie)}>
              Sad list
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

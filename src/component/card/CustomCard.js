import React from "react";
import { Button, Card, Col } from "react-bootstrap";

export const CustomCard = ({ movie, fun, btnDelete }) => {
  return (
    <Col sm="12" md="6" lg="4" xl="3" className="mt-5">
      <Card>
        <Card.Img variant="top" src={movie?.Poster} height="300px" />
        <Card.Body>
          <Card.Title>Movie Name: {movie?.Title}</Card.Title>
          <Card.Title>Rating: {movie?.imdbRating}</Card.Title>

          <div className="d-flex justify-content-between mt-3">
            <Button variant="primary" onClick={() => fun("happy", movie)}>
              Happy list
            </Button>
            <Button variant="danger" onClick={() => fun("sad", movie)}>
              Sad list
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

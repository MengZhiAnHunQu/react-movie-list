import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export const ListItem = ({ movie, fun, btnDelete }) => {
  return (
    <div>
      <Row>
        <Col md="4">
          <img src={movie?.Poster} className="img-fluidgi" alt="" />
        </Col>

        <Col md="8">
          <h3>Movie Name: {movie?.Title}</h3>
          <h3>Rating: {movie?.imdbRating}</h3>

          {btnDelete}
          <div className="d-grid gap-2">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => fun(movie.imdbID)}
            >
              Delete Movie
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

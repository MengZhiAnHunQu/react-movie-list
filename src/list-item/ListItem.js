import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export const ListItem = ({ movie, fun, btnDelete }) => {
  return (
    <div>
      <Row>
        <Col md="4">
          <img src={movie?.Poster} className="img-fluid" alt="" />
        </Col>

        <Col md="8">
          <h3>{movie?.Title}</h3>
          <h3>Rating:{movie?.imdbRating}</h3>
          {btnDelete ? (
            <div className="d-grid gap-2">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => fun(movie.imdbID)}
              >
                Delete Movie
              </Button>
            </div>
          ) : (
            <div className="d-flex justify-content-between">
              <Button variant="info" onClick={() => fun("happy", movie)}>
                Happy list
              </Button>
              <Button variant="primary" onClick={() => fun("sad", movie)}>
                Sad list
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

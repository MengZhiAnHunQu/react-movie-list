import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList, handleOnDelete, hanleOnSelect }) => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button
              variant="warning"
              onClick={() => {
                hanleOnSelect();
              }}
            >
              ALL
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                hanleOnSelect("happy");
              }}
            >
              HAPPY
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                hanleOnSelect("sad");
              }}
            >
              SAD
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="danger">GRID</Button>
            <Button variant="success">LIST</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          {movieList.map((movie, i) => (
            <CustomCard
              movie={movie}
              btnDelete={true}
              fun={handleOnDelete}
              key={i}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};

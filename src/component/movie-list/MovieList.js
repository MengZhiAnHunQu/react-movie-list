import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = () => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="warning">ALL</Button>
            <Button variant="primary">HAPPY</Button>
            <Button variant="danger">SAD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="danger">GRID</Button>
            <Button variant="success">LIST</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </Col>
    </Row>
  );
};

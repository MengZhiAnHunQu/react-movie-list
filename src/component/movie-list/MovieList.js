import React, { useState } from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { ListItem } from "../../list-item/ListItem";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList, handleOnDelete, setCategory }) => {
  const [display, setDisplay] = useState("grid");
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between mb-5">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button
              variant="warning"
              onClick={() => {
                setCategory("");
              }}
            >
              ALL
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                setCategory("happy");
              }}
            >
              HAPPY
            </Button>

            <Button
              variant="danger"
              onClick={() => {
                setCategory("sad");
              }}
            >
              SAD
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="danger" onClick={() => setDisplay("grid")}>
              GRID
            </Button>
            <Button variant="success" onClick={() => setDisplay("list")}>
              LIST
            </Button>
          </ButtonGroup>
        </div>
        
        <div className="row">
          {movieList.map((movie, i) =>
            display === "list" ? (
              <ListItem
                key={i}
                movie={movie}
                btnDelete={true}
                fun={handleOnDelete}
              />
            ) : (
              <CustomCard
                key={i}
                movie={movie}
                btnDelete={true}
                fun={handleOnDelete}
              />
            )
          )}
        </div>
      </Col>
    </Row>
  );
};

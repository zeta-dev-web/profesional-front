import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/CardApp.css";

const CardApp = ({ imagen, titulo, contenido }) => {
  return (
    <div className="mt-2 ms-2 me-2 d-flex justify-content-center">
      <Card
        className="d-flex justify-content-between align-items-center card-edit"
        style={{ width: "30rem" }}
      >
        <Card.Img variant="top" src={imagen} className="logo-imagen" />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{contenido}</Card.Text>
          <Button className="mt-1" variant="primary">
            BUSCAR UN PROFESIONAL
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardApp;

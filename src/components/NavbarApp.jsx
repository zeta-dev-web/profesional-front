import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import RegisterApp from "../components/RegisterApp";

const NavbarApp = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleRegisterModalOpen = () => {
    setShowRegisterModal(true);
  };

  const handleRegisterModalClose = () => {
    setShowRegisterModal(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary pe-3">
        <Container fluid className="p-0 m-0 ms-2">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="../src/assets/logo.png"
              width="45"
              height="45"
              className="d-inline-block"
            />{" "}
            Mundo Profesional
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Dropdown className="d-flex align-items-center">
                <Dropdown.Toggle variant="link" className="nav-link">
                  Categorías de Profesionales
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="categoria1">Categoría 1</Dropdown.Item>
                  <Dropdown.Item href="categoria2">Categoría 2</Dropdown.Item>
                  <Dropdown.Item href="categoria3">Categoría 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link className="text-start" href="login">
                <Button variant="success">Iniciar Sesion</Button>
              </Nav.Link>
              <Nav.Link
                className="text-start"
                onClick={handleRegisterModalOpen}
              >
                <Button variant="success">Registrarte</Button>
              </Nav.Link>
            </Nav>
            <Form className="m-0 pe-4 d-flex text-center ml-auto ms-1 me-4">
              <Form.Control
                type="search"
                placeholder="Buscar Profesional"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RegisterApp
        show={showRegisterModal}
        handleClose={handleRegisterModalClose}
      />
    </>
  );
};

export default NavbarApp;

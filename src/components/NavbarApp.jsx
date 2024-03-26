import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NavbarApp = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid className="p-0 m-0 ms-2 me-2">
      <Navbar.Brand href="/">
        <img
          alt="logo"
          src="https://i.ibb.co/NmXYY0F/logo.png"
          width="45"
          height="45"
          className="d-inline-block"
        />{" "}
        Mundo Profesional
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-center">
          <Nav.Link href="searchprof" className="d-flex align-items-center">
            Buscar un Profesional
          </Nav.Link>
          <Nav.Link href="gastronomia" className="d-flex align-items-center">
            Ofrecer tus servicios
          </Nav.Link>
          <Nav.Link className="" href="login">
            <Button variant="success">Iniciar Sesion</Button>
          </Nav.Link>
        </Nav>
        <Form className="m-0 p-0 d-flex text-center ml-auto me-4">
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
);

export default NavbarApp;

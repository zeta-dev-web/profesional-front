import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/RegisterApp.css";

const RegisterModal = ({ show, handleClose }) => {
  const [registerOption, setRegisterOption] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    profession: "",
    registration: "",
    phone: "",
    email: "",
    address: "",
    photo: "",
    password: "",
    confirmPassword: "",
  });

  const handleOptionChange = (option) => {
    setRegisterOption(option);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario según la opción seleccionada y los datos ingresados
    console.log(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal d-flex">
        <Form onSubmit={handleSubmit} className="m-0">
          {/* Selección de opción */}
          <Form.Group controlId="registerOption" className="">
            <Form.Label>Seleccione una opción:</Form.Label>
            <Form.Check
              type="radio"
              id="contratar"
              label="Contratar un servicio"
              checked={registerOption === "contratar"}
              onChange={() => handleOptionChange("contratar")}
            />
            <Form.Check
              type="radio"
              id="prestar"
              label="Prestar un servicio"
              checked={registerOption === "prestar"}
              onChange={() => handleOptionChange("prestar")}
            />
          </Form.Group>

          {/* Campos de registro según la opción seleccionada */}
          {registerOption === "contratar" && (
            <>
              <Form.Group controlId="fullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Teléfono de Contacto</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </>
          )}

          {/* Campos adicionales para prestar un servicio */}
          {registerOption === "prestar" && (
            <>
              <Form.Group controlId="fullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="profession">
                <Form.Label>Profesión</Form.Label>
                <Form.Control
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="registration">
                <Form.Label>Matrícula (opcional)</Form.Label>
                <Form.Control
                  type="text"
                  name="registration"
                  value={formData.registration}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Teléfono de Contacto</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Domicilio</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="photo">
                <Form.Label>Foto</Form.Label>
                <Form.Control
                  type="file"
                  name="photo"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </>
          )}

          <Button variant="outline-light" type="submit">
            Registrarse
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;

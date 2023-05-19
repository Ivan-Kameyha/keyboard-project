import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { TextToSpeechButton } from "../textToSpeechButton/TextToSpeechButton";

export const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        {/* Enlace del Navbar que redirige al Home */}
        <Navbar.Brand as={Link} to="/">
          <TextToSpeechButton text={"Bienvenida"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Enlace de Login */}
            <Nav.Link as={Link} to="/login" className="ms-5">
              <TextToSpeechButton text={"Login"} />
            </Nav.Link>
            {/* Enlace de Práctica */}
            <Nav.Link as={Link} to="/keyboard" className="ms-5">
              <TextToSpeechButton text={"Práctica"} />
            </Nav.Link>
            {/* Enlace de Pruebas de errores */}
            <Nav.Link as={Link} to="/pruebas" className="ms-5">
              <TextToSpeechButton text={"Prueba de errores"} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
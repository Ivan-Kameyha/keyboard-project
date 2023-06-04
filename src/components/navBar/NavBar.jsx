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
              <TextToSpeechButton text={"Iniciar Sesión"} />
            </Nav.Link>
            {/* Enlace de Práctica */}
            <Nav.Link as={Link} to="/keyboard" className="ms-5">
              <TextToSpeechButton text={"Práctica de escritura"} />
            </Nav.Link>
            {/* Enlace de Manual de usuario */}
            <Nav.Link as={Link} to="/usermanual" className="ms-5">
              <TextToSpeechButton text={"Manual de usuario"} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SessionCard.css";
import { Link } from "react-router-dom";
import { TextToSpeechButton } from "../textToSpeechButton/TextToSpeechButton";
import { useEffect, useState } from "react";
import Sonido from '../shortcutKeys/Sonido'

const SessionCard = ({ title, button, handleSubmit, handleChange, error }) => {
  useEffect(() => {
    const linkRegister = document.querySelector(`#link-register`);
    const linkLogin = document.querySelector(`#link-login`);

    // ocultar o mostrar boton volver y mensaje de registro
    if (title === "Registro") {
      linkRegister.classList.add("active");
      linkLogin.classList.remove("active");
    }
  });

  // funcion para reproducir voz al input enfocado
  const handleFocus = (inputName) => {
    Sonido.speak(inputName)
  };

  return (
    <div className="wrapper bg-light">
      {error && <p className="msg-error">{error}</p>}
      <div className="card">
        <h2 className="text-dark">{title}</h2>
        <Form onSubmit={handleSubmit}>
          {/* Campo de entrada para el email */}
          <Form.Group className="mt-5 mb-5" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              onFocus={() => handleFocus("Ingrese su correo electronico")}
              autoFocus
            />
          </Form.Group>
          {/* Campo de entrada para la contraseña */}
          <Form.Group className="mt-5 mb-5" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              onFocus={() => handleFocus("Ingrese su contraseña")}
            />
          </Form.Group>
          {/* Botón de envío del formulario */}
          <Button variant="primary" type="submit" className="submitBtn" onFocus={() => handleFocus(button)}>
            {/* Componente TextToSpeechButton con el texto del botón */}
            <TextToSpeechButton text={button} />
          </Button>
        </Form>

        <p className="link-register" id="link-register">
          ¿No tienes una cuenta? <Link to="/register" onFocus={() => handleFocus("Registrar cuenta nueva")}>Registrarme</Link>
        </p>

        <Link to="/login" onFocus={() => handleFocus("Volver atras")}>
          <Button
            variant="primary"
            className="btn-volver link-login active my-3"
            id="link-login"
          >
            {/* Componente TextToSpeechButton con el texto del botón */}
            <TextToSpeechButton text={"Volver"} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SessionCard;

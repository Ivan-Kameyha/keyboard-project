import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./Keyboard.css";

export const Keyboard = ({ onKeyPress }) => {
  const keys = [
    // Lista de teclas del teclado
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M",
    " ", "Ctrl", "Alt", "Shift", "Alt Gr", "Tab", "Caps Lock", "Enter", ",", ".", "<", "|"
  ];

  const speak = (text) => {
    // Función para generar el sonido de la tecla
    const utterance = new SpeechSynthesisUtterance("tecla " + text);
    utterance.lang = "es-MX";
    utterance.pitch = 0.8;
    utterance.rate = 0.7;
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Manejador de evento al presionar una tecla
      onKeyPress(event.key); // Invoca la función onKeyPress pasando la tecla presionada como argumento
      speak(event.key); // Invoca la función speak para generar el sonido de la tecla presionada
      if (event.keyCode === 27) {
        window.location.href = "/"; // Redirecciona a la página raíz si se presiona la tecla Esc (keyCode 27)
      }

      // Cambiar color
      const key = event.key.toUpperCase();
      const button = document.querySelector(`#${key}`);
      if (button) {
        button.classList.add("active");
      }
    };

    const handleKeyUp = (event) => {
      // Quitar color
      const key = event.key.toUpperCase();
      const button = document.querySelector(`#${key}`);
      if (button) {
        button.classList.remove("active");
      }
    }

    // Agrega el evento "keydown" al documento y llama a handleKeyDown al presionar una tecla
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Remueve el evento "keydown" del documento al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [onKeyPress]);

  return (
    <Container fluid className="d-flex flex-wrap justify-content-center align-content-center keyboard-container">
      {/* Renderiza los botones correspondientes a las teclas */}
      {keys.map((key) => (
        <Button
          key={key}
          className="keyboard-button"
          id={key}
          onKeyDown={(event) => handleKeyDown(event, key)}
        >
          {key}
        </Button>
      ))}
    </Container>
  );
};

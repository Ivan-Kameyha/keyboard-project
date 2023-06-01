import React, { useEffect } from "react";
import "./Main.css";

export const Main = () => {
  let cont = 0;

  const speak = (text) => {
    // Función para generar el sonido de la tecla
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-MX";
    utterance.pitch = 0.8;
    utterance.rate = 0.7;
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Función para manejar el evento de presionar teclas
    const handleKeyDown = (event) => {
      if (cont === 0) {
        speak(
          "Bienvenidos a la plataforma de aprendizaje inclusivo, presione enter para continuar"
        );
        cont = 1;
      }

      // Redireccionar a la página de "teclado digital" con Enter
      if (event.keyCode === 13) {
        window.location.href = "http://localhost:5173/keyboard";
      }

      // Redireccionar a la página deseada al presionar Shift + 1 o Shift + 2
      if (event.shiftKey && event.keyCode === 49) {
        window.location.href = "http://localhost:5173/login";
      }
      if (event.shiftKey && event.keyCode === 50) {
        window.location.href = "http://localhost:5173/register";
      }
    };

    // Añadir el evento "keydown" al documento y asignarle la función handleKeyDown como manejador de eventos
    document.addEventListener("keydown", handleKeyDown);

    // Remover el evento "keydown" al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Se pasa un arreglo vacío como dependencia para que el efecto se ejecute solo una vez al montar el componente

  return (
    <>
      <div className="banner d-flex justify-content-center align-items-center">
        <h1 className="text-primary">
          BIENVENIDOS A UDYAT
          <span>La plataforma de aprendizaje inclusivo</span>
        </h1>
        <h4 className="text-muted">
          Shift + 1 : Iniciar sesión <br /> Shift + 2 : Registrar nueva cuenta
        </h4>
      </div>
      <div id="footer" className="text-muted">
        Universidad Tecnológica Nacional - Facultad Regional Tucumán
      </div>
    </>
  );
};

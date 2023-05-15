import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SessionCard from "../sessionCard/SessionCard";

export const Login = () => {
  useEffect(() => {
    // Función para manejar el evento de presionar teclas
    const handleKeyDown = (event) => {
      // Redireccionar a la página raíz con ESC
      if (event.keyCode === 27) {
        window.location.href = "/";
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
    // Componente SessionCard que representa una tarjeta de sesión de inicio de sesión
    <SessionCard title={"Login"} button={"Iniciar Sesión"} />
  );
};

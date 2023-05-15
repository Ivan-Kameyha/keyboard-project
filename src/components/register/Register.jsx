import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SessionCard from "../sessionCard/SessionCard";

export const Register = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Redireccionar a la página raíz con ESC
      if (event.keyCode === 27) {
        window.location.href = "/";
      }
    };

    // Agregar el event listener para el evento keydown al documento
    document.addEventListener("keydown", handleKeyDown);

    // Remover el event listener al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    // Renderizar el componente SessionCard con título "Registro" y botón "Registrarme"
    <SessionCard title={"Registro"} button={"Registrarme"} />
  );
};

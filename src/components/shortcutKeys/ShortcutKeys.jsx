import React, { useEffect } from "react";
import Sonido from './Sonido';

export const ShortcutKeys = () => {
  useEffect(() => {
    // Función para manejar el evento de presionar teclas
    const handleKeyDown = (event) => {
      // Redireccionar a la página raíz con ESC
      if (event.keyCode === 27) {
        Sonido.speak("Usted regreso a inicio");
        window.location.href = "/";
      }
      // Redireccionar a la página de logeo
      if (event.shiftKey && event.keyCode === 49) {
        Sonido.speak("Se dirigio a iniciar sesion");
        window.location.href = "http://localhost:5173/login";
      }
      // Redireccionar a la página de registro
      if (event.shiftKey && event.keyCode === 50) {
        Sonido.speak("Se dirigio a registrar cuenta nueva");
        window.location.href = "http://localhost:5173/register";
      }
      // Redireccionar a la página de práctica
      if (event.shiftKey && event.keyCode === 51) {
        Sonido.speak("Se dirigio a la seccion de practica");
        window.location.href = "http://localhost:5173/keyboard";
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Remover el evento "keydown" al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Se pasa un arreglo vacío como dependencia para que el efecto se ejecute solo una vez al montar el componente
};

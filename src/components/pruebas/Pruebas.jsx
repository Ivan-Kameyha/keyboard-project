import { useState, useEffect } from "react";
import { Voces } from "./Voces";

export const Pruebas = () => {
  const [keySound, setKeySound] = useState(""); // Estado para almacenar el sonido de la tecla
  
  const handleKeyDown = (event) => {
    const key = event.code;
    // Asignar el sonido correspondiente a la tecla presionada
    const sound = assignSoundForKey(key);
    setKeySound(sound);
  };

  const handleKeyUp = () => {
    setKeySound(""); // Limpiar el sonido cuando se suelta la tecla
  };

  // Función para asignar el sonido correspondiente a la tecla presionada
  const assignSoundForKey = (key) => {
    return key;
  };

  useEffect(() => {
    // Agregar event listeners para los eventos de teclado
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div>
      <button>Tecla</button>
      {keySound && <Voces text={keySound} />} {/* Renderizar el componente Voice si hay un sonido de tecla */}
    </div>
  );
};

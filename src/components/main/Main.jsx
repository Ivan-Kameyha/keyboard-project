import React, { useState } from "react";
import { Keys } from "./Keys";
import { Keyboard } from "./Keyboard";
import "./Main.css";

export const Main = () => {
  // Almacena la ultima tecla presionada
  const [keyPressed, setKeyPressed] = useState("");
  const handleKeyPress = (key) => {
    setKeyPressed(key);
  };

  return (
    <>
      <div className="banner">
        <h1>
          Bienvenidos al Keyboard Project{" "}
          <span>(Presione "enter" para comenzar)</span>
        </h1>
        <h4>
          Shift + 1 : Iniciar sesión <br /> Shift + 2 : Registrar nueva cuenta
        </h4>
      </div>

      {/* Se pasa una prop llamada onKeyPress con la funcion handleKeyPress */}
      <Keys onKeyPress={handleKeyPress} />
      
      {/* Se dibuja el teclado en pantalla */}
      <Keyboard keyPressed={keyPressed} />
      <hr />

      <div id="footer">
        Universidad Tecnologica Nacional - Facultad Regional Tucuman
      </div>
    </>
  );
};

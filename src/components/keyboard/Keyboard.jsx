import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./Keyboard.css";
import {ShortcutKeys} from '../shortcutKeys/ShortcutKeys'
import Sonido from '../shortcutKeys/Sonido'

export const Keyboard = () => {
  const keys = [
    // Lista de teclas del teclado
    "Esc",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "?",
    "¿",
    "Backspace",
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "\u00B4",
    "+",
    "Enter",
    "BlockMayus",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Ñ",
    "{",
    "}",
    "Shift-Izq",
    "<>",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "-",
    "Shift-Der",
    "Control",
    "Wind",
    "Alt",
    "Space",
    "Alt",
    "Wind",
    "Control",
  ];

  const [pressedKey, setPressedKey] = useState(""); // Estado para almacenar la tecla presionada

  const specialCases = {
    Escape: "Esc",
    ControlLeft: "Control",
    Tab: "Tab",
    CapsLock: "BlockMayus",
    ShiftLeft: "Shift-Izq",
    ShiftRight: "Shift-Der",
    IntlBackslash: "<>",
    AltLeft: "Alt",
    MetaLeft: "Wind",
  };

  // Función para manejar el evento de tecla presionada
  const handleKeyDown = (event) => {
    Sonido.speak("Tecla " + event.key);

    const key = event.key.toUpperCase();
    const specialKeys = event.code;

    console.log(specialKeys);

    if (keys.includes(key)) {
      setPressedKey(key);
    } else if (
      specialKeys === "Escape" ||
      specialKeys === "Backspace" ||
      specialKeys === "Minus" ||
      specialKeys === "Tab" ||
      specialKeys === "BracketLeft" ||
      specialKeys === "Enter" ||
      specialKeys === "CapsLock" ||
      specialKeys === "IntlBackslash" ||
      specialKeys === "ShiftLeft" ||
      specialKeys === "ShiftRight" ||
      key === "CONTROL" ||
      key === "META" ||
      key === "ALT" ||
      specialKeys === "Space"
    ) {
      setPressedKey(specialKeys);
    }

    // Colorear teclas

    const buttonId = specialCases[specialKeys];
    if (buttonId) {
      const button = document.querySelector(`#${buttonId}`);
      if (button) {
        button.classList.add("pressed");
      }
    }
  };

  // Función para manejar el evento de tecla liberada
  const handleKeyUp = (event) => {
    setPressedKey("");

    // Descolorear
    const specialKeys = event.code;

    const buttonId = specialCases[specialKeys];
    if (buttonId) {
      const button = document.querySelector(`#${buttonId}`);
      if (button) {
        button.classList.remove("pressed");
      }
    }
  };

  // Agregar los listeners de eventos al montar el componente
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Eliminar los listeners de eventos al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <Container
      fluid
      className="d-flex flex-wrap align-content-center keyboard-container"
    >
      <div className="col-md-7">
        <div>
          {/* Renderiza los botones correspondientes a las teclas */}
          {keys.map((key) => (
            <Button
              className={`keyboard-button ${
                pressedKey === key ? "pressed" : ""
              }`} // Aplica la clase "pressed" si la tecla está presionada
              id={key}
              key={key}
            >
              {key}
            </Button>
          ))}
        </div>
        <div></div>
      </div>
      <div className="col-md-5 text-center">
        <h1>Tecla Presionada:</h1>
        <Button className={pressedKey ? "btn-pressed" : "btn-normal"}>
          {pressedKey}
        </Button>
      </div>
      <ShortcutKeys />
    </Container>
  );
};

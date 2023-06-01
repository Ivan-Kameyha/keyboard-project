import React, { useEffect } from "react";
import "./pruebas.css";
import tecla1 from "./sounds/tecla1.mp3";
import tecla2 from "./sounds/tecla2.mp3";
import tecla3 from "./sounds/tecla3.mp3";
import tecla4 from "./sounds/tecla4.mp3"; // Importar archivo de sonido correspondiente a la tecla A
// Importar los demás archivos de sonido para las teclas que necesites

export const Pruebas = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.code.toLowerCase();

      console.log(key);
      let audio;

      switch (key) {
        case "digit1":
          audio = new Audio(tecla1);
          break;
        case "digit2":
          audio = new Audio(tecla2);
          break;
        case "digit3":
          audio = new Audio(tecla3);
          break;
        case "digit4":
          audio = new Audio(tecla4);
          break;
      }

      if (audio) {
        audio.play();
      }

      // Colorear tecla
      const keyColor = event.code;
      const button = document.querySelector(`#${keyColor}`);
      if (button) {
        button.classList.add("active");
      }
    };

    const handleKeyUp = (event) => {
      // Quitar color
      const keyColor = event.code;
      const button = document.querySelector(`#${keyColor}`);
      if (button) {
        button.classList.remove("active");
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.addEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      className="banner d-flex justify-content-center align-items-center"
      style={{ color: "black" }}
    >
      <div className="content-keyboard">
        <h3>Reconocimiento de Teclas (1, 2, 3, 4 emiten sonido)</h3>
        <div className="keyboard1">
          <div className="fila uno">
            <button className="btn-keys" id="Escape">Esc</button>
            <button className="btn-keys" id="Digit1">1</button>
            <button className="btn-keys" id="Digit2">2</button>
            <button className="btn-keys" id="Digit3">3</button>
            <button className="btn-keys" id="Digit4">4</button>
            <button className="btn-keys" id="Digit5">5</button>
            <button className="btn-keys" id="Digit6">6</button>
            <button className="btn-keys" id="Digit7">7</button>
            <button className="btn-keys" id="Digit8">8</button>
            <button className="btn-keys" id="Digit9">9</button>
            <button className="btn-keys" id="Digit0">0</button>
            <button className="btn-keys" id="Minus">?</button>
            <button className="btn-keys" id="Equal">¿</button>
            <button className="btn-keys backspace" id="Backspace">
              Backspace
            </button>
          </div>
          <div className="fila dos">
            <button className="btn-keys tab" id="Tab">
              Tab
            </button>
            <button className="btn-keys" id="KeyQ">Q</button>
            <button className="btn-keys" id="KeyW">W</button>
            <button className="btn-keys" id="KeyE">E</button>
            <button className="btn-keys" id="KeyR">R</button>
            <button className="btn-keys" id="KeyT">T</button>
            <button className="btn-keys" id="KeyY">Y</button>
            <button className="btn-keys" id="KeyU">U</button>
            <button className="btn-keys" id="KeyI">I</button>
            <button className="btn-keys" id="KeyO">O</button>
            <button className="btn-keys" id="KeyP">P</button>
            <button className="btn-keys" id="BracketLeft">´</button>
            <button className="btn-keys otherKey" id="BracketRight">
              +
            </button>
            <button className="btn-keys enter" id="Enter">
              Enter
            </button>
          </div>
          <div className="fila tres">
            <button className="btn-keys bloqMayus" id="CapsLock">
              Bloq Mayus
            </button>
            <button className="btn-keys" id="KeyA">A</button>
            <button className="btn-keys" id="KeyS">S</button>
            <button className="btn-keys" id="KeyD">D</button>
            <button className="btn-keys" id="KeyF">F</button>
            <button className="btn-keys" id="KeyG">G</button>
            <button className="btn-keys" id="KeyH">H</button>
            <button className="btn-keys" id="KeyJ">J</button>
            <button className="btn-keys" id="KeyK">K</button>
            <button className="btn-keys" id="KeyL">L</button>
            <button className="btn-keys" id="Semicolon">Ñ</button>
            <button className="btn-keys" id="Quote">&#123;</button>
            <button className="btn-keys" id="Backslash">&#125;</button>
          </div>
          <div className="fila cuatro">
            <button className="btn-keys shiftLeft" id="ShiftLeft">
              Shift
            </button>
            <button className="btn-keys" id="IntlBackslash">&lt;&gt;</button>
            <button className="btn-keys" id="KeyZ">Z</button>
            <button className="btn-keys" id="KeyX">X</button>
            <button className="btn-keys" id="KeyC">C</button>
            <button className="btn-keys" id="KeyV">V</button>
            <button className="btn-keys" id="KeyB">B</button>
            <button className="btn-keys" id="KeyN">N</button>
            <button className="btn-keys" id="KeyM">M</button>
            <button className="btn-keys" id="Comma">,</button>
            <button className="btn-keys" id="Period">.</button>
            <button className="btn-keys" id="Slash">-</button>
            <button className="btn-keys shiftRight" id="ShiftRight">
              Shift
            </button>
          </div>
          <div className="fila cinco">
            <button className="btn-keys otherKey" id="ControlLeft">
              Ctrl
            </button>
            <button className="btn-keys otherKey" id="MetaLeft">
              Win
            </button>
            <button className="btn-keys otherKey" id="AltLeft">
              Alt
            </button>
            <button className="btn-keys space" id="Space">
              Space
            </button>
            <button className="btn-keys otherKey" id="AltRight">
              Alt
            </button>
            <button className="btn-keys otherKey" id="MetaRight">
              Win
            </button>
            <button className="btn-keys otherKey" id="ControlRight">
              Ctrl
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

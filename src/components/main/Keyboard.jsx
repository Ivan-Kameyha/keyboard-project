export const Keyboard = ({ keyPressed }) => {
  return (
    <div>
      <h1 className="titulo">Reconocimiento de Teclas</h1>
      <p className="teclaPresionada">Última tecla presionada: {keyPressed}</p>

      <div className="keyboard">
        <div className="row one">
          <button id="Escape">Esc</button>
          <button id="Digit1">1</button>
          <button id="Digit2">2</button>
          <button id="Digit3">3</button>
          <button id="Digit4">4</button>
          <button id="Digit5">5</button>
          <button id="Digit6">6</button>
          <button id="Digit7">7</button>
          <button id="Digit8">8</button>
          <button id="Digit9">9</button>
          <button id="Digit0">0</button>
          <button id="Minus">?</button>
          <button id="Equal">¿</button>
          <button id="Backspace" className="backspace">
            Backspace
          </button>
        </div>
        <div className="row two">
          <button id="Tab" className="tab">
            Tab
          </button>
          <button id="KeyQ">Q</button>
          <button id="KeyW">W</button>
          <button id="KeyE">E</button>
          <button id="KeyR">R</button>
          <button id="KeyT">T</button>
          <button id="KeyY">Y</button>
          <button id="KeyU">U</button>
          <button id="KeyI">I</button>
          <button id="KeyO">O</button>
          <button id="KeyP">P</button>
          <button id="BracketLeft">´</button>
          <button id="BracketRight" className="otherKey">
            +
          </button>
          <button id="Enter" className="enter">
            Enter
          </button>
        </div>
        <div className="row three">
          <button id="CapsLock" className="bloqMayus">
            Bloq Mayus
          </button>
          <button id="KeyA">A</button>
          <button id="KeyS">S</button>
          <button id="KeyD">D</button>
          <button id="KeyF">F</button>
          <button id="KeyG">G</button>
          <button id="KeyH">H</button>
          <button id="KeyJ">J</button>
          <button id="KeyK">K</button>
          <button id="KeyL">L</button>
          <button id="Semicolon">Ñ</button>
          <button id="Quote">&#123;</button>
          <button id="Backslash">&#125;</button>
        </div>
        <div className="row four">
          <button id="ShiftLeft" className="shiftLeft">
            Shift
          </button>
          <button id="IntlBackslash">&lt;&gt;</button>
          <button id="KeyZ">Z</button>
          <button id="KeyX">X</button>
          <button id="KeyC">C</button>
          <button id="KeyV">V</button>
          <button id="KeyB">B</button>
          <button id="KeyN">N</button>
          <button id="KeyM">M</button>
          <button id="Comma">,</button>
          <button id="Period">.</button>
          <button id="Slash">-</button>
          <button id="ShiftRight" className="shiftRight">
            Shift
          </button>
        </div>
        <div className="row five">
          <button id="ControlLeft" className="otherKey">
            Ctrl
          </button>
          <button id="MetaLeft" className="otherKey">
            Win
          </button>
          <button id="AltLeft" className="otherKey">
            Alt
          </button>
          <button id="Space" className="space">
            Space
          </button>
          <button id="AltRight" className="otherKey">
            Alt
          </button>
          <button id="MetaRight" className="otherKey">
            Win
          </button>
          <button id="ControlRight" className="otherKey">
            Ctrl
          </button>
        </div>
      </div>
    </div>
  );
};

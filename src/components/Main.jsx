import React from "react";
import "../styles/main.css"

export function Main() {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      var elemento = document.getElementById("footer");
      elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (event.shiftKey && event.keyCode === 49) {
      // redireccionar a la pagina deseada
      window.location.href = "http://localhost:5173/login";
    } else if (event.shiftKey && event.keyCode === 50) {
      window.location.href = "http://localhost:5173/register";
    }
  });

  return (
    <div>
      <div className="banner">
        <h1>
          Bienvenidos al Keyboard Project{" "}
          <span>(Presione "enter" para comenzar)</span>
        </h1>
        <h4>
          Shift + 1 : Iniciar sesión <br /> Shift + 2 : Registrar nueva cuenta
        </h4>
      </div>

      <h1 className="titulo">Reconocimiento de Teclas</h1>

      <div className="keyboard">
        <div className="row one">
          <button>Esc</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>?</button>
          <button>¿</button>
          <button className="backspace">Backspace</button>
        </div>
        <div className="row two">
          <button className="tab">Tab</button>
          <button>Q</button>
          <button>W</button>
          <button>E</button>
          <button>R</button>
          <button>T</button>
          <button>Y</button>
          <button>U</button>
          <button>I</button>
          <button>O</button>
          <button>P</button>
          <button>´</button>
          <button className="otherKey">+</button>
          <button className="enter">Enter</button>
        </div>
        <div className="row three">
          <button className="bloqMayus">Bloq Mayus</button>
          <button>A</button>
          <button>S</button>
          <button>D</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button>Ñ</button>
          <button>&#123;</button>
          <button>&#125;</button>
        </div>
        <div className="row four">
          <button className="shiftLeft">Shift</button>
          <button>&lt;&gt;</button>
          <button>Z</button>
          <button>X</button>
          <button>C</button>
          <button>V</button>
          <button>B</button>
          <button>N</button>
          <button>M</button>
          <button>,</button>
          <button>.</button>
          <button>-</button>
          <button className="shiftRight">Shift</button>
        </div>
        <div className="row five">
          <button className="otherKey">Ctrl</button>
          <button className="otherKey">Win</button>
          <button className="otherKey">Alt</button>
          <button className="space">Space</button>
          <button className="otherKey">Alt</button>
          <button className="otherKey">Win</button>
          <button className="otherKey">Ctrl</button>
        </div>
      </div>

      <hr />

      <div id="footer">
        Universidad Tecnologica Nacional - Facultad Regional Tucuman
      </div>
    </div>
  );
}

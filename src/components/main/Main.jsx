import React, { useEffect } from "react";
import "./Main.css";
import { ShortcutKeys } from "../shortcutKeys/ShortcutKeys";
import logoImage from "../../assets/Udyat-Logo.png";

export const Main = () => {
  useEffect(() => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = "Bienvenidos a Udyat";
      utterance.lang = "es-MX"; // Establecer el idioma a español (Mexico)
      utterance.pitch = 0.9; // Establecer el tono de voz
      utterance.rate = 0.9; // Establecer la velocidad de habla
      speechSynthesis.speak(utterance); // Iniciar el efecto de voz con el objeto utterance
    }
  }, []);

  return (
    <>
      <div className="banner d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center">
          <div className="logo">
            <img src={logoImage} alt="Udyat Logo" />
          </div>
          <h1 className="text-primary font-weight-bold ">
            BIENVENIDOS A UDYAT
            <span>La plataforma de aprendizaje inclusivo</span>
          </h1>
        </div>
        <h4 className="text-muted">
          Shift + 1 : Iniciar sesión <br /> Shift + 2 : Registrar nueva cuenta
          <br /> Shift + 3 : Practicar <br /> Escape : Regresar
        </h4>
        <div id="footer" className="text-muted footer">
          <h5>Universidad Tecnológica Nacional - Facultad Regional Tucumán</h5>
          <h6>Creado por Kameyha Ivan y Nuñez Horacio</h6>
        </div>
        <ShortcutKeys />
      </div>
    </>
  );
};

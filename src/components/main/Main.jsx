import React, { useEffect } from "react";
import "./Main.css";
import { ShortcutKeys } from "../shortcutKeys/ShortcutKeys";

export const Main = () => {
  return (
    <>
      <div className="banner d-flex justify-content-center align-items-center">
        <h1 className="text-primary font-weight-bold ">
          BIENVENIDOS A UDYAT
          <span>La plataforma de aprendizaje inclusivo</span>
        </h1>
        <h4 className="text-muted">
          Shift + 1 : Iniciar sesión <br /> Shift + 2 : Registrar nueva cuenta{" "}
          <br /> Shift + 3 : Practicar <br /> Escape : Regresar
        </h4>
        <div id="footer" className="text-muted">
          <h5>Universidad Tecnológica Nacional - Facultad Regional Tucumán</h5>
        </div>
        <ShortcutKeys />
      </div>
    </>
  );
};

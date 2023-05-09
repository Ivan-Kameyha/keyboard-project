import React, { useEffect } from "react";

export const Register = () => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Redireccionar a la pagina raiz con ESC
      if (event.keyCode === 27) {
        window.location.href = "/";
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="card">
        <h2>Regístrate</h2>
        <form action="" className="login-form">
          <div className="input-box">
            <span class="icon">
              <i class="bi bi-envelope"></i>
            </span>
            <input type="email" required />
            <label for="">Email</label>
          </div>
          <div className="input-box">
            <span class="icon">
              <i class="bi bi-lock"></i>
            </span>
            <input type="password" required />
            <label for="">Contraseña</label>
          </div>
          <button type="submit" class="btn">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

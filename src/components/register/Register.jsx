import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SessionCard from "../sessionCard/SessionCard";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
  // Se almacena correo y contraseña del usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth(); // Se extrae la funcion signup del contexto
  const navigate = useNavigate(); // Se inicializa el hook de react router para navegar por rutas
  const [error, setError] = useState(); // Para manejar errores

  // funcion para manejar cambios del formulario
  const handleChange = ({ target: { name, value } }) => {
    // se crea un operador spread para copiar todas las propiedades existentes del objeto
    // luego se actualiza una propiedad en el nuevo objeto
    setUser({ ...user, [name]: value });
  };

  // funcion para enviar el formulario de registro
  const handleSubmit = async (e) => {
    e.preventDefault(); // cancela el evento de envio para evitar refrescar la pagina
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/home");
    } catch (error) {
      // console.log(error.code)
      // if (error.code === "auth/invalid-email"){
      //   setError("Correo invalido")
      // }
      setError(error.message);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Redireccionar a la página raíz con ESC
      if (event.keyCode === 27) {
        window.location.href = "/";
      }
    };

    // Agregar el event listener para el evento keydown al documento
    document.addEventListener("keydown", handleKeyDown);

    // Remover el event listener al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    // Renderizar el componente SessionCard con título "Registro" y botón "Registrarme"
    <SessionCard
      title={"Registro"}
      button={"Registrarme"}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      error={error}
    />
  );
};

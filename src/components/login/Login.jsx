import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SessionCard from "../sessionCard/SessionCard";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  // Se almacena correo y contraseña del usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth(); // Se extrae la funcion login del contexto
  const navigate = useNavigate(); // Se inicializa el hook de react router para navegar por rutas
  const [error, setError] = useState(); // Para manejar errores

  // funcion para manejar cambios del formulario
  const handleChange = ({ target: { name, value } }) => {
    // se crea un operador spread para copiar todas las propiedades existentes del objeto
    // luego se actualiza una propiedad en el nuevo objeto
    setUser({ ...user, [name]: value });
  };

  // funcion para enviar el formulario de login
  const handleSubmit = async (e) => {
    e.preventDefault(); // cancela el evento de envio para evitar refrescar la pagina
    setError("");
    try {
      await login(user.email, user.password);
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
    // Función para manejar el evento de presionar teclas
    const handleKeyDown = (event) => {
      // Redireccionar a la página raíz con ESC
      if (event.keyCode === 27) {
        window.location.href = "/";
      }
    };

    // Añadir el evento "keydown" al documento y asignarle la función handleKeyDown como manejador de eventos
    document.addEventListener("keydown", handleKeyDown);

    // Remover el evento "keydown" al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Se pasa un arreglo vacío como dependencia para que el efecto se ejecute solo una vez al montar el componente

  return (
    // Componente SessionCard que representa una tarjeta de sesión de inicio de sesión
    <SessionCard
      title={"Login"}
      button={"Iniciar Sesión"}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      error={error}
    />
  );
};

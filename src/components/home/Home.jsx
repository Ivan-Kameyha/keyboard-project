import { Button } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import './Home.css';
import { useAuth } from "../../context/AuthContext";
import { TextToSpeechButton } from "../textToSpeechButton/TextToSpeechButton";

export const Home = () => {
  // se extrae el estado user, loading y la funcion logout del contexto
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div
      className="banner d-flex justify-content-center align-items-center"
      style={{ color: "black" }}
    >
      <div className="text-center">
        <h1><BsPersonCircle className="profile-icon"/>{user.email}</h1>
        <div className="courses-container d-flex justify-content-around flex-wrap">
          <Button onClick={handleLogout} className="courses-button bg-warning text-dark border-0">
            {/* Componente TextToSpeechButton con el texto del botón */}
            <TextToSpeechButton text={"Mi perfíl"} />
          </Button>
          <Button onClick={handleLogout} className="courses-button bg-primary border-0">
            {/* Componente TextToSpeechButton con el texto del botón */}
            <TextToSpeechButton text={"Familiarización táctil"} />
          </Button>
          <Button onClick={handleLogout} className="courses-button bg-success border-0">
            {/* Componente TextToSpeechButton con el texto del botón */}
            <TextToSpeechButton text={"Orientación espacial"} />
          </Button>
          <Button onClick={handleLogout} className="courses-button bg-dark border-0">
            {/* Componente TextToSpeechButton con el texto del botón */}
            <TextToSpeechButton text={"Practiquemos"} />
          </Button>
        </div>

        <Button onClick={handleLogout}>
          {/* Componente TextToSpeechButton con el texto del botón */}
          <TextToSpeechButton text={"Logout"} />
        </Button>
      </div>
    </div>
  );
};

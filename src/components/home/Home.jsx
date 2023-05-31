import { Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import CourseCard from "../courseCard/CourseCard";
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
        <h1>Welcome {user.email}</h1>
        <div className="container-courses d-flex justify-content-center flex-wrap">
          <CourseCard
            title={"Curso 1"}
            description={"Descripción del curso 1"}
          />
          <CourseCard
            title={"Curso 2"}
            description={"Descripción del curso 2"}
          />
        </div>
        <Button onClick={handleLogout}>
          {/* Componente TextToSpeechButton con el texto del botón */}
          <TextToSpeechButton text={"Logout"} />
        </Button>
      </div>
    </div>
  );
};

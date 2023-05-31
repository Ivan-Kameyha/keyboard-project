import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CourseCard.css";
import { TextToSpeechButton } from "../textToSpeechButton/TextToSpeechButton";

const CourseCard = ({ title, description }) => {
  return (
    <Card border="primary" className="course-card">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" className="submitBtn">
          {/* Componente TextToSpeechButton con el texto del botón */}
          <TextToSpeechButton text={"Iniciar"} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SessionCard.css";
import { TextToSpeechButton } from "../textToSpeechButton/TextToSpeechButton";

const SessionCard = ({ title, button }) => {
  return (
    <div className="wrapper bg-light">
      <div className="card">
        <h2 className="text-dark">{title}</h2>
        <Form>
          {/* Campo de entrada para el email */}
          <Form.Group className="mt-5 mb-5" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          {/* Campo de entrada para la contraseña */}
          <Form.Group className="mt-5 mb-5" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          {/* Botón de envío del formulario */}
          <Button variant="primary" type="submit" className="submitBtn">
            {/* Componente TextToSpeechButton con el texto del botón */}
            <TextToSpeechButton text={button} />
          </Button>      
        </Form>
      </div>
    </div>
  );
};

export default SessionCard;

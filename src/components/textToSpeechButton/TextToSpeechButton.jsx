import React from "react";

export const TextToSpeechButton = ({ text }) => {
  // Función para activar el efecto de voz
  const speak = (text) => {
    // Crear un objeto SpeechSynthesisUtterance con el texto a pronunciar
    const utterance = new SpeechSynthesisUtterance("botón " + text);
    utterance.lang = "es-CO"; // Establecer el idioma a español (México)
    utterance.pitch = 0.9; // Establecer el tono de voz
    utterance.rate = 0.8; // Establecer la velocidad de habla
    speechSynthesis.speak(utterance); // Iniciar el efecto de voz con el objeto utterance
  };

  return (
    <div className="textToSpeech" onMouseOver={() => speak(text)}>{/*Ejecuta la funcion de voz cuando pasamos el puntero por el boton*/}
      {text}
    </div>
  );
};

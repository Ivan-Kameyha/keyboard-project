import { useEffect } from "react";

export const Voces = ({ text }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-MX";
    utterance.pitch = 0.8;
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  // Llamar a la función speak al montar el componente
  useEffect(() => {
    speak();
  }, []);

  return null; // El componente Voice no renderiza nada en el DOM
};


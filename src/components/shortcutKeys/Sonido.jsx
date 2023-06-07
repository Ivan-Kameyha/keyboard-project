const Sonido = {
  speak: (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-MX"; // Establecer el idioma a español (Mexico)
    utterance.pitch = 0.9; // Establecer el tono de voz
    utterance.rate = 0.9; // Establecer la velocidad de habla
    speechSynthesis.speak(utterance); // Iniciar el efecto de voz con el objeto utterance
  }
};

export default Sonido;

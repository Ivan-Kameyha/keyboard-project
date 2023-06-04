const Sonido = {
  speak: (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-CO";
    utterance.pitch = 0.9;
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
};

export default Sonido;

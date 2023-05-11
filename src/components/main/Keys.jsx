export const Keys = ({ onKeyPress }) => {
  // Al presionar una tecla
  document.addEventListener("keydown", function (event) {
    // Colorear tecla
    const key = event.code;
    const button = document.querySelector(`#${key}`);
    if (button) {
      button.classList.add("active");
    }

    // Scroll de la tecla "enter"
    if (event.keyCode === 13) {
      var element = document.getElementById("footer");
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Redireccionar a la pagina deseada
    if (event.shiftKey && event.keyCode === 49) {
      window.location.href = "http://localhost:5173/login";
    } else if (event.shiftKey && event.keyCode === 50) {
      window.location.href = "http://localhost:5173/register";
    }

    // Se ejecuta la funcion handleKeyPress y se pasa la tecla como argumento
    onKeyPress(key);
  });

  // Al soltar una tecla
  document.addEventListener("keyup", function (event) {
    // Descolorear tecla
    const key = event.code;
    const button = document.querySelector(`#${key}`);
    if (button) {
      button.classList.remove("active");
    }
  });

  return null;
};

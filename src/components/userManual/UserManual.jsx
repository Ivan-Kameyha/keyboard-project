import React, { useEffect } from "react";
import "./UserManual.css";

export const UserManual = () => {
  const TextContent = `
  Bienvenido al manual de usuario.
En este manual se explica paso a paso y de forma gráfica la manera en cómo usted puede utilizar nuestro sitio web. Comprendemos lo importante que es aprovechar al máximo cada visita y obtener la información que busca de manera fácil y eficiente.
Nuestro objetivo es garantizar que su experiencia navegando a través de esta página sea de lo más grata posible. 
Hemos diseñado cuidadosamente cada sección y funcionalidad para asegurarnos de que encuentre todo lo que necesita de forma intuitiva.

Uso de la plataforma.
El usuario siempre será trasladado a la página de bienvenida al ingresar a la página. Si por alguna razón no se encuentra allí mantenga presionada la tecla “Escape” y será dirigido a la misma.
Si desea navegar con el mouse podrá oir las opciones de nuestra barra de navegación al pasar el puntero sobre las mismas. Dicha barra está ubicada en la parte superior de la página y les dará acceso rápido a todas las secciones principales.

Registro e inicio de sesión.
Este apartado es uno de los más importantes de nuestro sitio web. Es aquí donde usted podrá registrar su cuenta o bien iniciar sesión si ya la tiene.
Si se encuentra en la sección de "Bienvenida" podrá acceder a la de "Inicio de sesión" haciendo clic en el botón correspondiente de la barra de navegación como así también presionando las teclas "Shift" + el numero "1".
Al ingresar a esta sección se reproducirá una voz con el siguiente mensaje: “Ingrese por favor su correo electrónico, luego presione la tecla “Tabulador” para continuar al siguiente campo”. Ésto le permitirá saber que el cursor se encuentra ubicado en el campo "Email".
Una vez que haya presionado dicha tecla se escuchará lo siguiente: "Ingrese por favor su contraseña. Luego presione "Tabulador" para cambiar al botón de "Iniciar Sesión" y la tecla "Enter" para ingresar.
Si no tiene aun su cuenta al presionar la tecla "Tabulador" nuevamente en esta misma sección se seleccionará y escuchará la opción de Registrarme. Allí va a poder acceder a dicha sección presionando la tecla "Enter".
El funcionamiento del registro es exactamente igual al de Inicio de Sesión.

Sección Home.
Una vez que haya iniciado sesión será trasladado a la página "Home". Aquí podrá encontrar las opciones para revisar los datos de su perfil y el acceso a los cursos que en dicho momento esten disponibles.
Al pasar el puntero de mouse sobre ellos podrá escuchar el nombre del curso que se está seleccionando.
`;

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = TextContent.replace(/\n/g, " ");
      utterance.lang = "es-MX"; // Establecer el idioma a español (Mexico)
      utterance.pitch = 0.9; // Establecer el tono de voz
      utterance.rate = 0.9; // Establecer la velocidad de habla
      speechSynthesis.speak(utterance); // Iniciar el efecto de voz con el objeto utterance
    }
  }, []);

  return (
    <>
      <div className="user-manual-container text-primary p-5 mt-4">
        <h2 className="user-manual-title text-center">Manual de usuario</h2>
        <div className="user-manual-content">
          <div className="seccion mb-5 mt-5">
            <h3 className="user-manual-subtitle">Bienvenido al manual de usuario</h3>
            <p>
              En este manual se explica paso a paso y de forma gráfica la manera
              en cómo usted puede utilizar nuestro sitio web. Comprendemos lo
              importante que es aprovechar al máximo cada visita y obtener la
              información que busca de manera fácil y eficiente.
            </p>
            <p>
              Nuestro objetivo es garantizar que su experiencia navegando a
              través de esta página sea de lo más grata posible.
            </p>
            <p>
              Hemos diseñado cuidadosamente cada sección y funcionalidad para
              asegurarnos de que encuentre todo lo que necesita de forma
              intuitiva.
            </p>
          </div>
          <div className="seccion mb-5 mt-5">
            <h3 className="user-manual-subtitle">Uso de la plataforma</h3>
            <p>
              El usuario siempre será trasladado a la página de bienvenida al
              ingresar a la página. Si por alguna razón no se encuentra allí
              mantenga presionada la tecla “Esc” y será dirigido a la misma.
            </p>
            <p>
              Si desea navegar con el mouse podrá oir las opciones de nuestra
              barra de navegación al pasar el puntero sobre las mismas. Dicha
              barra está ubicada en la parte superior de la página y les dará
              acceso rápido a todas las secciones principales.
            </p>
          </div>
          <div className="seccion mb-5 mt-5">
            <h3 className="user-manual-subtitle">Registro e inicio de sesión</h3>
            <p>
              Este apartado es uno de los más importantes de nuestro sitio web.
              Es aquí donde usted podrá registrar su cuenta o bien iniciar
              sesión si ya la tiene.
            </p>
            <p>
              Si se encuentra en la sección de "Bienvenida" podrá acceder a la
              de "Inicio de sesión" haciendo clic en el botón correspondiente de
              la barra de navegación como así también presionando las teclas
              "Shift" + el numero "1".
            </p>
            <p>
              Al ingresar a esta sección se reproducirá una voz con el siguiente
              mensaje: “Ingrese por favor su correo electrónico, luego presione
              la tecla “Tab” para continuar al siguiente campo”. Ésto le
              permitirá saber que el cursor se encuentra ubicado en el campo
              "Email".
            </p>
            <p>
              Una vez que haya presionado dicha tecla se escuchará lo siguiente:
              "Ingrese por favor su contraseña. Luego presione "Tab" para
              cambiar al botón de "Iniciar Sesión" y la tecla "Enter" para
              ingresar.
            </p>
            <p>
            Si no tiene aun su cuenta al presionar la tecla "Tabulador" nuevamente en esta misma sección se seleccionará y escuchará la opción de Registrarme. Allí va a poder acceder a dicha sección presionando la tecla "Enter".
            </p>
            <p>
              El funcionamiento del registro es exactamente igual al de Inicio
              de Sesión.
            </p>
          </div>
          <div className="seccion mb-5 mt-5">
            <h3 className="user-manual-subtitle">Sección Home</h3>
            <p>
              Una vez que haya iniciado sesión será trasladado a la página
              "Home". Aquí podrá encontrar las opciones para revisar los datos
              de su perfil y el acceso a los cursos que en dicho momento esten
              disponibles.
            </p>
            <p>
              Al pasar el puntero de mouse sobre ellos podrá escuchar el nombre
              del curso que se está seleccionando.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

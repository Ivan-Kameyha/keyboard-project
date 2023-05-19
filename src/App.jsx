import { Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Pruebas } from "./components/pruebas/Pruebas";
import { NavBar } from "./components/navBar/NavBar";
import { Keyboard } from "./components/keyboard/Keyboard";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedPath } from "./components/protectedPath/protectedPath";

function App() {
  const handleKeyPress = (key) => {
    console.log(key);
  };

  return (
    <div className="bg-light">
      {/* Renderiza el componente NavBar */}
      <NavBar />

      {/* AuthProvider engloba a todas las rutas por ende los componentes tienen acceso a el */}
      <AuthProvider>
        {/* Configura las rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Main />} />

        {/* Ruta para la página de inicio */}
        <Route path="/home" element={<ProtectedPath><Home /></ProtectedPath>} /> {/*ruta protegida*/}

        {/* Ruta para la página de inicio de sesión */}
        <Route path="/login" element={<Login />} />

        {/* Ruta para la página de registro */}
        <Route path="/register" element={<Register />} />

        {/* Ruta para la página de teclado */}
        <Route path="/keyboard" element={<Keyboard onKeyPress={handleKeyPress} />} />

        {/* Ruta para la página de pruebas */}
        <Route path="/pruebas" element={<Pruebas />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;


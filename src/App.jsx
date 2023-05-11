import { Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Pruebas } from "./components/Pruebas/Pruebas";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pruebas" element={<Pruebas />} />
      </Routes>
    </div>
  );
}

export default App;

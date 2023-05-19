import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

// Se crea un contexto
export const authContext = createContext();

// Se crea un hook, devuelve un contexto y verifica si existe o no
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay un proveedor de autenticacion");
  return context;
};

// Se crea un proveedor de autenticacion que envuelve a los componentes hijos
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // almacena la informacion del usuario
  const [loading, setLoading] = useState(true); // indica si la autenticacion esta en curso

  // funcion para crear un nuevo usuario
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // funcion para iniciar sesion
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // funcion para cerrar sesion
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // actualiza el estado user
      setLoading(false); // coloca loading en false para indicar que la autenticacion finalizo
    });
  }, []);

  return (
    // Se exportan las funciones a ser utilizadas
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}

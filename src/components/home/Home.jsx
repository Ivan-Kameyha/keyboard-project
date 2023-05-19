import { useAuth } from "../../context/AuthContext";

export function Home() {
  // se extrae el estado user, loading y la funcion logout del contexto
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div
      className="banner d-flex justify-content-center align-items-center"
      style={{ color: "black" }}
    >
      <div className="text-center">
        <h1>Welcome {user.email}</h1>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

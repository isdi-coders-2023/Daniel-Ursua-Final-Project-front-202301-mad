import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleLogin = (): void => {
    navigate("/login");
  };
  const handleRegister = (): void => {
    navigate("/register");
  };

  return (
    <>
      <h1>PlantApp</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}> Register</button>
    </>
  );
}

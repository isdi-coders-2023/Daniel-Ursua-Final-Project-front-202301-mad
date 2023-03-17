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
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}> Register</button>
    </>
  );
}

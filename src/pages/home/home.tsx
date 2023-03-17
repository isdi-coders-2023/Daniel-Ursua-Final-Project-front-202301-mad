import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <button>
        <Link to="../login/login.tsx">Login</Link>
      </button>
      <button>
        <Link to="../register/register.tsx">Register</Link>
      </button>
    </>
  );
}

import { Link } from "react-router-dom";
import { RegUserForm } from "../../components/forms/reg.user.forms";

export default function RegisterPage() {
  return (
    <>
      <h1>Welcome Plantlover</h1>
      <h2>Login to your account</h2>
      <RegUserForm></RegUserForm>
      <p>
        Already have an account? <Link to="../login/login.tsx">Login</Link>
      </p>
    </>
  );
}

import { Link } from "react-router-dom";
import { LogUserForm } from "../../components/forms/user.forms";

export default function LoginPage() {
  return (
    <>
      <h1>Welcome Plantlover</h1>
      <h2>Login to your account</h2>
      <LogUserForm></LogUserForm>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </>
  );
}

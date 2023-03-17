import { Link } from "react-router-dom";
import { RegUserForm } from "../../components/forms/reg.user.forms";

export default function RegisterPage() {
  return (
    <>
      <h1>Register</h1>
      <h2>Create a new account</h2>
      <RegUserForm></RegUserForm>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

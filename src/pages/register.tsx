import { RegUserForm } from "../components/forms/reg.user.forms";

export const RegisterPage = () => {
  return (
    <>
      <h1>Welcome Plantlover</h1>
      <h2>Login to your account</h2>
      <RegUserForm></RegUserForm>
      <p>
        Already have an account? <a href="#">Login</a>
      </p>
    </>
  );
};

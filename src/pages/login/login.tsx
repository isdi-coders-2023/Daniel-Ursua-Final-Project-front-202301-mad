import { LogUserForm } from "../../components/forms/user.forms";

export const LoginPage = () => {
  return (
    <>
      <h1>Welcome Plantlover</h1>
      <h2>Login to your account</h2>
      <LogUserForm></LogUserForm>
      <p>
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </>
  );
};

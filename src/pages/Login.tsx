import { Link } from "react-router-dom";
import HGroup from "../components/HGroup";
import Form from "../form/Form";
import Input from "../form/Input";
import InputGroup from "../form/InputGroup";
import SubmitButton from "../form/SubmitButton";
import useLoginStore from "../stores/useLoginStore";

const Login = () => {
  const loginStore = useLoginStore();

  const handleSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h2 className="auth-title">Net Hive, Login</h2>
      <InputGroup>
        <Input
          placeHolder="Email"
          type="email"
          onChange={(name) => {
            loginStore.setEmail(name);
          }}
        />
        <Input
          placeHolder="Password"
          type="password"
          onChange={(name) => {
            loginStore.setEmail(name);
          }}
        />
      </InputGroup>
      <HGroup alignment="space-between">
        <SubmitButton className="login-form__login-btn">Login</SubmitButton>
        <HGroup>
          <Link className="link" to="/register">
            Create a new account
          </Link>
          <Link className="link" to="/forgotPassword">
            Forgot password?
          </Link>
        </HGroup>
      </HGroup>
    </Form>
  );
};

export default Login;

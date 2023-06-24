import { Link } from "react-router-dom";
import Checkbox from "../form/Checkbox";
import Date from "../form/Date";
import Form from "../form/Form";
import Input from "../form/Input";
import Radiobox from "../form/Radiobox";
import SubmitButton from "../form/SubmitButton";
import useRegisterStore from "../stores/UseRegisterStore";

const headerInputSize = 48;

const Register = () => {
  const registerStore = useRegisterStore();

  const handleSubmit = () => {
    console.log(registerStore);
  };

  return (
    <Form onSubmit={handleSubmit} className="auth-form">
      <h2 className="auth-form__title">Net Hive, Register Account</h2>
      <header className="auth-form__header">
        <Input
          percentWidth={headerInputSize}
          placeHolder="Name"
          onChange={(name) => {
            registerStore.setName(name);
          }}
        />
        <Input
          percentWidth={headerInputSize}
          placeHolder="Surname"
          onChange={(surname) => {
            registerStore.setSurname(surname);
          }}
        />
      </header>
      <footer className="auth-form__main">
        <Input
          type="email"
          placeHolder="Email"
          onChange={(email) => {
            registerStore.setEmail(email);
          }}
        />
        <Input
          type="password"
          placeHolder="Password"
          onChange={(password) => {
            registerStore.setPassword(password);
          }}
        />
        <Input
          type="password"
          placeHolder="Confirm Password"
          onChange={(confirmPassword) => {
            registerStore.setConfirmPassword(confirmPassword);
          }}
        />
        <div className="auth-form__birthdate">
          <Date
            onChange={(birthdate) => registerStore.setBirthdate(birthdate)}
            id="birthdate"
          >
            Birthdate:
          </Date>
        </div>
        <div className="auth-form__gender-container">
          <Radiobox
            onChange={(gender) => registerStore.setGender(gender)}
            id="male"
            name="gender"
            value="male"
          >
            Male
          </Radiobox>
          <Radiobox
            onChange={(gender) => registerStore.setGender(gender)}
            id="female"
            name="gender"
            value="female"
          >
            Female
          </Radiobox>
          <Radiobox
            onChange={(gender) => registerStore.setGender(gender)}
            id="other"
            name="gender"
            value="other"
          >
            Other
          </Radiobox>
        </div>
        <div className="auth-form__checkbox-container">
          <Checkbox
            onChange={(newsletter) => registerStore.setNewsletter(newsletter)}
            id="newsletter"
          >
            I want to get newsletters from Net Hive
          </Checkbox>
          <div>
            <Checkbox
              onChange={(termsOfService) =>
                registerStore.setTermsOfService(termsOfService)
              }
              className="auth-form__terms-of-service"
              id="terms-of-service"
            >
              I accept Net Hive's terms of service
            </Checkbox>
            <Link className="link" to="/termsOfService">
              Learn more
            </Link>
          </div>
        </div>
      </footer>
      <SubmitButton>Register</SubmitButton>
    </Form>
  );
};

export default Register;

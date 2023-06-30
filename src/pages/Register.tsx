import _ from "lodash";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Checkbox from "../form/Checkbox";
import DateInput from "../form/DateInput";
import Form from "../form/Form";
import Input from "../form/Input";
import RadioGroup from "../form/RadioGroup";
import SubmitButton from "../form/SubmitButton";
import Time from "../services/Time";
import { maxLength, minLength } from "../services/nameLengthErrorMessage";
import parseZodErrors from "../services/parseZodErrors";
import useRegisterStore from "../stores/useRegisterStore";
import InputGroup from "../form/InputGroup";
import useRegister, { RegisterBody } from "../hooks/userRegister";
import { User } from "../httpServices/UserService";
import { setUser } from "../hooks/useAuth";
import { AxiosResponseHeaders } from "axios";

const headerInputSize = 48;

const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Name cannot be empty")
    .max(50, maxLength("Name", 50)),
  surname: z
    .string()
    .min(1, "Surname cannot be empty")
    .max(50, maxLength("Surname", 50)),
  email: z
    .string()
    .email("Input has to be an email")
    .min(5, minLength("Email", 5))
    .max(50, maxLength("Email", 50)),
  password: z
    .string()
    .min(8, minLength("Password", 8))
    .max(50, maxLength("Password", 100)),
  confirmPassword: z
    .string()
    .min(8, minLength("Confirm password", 8))
    .max(50, maxLength("Confirm password", 100)),
  birthdate: z.date(),
  gender: z.string().min(1, "Please choose a gender"),
  termsOfService: z.boolean(),
  newsletter: z.boolean(),
});

interface ErrorsInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthdate: string;
  gender: string;
  termsOfService: string;
}

const Register = () => {
  const registerStore = useRegisterStore();
  const navigate = useNavigate();
  const { mutate: register } = useRegister(getStoreValues(), onUserRegistered);
  const [errors, setErrors] = useState<ErrorsInterface>({} as ErrorsInterface);

  function getStoreValues() {
    return _.pick<RegisterBody>(registerStore, [
      "name",
      "surname",
      "email",
      "password",
      "confirmPassword",
      "birthdate",
      "gender",
      "termsOfService",
      "newsletter",
    ]) as RegisterBody;
  }

  function onUserRegistered(user: User, headers: AxiosResponseHeaders) {
    setUser(headers["x-auth-token"]);
    registerStore.reset();
    navigate("/");
  }

  const handleSubmit = () => {
    const value = registerSchema.safeParse(getStoreValues());

    setErrors({} as ErrorsInterface);

    let formErrors = {} as ErrorsInterface;

    if (!value.success) {
      formErrors = parseZodErrors<ErrorsInterface>(value.error);
    }

    if (Time.isMinor(registerStore.birthdate)) {
      formErrors.birthdate = "Your have to be at least 18 years old.";
    }

    if (
      !formErrors.confirmPassword &&
      registerStore.confirmPassword !== registerStore.password
    ) {
      formErrors.confirmPassword = "This field does not match the password.";
    }

    if (registerStore.termsOfService === false)
      formErrors.termsOfService = "You have to agree to our terms of service.";

    setErrors(formErrors);

    if (Object.values(formErrors).length == 0) registerAccount();
  };

  const registerAccount = () => {
    register();
  };

  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <h2 className="auth-title">Net Hive, Register Account</h2>
      <header>
        <InputGroup flow="ROW">
          <Input
            percentWidth={headerInputSize}
            placeHolder="Name"
            value={registerStore.name}
            error={errors.name}
            onChange={(name) => {
              registerStore.setName(name);
            }}
          />
          <Input
            percentWidth={headerInputSize}
            placeHolder="Surname"
            value={registerStore.surname}
            error={errors.surname}
            onChange={(surname) => {
              registerStore.setSurname(surname);
            }}
          />
        </InputGroup>
      </header>
      <footer className="register-form__main">
        <InputGroup className="register-form__main__text-input-group">
          <Input
            type="email"
            placeHolder="Email"
            value={registerStore.email}
            error={errors.email}
            onChange={(email) => {
              registerStore.setEmail(email);
            }}
          />
          <Input
            type="password"
            placeHolder="Password"
            error={errors.password}
            value={registerStore.password}
            onChange={(password) => {
              registerStore.setPassword(password);
            }}
          />
          <Input
            type="password"
            placeHolder="Confirm Password"
            error={errors.confirmPassword}
            value={registerStore.confirmPassword}
            onChange={(confirmPassword) => {
              registerStore.setConfirmPassword(confirmPassword);
            }}
          />
        </InputGroup>
        <div className="register-form__birthdate">
          <DateInput
            value={registerStore.birthdate}
            error={errors.birthdate}
            onChange={(birthdate) => registerStore.setBirthdate(birthdate)}
            id="birthdate"
          >
            Birthdate:
          </DateInput>
        </div>
        <RadioGroup
          value={registerStore.gender}
          error={errors.gender}
          className="register-form__gender-container"
          name="Gender"
          radioBoxes={["Male", "Female", "Other"]}
          onChange={(gender) => registerStore.setGender(gender)}
        />
        <div className="register-form__checkbox-container">
          <Checkbox
            value={registerStore.newsletter}
            onChange={(newsletter) => registerStore.setNewsletter(newsletter)}
            id="newsletter"
          >
            I want to get newsletters from Net Hive
          </Checkbox>
          <div style={{ display: "flex" }}>
            <Checkbox
              value={registerStore.termsOfService}
              error={errors.termsOfService}
              onChange={(termsOfService) =>
                registerStore.setTermsOfService(termsOfService)
              }
              className="register-form__terms-of-service"
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
      <Link className="link register-form__login-link" to="/login">
        Already have an account?
      </Link>
    </Form>
  );
};

export default Register;

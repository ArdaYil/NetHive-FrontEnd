import APIClient from "./ApiClient";

export interface User {
  name: string;
  surname: string;
  email: string;
  gender: string;
  role: string;
  birthdate: Date;
  _id: string;
}

export default new APIClient<User>("users");

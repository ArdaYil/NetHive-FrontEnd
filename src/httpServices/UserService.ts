import APIClient, { Response } from "./ApiClient";

export interface User {}

export default new APIClient<User>("users");

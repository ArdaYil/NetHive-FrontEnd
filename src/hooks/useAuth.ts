import jwtDecode from "jwt-decode";
import { User } from "../httpServices/UserService";
import LocalStorageClient from "../services/LocalStorageClient";

const AuthLocalStorageClient = new LocalStorageClient<string>();

const setUser = (jwt: string) => {
  AuthLocalStorageClient.set("userJwt", jwt);
};

const getUser = (): User => {
  return jwtDecode(AuthLocalStorageClient.get("userJwt"));
};

const useAuth = () => {};

export default useAuth;
export { setUser, getUser };

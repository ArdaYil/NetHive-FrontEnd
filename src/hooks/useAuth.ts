import jwtDecode from "jwt-decode";
import UserObject from "../classes/UserObject";
import { User } from "../httpServices/UserService";
import LocalStorageClient from "../services/LocalStorageClient";

const AuthLocalStorageClient = new LocalStorageClient<string>();

const setUser = (jwt: string) => {
  AuthLocalStorageClient.set("userJwt", jwt);
};

const getUser = (): UserObject | undefined => {
  const jwt = AuthLocalStorageClient.get("userJwt");

  if (!jwt) return;

  const user: User = jwtDecode(jwt);

  if (!user) return;

  return new UserObject(user);
};

const useAuth = () => {};

export default useAuth;
export { getUser, setUser };

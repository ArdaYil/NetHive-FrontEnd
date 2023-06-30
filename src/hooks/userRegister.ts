import { useMutation, useQuery } from "@tanstack/react-query";
import UserService, { User } from "../httpServices/UserService";
import { AxiosError, AxiosResponseHeaders } from "axios";
import { Response } from "../httpServices/ApiClient";

export interface RegisterBody {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  newsletter: boolean;
  termsOfService: boolean;
}

type SuccessFunction = (data: User, headers: AxiosResponseHeaders) => void;
type ErrorFunction = (error: AxiosError) => void;

const useRegister = (
  data: RegisterBody,
  onSuccess: SuccessFunction,
  onError: ErrorFunction
) =>
  useMutation<Response<User>>({
    mutationKey: ["users"],
    mutationFn: () => UserService.post<RegisterBody>(data),
    onSuccess: ({ data, headers }) => onSuccess(data, headers),
    onError: (error) => onError(error as AxiosError),
  });

export default useRegister;

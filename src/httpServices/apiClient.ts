import axios, { AxiosResponse, AxiosResponseHeaders } from "axios";
import api from "../../config/default";

const apiUrl = api.apiUrl;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export interface QueryOptions<T> {
  queryObject: T;
  findOne: boolean;
  query: string;
}

export interface Response<T> {
  data: T;
  headers: AxiosResponseHeaders;
}

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public get() {
    return axiosInstance
      .get<Response<T>>(this.endpoint)
      .then((res) => ({ data: res.data, headers: res.headers }));
  }

  public post<K>(data: K) {
    return axiosInstance
      .post<Response<T>>(this.endpoint, data)
      .then((res) => ({ data: res.data, headers: res.headers } as Response<T>));
  }
}

export default APIClient;

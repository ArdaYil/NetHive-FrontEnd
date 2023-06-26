import axios from "axios";
import api from "../../config/default";

const apiUrl = api.apiUrl;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

class APIClient<T> {
  public get<T>() {
    return axiosInstance.get("test").then((res) => res.data);
  }
}

export default APIClient;

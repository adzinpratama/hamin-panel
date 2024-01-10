import axios from "axios";
import { getCookie } from "../utils/supports";

declare interface Param {
  messageValidationError?: Boolean;
}

export function useAxios<T>(param: Param = { messageValidationError: true }) {
  let config = import.meta.env;
  const axiosClient = axios.create({
    baseURL: `${config.VITE_API_URL}${config.VITE_API_VERSION}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  let token = getCookie("access_token");

  axiosClient.interceptors.request.use((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  axiosClient.interceptors.request.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
    }
  );

  return axiosClient;
}

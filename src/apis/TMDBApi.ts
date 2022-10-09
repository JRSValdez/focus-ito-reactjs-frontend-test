import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

const handleError = (error: AxiosError) => {
  if (!error.response) {
    return { error: "UNHANDLED ERROR", data: {} };
  } else {
    if (error != null && error.response != null) {
      if (error.response.status === 401) {
        //invalid Token. Redirect to login
        api.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("token");
        window.location.href = "/login";
        return { success: false, error: error.response.data, data: {} };
      } else {
        return { success: false, error: error.response.data, data: {} };
      }
    } else {
      return { success: false, error: "UNHANDLED ERROR", data: {} };
    }
  }
};

const api = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

api.interceptors.request.use(function (config: AxiosRequestConfig) {
  const api_key = process.env.REACT_APP_TMDB_API_KEY;
  config.params = { ...config.params, api_key };
  return config;
});

api.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    return handleError(error);
  }
);

export default api;

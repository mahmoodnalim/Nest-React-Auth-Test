import axios from "axios";
import AppConstants from "../utils/AppConstants";

const apiService = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: sessionStorage.getItem(
      AppConstants.APP_AUTH_TOKEN_STORAGE_KEY
    ),
  },
});

apiService.interceptors.response.use((response)=>response,(error)=>Promise.reject(error.response))

export default apiService;

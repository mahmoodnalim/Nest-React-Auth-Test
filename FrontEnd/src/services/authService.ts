import { LoginUser, RegisterUser } from "../types/auth";
import AppConstants from "../utils/AppConstants";
import apiService from "./apiService";

async function login(user: LoginUser) {
  return await apiService.post("/auth/login", user);
}

async function register(user: RegisterUser) {
    return await apiService.post("/auth/register", user);
}

function saveToken(token: string, shouldRemember: boolean = false) {
  sessionStorage.setItem(AppConstants.APP_AUTH_TOKEN_STORAGE_KEY, token);
  if (shouldRemember)
    localStorage.setItem(AppConstants.APP_AUTH_TOKEN_STORAGE_KEY, token);
}

function getToken() {
 let token =  sessionStorage.getItem(AppConstants.APP_AUTH_TOKEN_STORAGE_KEY);
  if (!token)
   token = localStorage.getItem(AppConstants.APP_AUTH_TOKEN_STORAGE_KEY);
   if(token){
    saveToken(token)
   }
   return token;
}

function removeToken() {
 sessionStorage.removeItem(AppConstants.APP_AUTH_TOKEN_STORAGE_KEY);
 localStorage.removeItem(AppConstants.APP_AUTH_TOKEN_STORAGE_KEY);
}

export default {
  login,
  register,
  saveToken,
  getToken,
  removeToken
};


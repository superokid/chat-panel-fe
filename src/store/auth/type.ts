import { AxiosResponse } from 'axios';
import { Response } from 'store/type';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface AuthState {
  auth: Auth | null;
}

export interface LoginParam {
  username: string;
  password: string;
}

export interface Auth {
  id: number;
  name: string;
  email: string;
  token: string;
}

interface LoginResponse extends Response {
  data: Auth;
}

export interface LoginAction {
  type: typeof LOGIN_SUCCESS;
  payload: AxiosResponse<LoginResponse>;
}

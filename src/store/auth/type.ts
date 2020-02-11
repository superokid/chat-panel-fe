import { AxiosResponse } from 'axios';
import { Response } from 'store/type';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface AuthState {
  auth: string;
}

export interface LoginParam {
  username: string;
  password: string;
}

interface LoginResponse extends Response {
  data: string;
}

export interface LoginAction {
  type: typeof LOGIN_SUCCESS;
  payload: AxiosResponse<LoginResponse>;
}

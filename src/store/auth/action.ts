import { Dispatch } from 'redux';
import { LoginParam } from './type';
import { loginApi } from 'modules/api';
import history from 'modules/router/history';
import { error } from '../global/action';
import axios from 'modules/axios';

export const login = (data: LoginParam) => async (dispatch: Dispatch) => {
  try {
    const res = await loginApi(data);
    axios.defaults.headers.common['authorization'] = `Bearer ${res.data.data.token}`;
    history.push('dashboard');
  } catch (err) {
    dispatch(error(err));
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    axios.defaults.headers.common['authorization'] = '';
    history.push('/');
  } catch (err) {
    dispatch(error(err));
  }
};

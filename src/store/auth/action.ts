import { Dispatch } from 'redux';
import { LoginParam, LOGIN_SUCCESS } from './type';
import { loginApi } from 'modules/api';
import history from 'modules/router/history';
import { error } from '../global/action';
import axios from 'modules/axios';

export const login = (data: LoginParam) => async (dispatch: Dispatch) => {
  try {
    const res = await loginApi(data);
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.token}`;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res
    });
    history.push('dashboard');
    return res;
  } catch (err) {
    dispatch(error(err));
    return err;
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    axios.defaults.headers.common['Authorization'] = '';
    localStorage.clear();
    history.push('/');
  } catch (err) {
    dispatch(error(err));
  }
};

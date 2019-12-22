import { Dispatch } from 'redux';
import { SET_MODAL_OPEN, SET_MODAL_CLOSE } from './type';
import { SNACKBAR_CLEAR, ERROR, SUCCESS } from 'store/global/type';

export const snackbarClear = () => async (dispatch: Dispatch) => {
  dispatch({
    type: SNACKBAR_CLEAR
  });
};

export const success = () => {
  return {
    type: SUCCESS,
    snackbarMessage: 'success'
  };
};

export const error = (err: any) => {
  if (err?.response.data?.meta?.message) {
    return {
      type: ERROR,
      snackbarMessage: err.response.data.meta.message
    };
  }
  if ((err || {}).message === 'Network Error') {
    return {
      type: ERROR,
      snackbarMessage: 'Network Error'
    };
  }
  return {
    type: ERROR,
    snackbarMessage: 'Something Error'
  };
};

export const setModal = (isOpen: boolean, modalName?: string): any => (dispatch: Dispatch) => {
  if (isOpen) {
    dispatch({
      type: SET_MODAL_OPEN,
      modalName
    });
  } else {
    dispatch({
      type: SET_MODAL_CLOSE
    });
  }
};

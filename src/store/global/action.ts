import { Dispatch } from 'redux';

export const snackbarClear = () => async (dispatch: Dispatch) => {
  dispatch({
    type: 'SNACKBAR_CLEAR'
  });
};

export const success = () => {
  return {
    type: 'SUCCESS',
    snackbarMessage: 'success'
  };
};

export const error = (err: Error) => {
  if ((err || {}).message === 'Network Error') {
    return {
      type: 'ERROR',
      snackbarMessage: 'Network Error'
    };
  }
  return {
    type: 'ERROR',
    snackbarMessage: 'Something Error'
  };
};

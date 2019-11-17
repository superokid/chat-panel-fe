import { SNACKBAR_CLEAR, SUCCESS, ERROR, GlobalState, IGlobalStateAction } from './type';

const INITIAL_STATE: GlobalState = {
  snackbarIsOpen: false,
  snackbarType: 'error',
  snackbarMessage: ''
};

export default (state = INITIAL_STATE, action: IGlobalStateAction) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        snackbarIsOpen: true,
        snackbarType: 'success',
        snackbarMessage: action.snackbarMessage
      };
    case ERROR:
      return {
        ...state,
        snackbarIsOpen: true,
        toastType: 'error',
        snackbarMessage: action.snackbarMessage
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        snackbarIsOpen: false
      };
    default:
      return state;
  }
};

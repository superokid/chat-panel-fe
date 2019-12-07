import {
  SNACKBAR_CLEAR,
  SUCCESS,
  ERROR,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  GlobalState,
  IGlobalStateAction
} from './type';

const INITIAL_STATE: GlobalState = {
  snackbarIsOpen: false,
  snackbarType: 'error',
  snackbarMessage: '',
  modalIsOpen: false,
  modalName: ''
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
    case SET_MODAL_OPEN:
      return {
        ...state,
        modalIsOpen: true,
        modalName: action.modalName
      };
    case SET_MODAL_CLOSE:
      return {
        ...state,
        modalIsOpen: false
      };
    default:
      return state;
  }
};

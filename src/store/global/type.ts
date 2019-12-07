export const SNACKBAR_CLEAR = 'GLOBAL/SNACKBAR_CLEAR';
export const SUCCESS = 'GLOBAL/SUCCESS';
export const ERROR = 'GLOBAL/ERROR';
export const SET_MODAL_OPEN = 'GLOBAL/SET_MODAL_OPEN';
export const SET_MODAL_CLOSE = 'GLOBAL/SET_MODAL_CLOSE';

export interface GlobalState {
  snackbarIsOpen: boolean;
  snackbarType: string;
  snackbarMessage: string;
  modalIsOpen: boolean;
  modalName: string;
}

export interface IGlobalStateAction {
  type:
    | typeof SUCCESS
    | typeof ERROR
    | typeof SNACKBAR_CLEAR
    | typeof SET_MODAL_OPEN
    | typeof SET_MODAL_CLOSE;
  snackbarMessage: string;
  modalName: string;
}

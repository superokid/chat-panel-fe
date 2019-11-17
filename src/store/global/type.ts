export const SNACKBAR_CLEAR = 'SNACKBAR_CLEAR';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export interface GlobalState {
  snackbarIsOpen: boolean;
  snackbarType: string;
  snackbarMessage: string;
}

export interface IGlobalStateAction {
  type: typeof SUCCESS | typeof ERROR | typeof SNACKBAR_CLEAR;
  snackbarMessage: string;
}

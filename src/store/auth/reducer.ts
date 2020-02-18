import { LOGIN_SUCCESS, LoginAction, AuthState } from './type';

const INITIAL_STATE: AuthState = {
  auth: null
};

export default (state = INITIAL_STATE, action: LoginAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload.data.data
      };
    default:
      return state;
  }
};

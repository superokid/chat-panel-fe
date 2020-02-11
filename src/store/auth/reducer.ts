import { LOGIN_SUCCESS, LoginAction, AuthState } from './type';

const INITIAL_STATE: AuthState = {
  auth: ''
};

export default (state = INITIAL_STATE, action: LoginAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        staffs: action.payload.data.data
      };
    default:
      return state;
  }
};

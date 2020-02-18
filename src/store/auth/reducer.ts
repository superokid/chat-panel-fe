import { LOGIN_SUCCESS, LoginAction, Auth } from './type';

const INITIAL_STATE: Auth = {
  id: undefined,
  name: undefined,
  email: undefined,
  token: undefined
};

export default (state = INITIAL_STATE, action: LoginAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload.data.data
      };
    default:
      return state;
  }
};

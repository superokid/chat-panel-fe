import { GET_STAFF_SUCCESS, IGetStaffAction } from './type';

const INITIAL_STATE = {
  staff: {}
};

export default (state = INITIAL_STATE, action: IGetStaffAction) => {
  switch (action.type) {
    case GET_STAFF_SUCCESS:
      return {
        ...state,
        staff: action.payload
      };
    default:
      return state;
  }
};

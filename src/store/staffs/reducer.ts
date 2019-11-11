import { GET_STAFFS_SUCCESS, IGetStaffsAction, StaffsState } from './type';

const INITIAL_STATE: StaffsState = {
  staffs: [],
  staff: null
};

export default (state = INITIAL_STATE, action: IGetStaffsAction) => {
  switch (action.type) {
    case GET_STAFFS_SUCCESS:
      return {
        ...state,
        staffs: action.payload.data.data
      };
    default:
      return state;
  }
};

import { GET_STAFFS_SUCCESS, GET_STAFF_SUCCESS } from './type';
import { getStaffsApi, getStaffApi } from 'modules/api';
import { error } from '../global/action';

export const getStaffs = () => async (dispatch: any) => {
  try {
    const res = await getStaffsApi();
    dispatch({
      type: GET_STAFFS_SUCCESS,
      payload: res
    });
  } catch (err) {
    dispatch(error(err));
  }
};

export const getStaff = (data: number) => async (dispatch: any) => {
  try {
    const res = await getStaffApi(data);
    dispatch({
      type: GET_STAFF_SUCCESS,
      payload: res
    });
  } catch (err) {
    dispatch(error(err));
  }
};

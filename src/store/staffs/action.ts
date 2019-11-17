import { Dispatch } from 'redux';
import { GET_STAFFS_SUCCESS, GET_STAFF_SUCCESS, IPostStaff } from './type';
import { getStaffsApi, getStaffApi, postStaffApi } from 'modules/api';
import { success, error } from '../global/action';

export const getStaffs = () => async (dispatch: Dispatch) => {
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

export const getStaff = (data: number) => async (dispatch: Dispatch) => {
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

export const postStaff = (data: IPostStaff) => async (dispatch: Dispatch) => {
  try {
    const res = await postStaffApi(data);
    if (res) {
      dispatch(success());
    }
  } catch (err) {
    dispatch(error(err));
  }
};

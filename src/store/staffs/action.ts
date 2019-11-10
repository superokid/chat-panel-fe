import { GET_STAFF_SUCCESS } from './type';
import { getStaffApi } from 'modules/api';

export const getStaff = (data: number) => async (dispatch: any) => {
  try {
    const res = await getStaffApi(data);
    dispatch({
      type: GET_STAFF_SUCCESS,
      payload: res
    });
    console.log(res);
  } catch (err) {
    // dispatch(error({ err }));
  }
};

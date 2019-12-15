import { Dispatch } from 'redux';
import { PostAssignStaffParam } from './type';
import { postAssignStaffApi } from 'modules/api';
import { success, error, setModal } from '../global/action';

export const postAssignStaff = (body: PostAssignStaffParam) => async (dispatch: Dispatch) => {
  try {
    await postAssignStaffApi(body);
    dispatch(success());
    setModal(false);
  } catch (err) {
    dispatch(error(err));
  }
};

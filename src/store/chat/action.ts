import { Dispatch } from 'redux';
import { GET_CONVERSATION_STAFF_SUCCESS, GET_MESSAGES_SUCCESS } from './type';
import { getConversationStaffApi, getMessagesApi } from 'modules/api';
import { error } from '../global/action';

export const getConversationStaff = () => async (dispatch: Dispatch) => {
  try {
    const res = await getConversationStaffApi();
    dispatch({
      type: GET_CONVERSATION_STAFF_SUCCESS,
      payload: res
    });
  } catch (err) {
    dispatch(error(err));
  }
};

export const getMessages = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res = await getMessagesApi(id);
    dispatch({
      type: GET_MESSAGES_SUCCESS,
      payload: res
    });
  } catch (err) {
    dispatch(error(err));
  }
};

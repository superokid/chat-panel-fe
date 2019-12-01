import { Dispatch } from 'redux';
import moment from 'moment';
import {
  GET_CONVERSATION_STAFF_SUCCESS,
  SET_CONVERSATION_ACTIVE_SUCCESS,
  GET_MESSAGES_SUCCESS,
  SET_MESSAGE_SUCCESS
} from './type';
import { getConversationStaffApi, getMessagesApi } from 'modules/api';
import socket from 'modules/socket';
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

export const setConversationActive = (val: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: SET_CONVERSATION_ACTIVE_SUCCESS,
      payload: val
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
      payload: res,
      id
    });
  } catch (err) {
    dispatch(error(err));
  }
};

export const setMessage = (body: { conversationId: number; message: string }) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({
      type: SET_MESSAGE_SUCCESS,
      payload: {
        actime: moment().format(),
        message: body.message,
        type: 'out'
      },
      id: body.conversationId
    });
  } catch (err) {
    dispatch(error(err));
  }
};

export const postMessage = (body: { conversationId: number; message: string }) => async (
  dispatch: Dispatch
) => {
  try {
    socket.emit('chat message', body);
  } catch (err) {
    dispatch(error(err));
  }
};

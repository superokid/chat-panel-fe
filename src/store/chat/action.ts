import { Dispatch } from 'redux';
import moment from 'moment';
import {
  GET_CONVERSATION_STAFF_SUCCESS,
  SET_CONVERSATION_ACTIVE_SUCCESS,
  GET_MESSAGES_SUCCESS,
  SET_MESSAGE_SUCCESS,
  UPDATE_MESSAGE_SUCCESS,
  GET_INTEGRATION_TOKEN_SUCCESS,
  POST_INTEGRATION_MESSAGES_SUCCESS,
  SendIntegrationMessagesParam
} from './type';
import {
  getConversationStaffApi,
  getMessagesApi,
  getIntegrationTokenApi,
  postIntegrationMessagesApi,
  postMessageApi
} from 'modules/api';
import { CardProps } from 'views/Chat/Side/units/Card';
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

export const setConversationActive = (val: CardProps) => async (dispatch: Dispatch) => {
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

export const setMessage = (body: any) => async (dispatch: Dispatch) => {
  try {
    if (body.type === 'out' || body.type === 'in') {
      dispatch({
        type: SET_MESSAGE_SUCCESS,
        payload: {
          actime: moment().format(),
          message: body.message,
          type: body.type,
          waId: body.waId,
          status: undefined
        },
        id: body.conversationId
      });
    }
    if (body.status) {
      dispatch({
        type: UPDATE_MESSAGE_SUCCESS,
        payload: {
          waId: body.waId,
          status: body.status
        },
        id: body.conversationId
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(error(err));
  }
};

export const postMessage = (body: {
  conversationId: number;
  message: string;
  phone: string;
}) => async (dispatch: Dispatch, getState: any) => {
  try {
    const token = getState().chat.integrationToken;
    // socket.emit('chat message', body);
    await postMessageApi({ ...body, token: token.access_token });
    // dispatch({
    //   type: SET_MESSAGE_SUCCESS,
    //   payload: {
    //     actime: moment().format(),
    //     message: body.message,
    //     type: 'out'
    //   },
    //   id: body.conversationId
    // });
  } catch (err) {
    dispatch(error(err));
  }
};

export const getIntegrationToken = () => async (dispatch: Dispatch) => {
  try {
    const res = await getIntegrationTokenApi();
    dispatch({
      type: GET_INTEGRATION_TOKEN_SUCCESS,
      payload: res
    });
  } catch (err) {
    dispatch(error(err));
  }
};

export const postIntegrationMessages = (body: SendIntegrationMessagesParam) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await postIntegrationMessagesApi(body);
    dispatch({
      type: POST_INTEGRATION_MESSAGES_SUCCESS,
      payload: res
    });
  } catch (err) {
    dispatch(error(err));
  }
};

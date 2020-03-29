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
  SET_READ,
  SendIntegrationMessagesParam,
  Message
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
import fileTypeToMediaType from 'helpers/fileTypeToMediaType';

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

export const setMessage = (body: Message & { conversationId: number }) => async (
  dispatch: Dispatch
) => {
  try {
    const { conversationId, type, waId, status } = body;
    if (type === 'out' || type === 'in') {
      dispatch({
        type: SET_MESSAGE_SUCCESS,
        payload: {
          ...body,
          actime: moment().format(),
          status: undefined
        },
        id: conversationId
      });
    }
    if (status) {
      dispatch({
        type: UPDATE_MESSAGE_SUCCESS,
        payload: {
          waId,
          status
        },
        id: conversationId
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(error(err));
  }
};

export interface PostMessageParam {
  conversationId: number;
  message?: string;
  mediaId?: string;
  fileType?: string; // mime
  phone: string;
}

export const postMessage = (body: PostMessageParam) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    const token = getState().chat.integrationToken;
    // socket.emit('chat message', body);
    const res = await postMessageApi({ ...body, token: token.access_token });
    // conversationId, waId, status
    dispatch({
      type: SET_MESSAGE_SUCCESS,
      payload: {
        actime: moment().format(),
        message: body.message,
        waId: res.data.data.waId,
        mediaId: body.mediaId,
        mediaType: fileTypeToMediaType(body.fileType),
        type: 'out'
      },
      id: body.conversationId
    });
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

export const setRead = () => (dispatch: Dispatch, getState: any) => {
  const { id } = getState().chat.activeConversation;

  dispatch({
    type: SET_READ,
    payload: id
  });
};

import { AxiosResponse } from 'axios';
import { Response } from 'store/type';

export const GET_CONVERSATION_STAFF_REQUEST = 'GET_CONVERSATION_STAFF_REQUEST';
export const GET_CONVERSATION_STAFF_SUCCESS = 'GET_CONVERSATION_STAFF_SUCCESS';
export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export interface ChatState {
  conversations: Conversation[];
  messages: Message[];
}

export interface Conversation {
  id: number;
  phoneNumber: string;
  message: string;
  actime: Date;
}

export interface Message {
  type: string;
  message: string;
  actime: Date;
}

interface GetConversationStaffResponse extends Response {
  data: Conversation[];
}

interface GetMessagesResponse extends Response {
  data: Message[];
}

export interface GetConversationStaffAction {
  type: typeof GET_CONVERSATION_STAFF_SUCCESS;
  payload: AxiosResponse<GetConversationStaffResponse>;
}

export interface GetMessagesAction {
  type: typeof GET_MESSAGES_SUCCESS;
  payload: AxiosResponse<GetMessagesResponse>;
}

export type Action = GetConversationStaffAction | GetMessagesAction;

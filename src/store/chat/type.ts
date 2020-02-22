import { AxiosResponse } from 'axios';
import { Response } from 'store/type';
import { CardProps } from 'views/Chat/Side/units/Card';

export const GET_CONVERSATION_STAFF_REQUEST = 'GET_CONVERSATION_STAFF_REQUEST';
export const GET_CONVERSATION_STAFF_SUCCESS = 'GET_CONVERSATION_STAFF_SUCCESS';
export const SET_CONVERSATION_ACTIVE_SUCCESS = 'SET_CONVERSATION_ACTIVE_SUCCESS';
export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const SET_MESSAGE_SUCCESS = 'SET_MESSAGE_SUCCESS';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const GET_INTEGRATION_TOKEN_SUCCESS = 'GET_INTEGRATION_TOKEN_SUCCESS';
export const POST_INTEGRATION_MESSAGES_SUCCESS = 'POST_INTEGRATION_MESSAGES_SUCCESS';

export interface ChatState {
  conversations: Conversation[];
  activeConversation: CardProps;
  messages: { [index: number]: Message[] };
  integrationToken: IntegrationToken;
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

export interface IntegrationToken {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
}

interface GetConversationStaffResponse extends Response {
  data: Conversation[];
}

interface GetMessagesResponse extends Response {
  data: Message[];
}

interface GetIntegrationTokenResponse extends Response {
  data: IntegrationToken;
}

export interface GetConversationStaffAction {
  type: typeof GET_CONVERSATION_STAFF_SUCCESS;
  payload: AxiosResponse<GetConversationStaffResponse>;
}

export interface SetConversationActiveAction {
  type: typeof SET_CONVERSATION_ACTIVE_SUCCESS;
  payload: CardProps;
}

export interface GetMessagesAction {
  type: typeof GET_MESSAGES_SUCCESS;
  payload: AxiosResponse<GetMessagesResponse>;
  id: number;
}

export interface SetMessageAction {
  type: typeof SET_MESSAGE_SUCCESS;
  payload: Message;
  id: number;
}

export interface GetIntegrationTokenAction {
  type: typeof GET_INTEGRATION_TOKEN_SUCCESS;
  payload: AxiosResponse<GetIntegrationTokenResponse>;
}

export interface SendIntegrationMessagesParam {
  text: string;
  id: number;
}

export type Action =
  | GetConversationStaffAction
  | SetConversationActiveAction
  | GetMessagesAction
  | SetMessageAction
  | GetIntegrationTokenAction;

import {
  GET_CONVERSATION_STAFF_SUCCESS,
  SET_CONVERSATION_ACTIVE_SUCCESS,
  GET_MESSAGES_SUCCESS,
  Action,
  ChatState
} from './type';

const INITIAL_STATE: ChatState = {
  conversations: [],
  activeConversation: -1,
  messages: []
};

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_CONVERSATION_STAFF_SUCCESS:
      return {
        ...state,
        conversations: action.payload.data.data
      };
    case SET_CONVERSATION_ACTIVE_SUCCESS:
      return {
        ...state,
        activeConversation: action.payload
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.data.data
      };
    default:
      return state;
  }
};

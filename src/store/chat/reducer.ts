import { GET_CONVERSATION_STAFF_SUCCESS, GET_MESSAGES_SUCCESS, Action, ChatState } from './type';

const INITIAL_STATE: ChatState = {
  conversations: [],
  messages: []
};

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_CONVERSATION_STAFF_SUCCESS:
      return {
        ...state,
        conversations: action.payload.data.data
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

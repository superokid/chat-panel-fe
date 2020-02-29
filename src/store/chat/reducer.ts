import {
  GET_CONVERSATION_STAFF_SUCCESS,
  SET_CONVERSATION_ACTIVE_SUCCESS,
  GET_MESSAGES_SUCCESS,
  SET_MESSAGE_SUCCESS,
  UPDATE_MESSAGE_SUCCESS,
  GET_INTEGRATION_TOKEN_SUCCESS,
  Action,
  ChatState
} from './type';

const INITIAL_STATE: ChatState = {
  conversations: [],
  activeConversation: {
    name: '',
    id: -1,
    phoneNumber: '',
    actime: undefined,
    message: ''
  },
  messages: {},
  integrationToken: {}
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
        messages: {
          [action.id]: action.payload.data.data
        }
      };
    case SET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: {
          [action.id]: [...(state.messages[action.id] || []), action.payload]
        }
      };
    case UPDATE_MESSAGE_SUCCESS:
      const newState = (state.messages[action.id] || []).map(item => {
        if (item.waId === action.payload.waId) {
          return {
            ...item,
            status: action.payload.status
          };
        }
        return item;
      });
      return {
        ...state,
        messages: {
          [action.id]: newState
        }
      };
    case GET_INTEGRATION_TOKEN_SUCCESS:
      return {
        ...state,
        integrationToken: action.payload.data.data
      };
    default:
      return state;
  }
};

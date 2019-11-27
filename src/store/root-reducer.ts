import { combineReducers } from 'redux';

import chat from './chat';
import global from './global/reducer';
import staffs from './staffs';

const rootReducer = combineReducers({
  chat,
  global,
  staffs
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

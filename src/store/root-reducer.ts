import { combineReducers } from 'redux';

import auth from './auth/reducer';
import chat from './chat/reducer';
import global from './global/reducer';
import staffs from './staffs/reducer';

const rootReducer = combineReducers({
  auth,
  chat,
  global,
  staffs
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

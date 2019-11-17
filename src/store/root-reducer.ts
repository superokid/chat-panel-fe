import { combineReducers } from 'redux';

import global from './global/reducer';
import staffs from './staffs';

const rootReducer = combineReducers({
  global,
  staffs
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

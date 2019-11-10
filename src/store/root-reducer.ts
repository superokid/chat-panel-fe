import { combineReducers } from 'redux';

import staffs from './staffs';

const rootReducer = combineReducers({
  staffs
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

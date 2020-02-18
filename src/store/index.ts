import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import ReduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);

export { store, persistor };

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({});

let store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(ReduxThunk)));
let persistor = persistStore(store);

export { store, persistor };

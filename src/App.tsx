import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthWrapper from './views/AuthWrapper';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthWrapper />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import AuthWrapper from './views/AuthWrapper';

const reduxStore = configureStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={reduxStore}>
        <AuthWrapper />
      </Provider>
    </div>
  );
};

export default App;

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Login';

const history = createBrowserHistory();

const AuthWrapper: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} exact></Route>
      </Switch>
    </Router>
  );
};

export default AuthWrapper;

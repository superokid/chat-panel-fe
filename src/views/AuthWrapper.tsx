import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Login';
import Chat from './Chat';
import Dashboard from './Dashboard';

const history = createBrowserHistory();

const AuthWrapper: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/chat" component={Chat} exact></Route>
        <Route path="/dashboard" component={Dashboard} exact></Route>
      </Switch>
    </Router>
  );
};

export default AuthWrapper;

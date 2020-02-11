import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from 'modules/router/history';
import { routes } from 'modules/router';
import Snackbar from '../components/Snackbar';
import Modal from '../components/Modal';

const AuthWrapper: React.FC = () => {
  return (
    <Router history={history}>
      <Snackbar />
      <Modal />
      <Switch>
        {routes.map((item, i) => {
          return <Route key={i} path={item.path} component={item.component} exact={item.exact} />;
        })}
      </Switch>
    </Router>
  );
};

export default AuthWrapper;

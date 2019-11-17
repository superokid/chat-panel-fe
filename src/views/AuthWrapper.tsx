import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'modules/router';
import Snackbar from '../components/Snackbar';

const AuthWrapper: React.FC = () => {
  return (
    <Router>
      <Snackbar />
      <Switch>
        {routes.map((item, i) => {
          return <Route key={i} path={item.path} component={item.component} exact={item.exact} />;
        })}
      </Switch>
    </Router>
  );
};

export default AuthWrapper;

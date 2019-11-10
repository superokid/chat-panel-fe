import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'modules/router';

const AuthWrapper: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((item, i) => {
          return <Route key={i} path={item.path} component={item.component} exact={item.exact} />;
        })}
      </Switch>
    </Router>
  );
};

export default AuthWrapper;

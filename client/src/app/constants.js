import React from 'react';
import { Route, Switch } from 'react-router';

export const Routes = () => (
  <Switch>
    <Route path="/about" />
  </Switch>
);

export const routesData = [
  {
    root: '/',
    subRoutes: [{ path: '/about', exact: true, menuName: 'About Me' }],
  },
];

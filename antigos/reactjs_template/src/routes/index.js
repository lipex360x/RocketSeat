import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}

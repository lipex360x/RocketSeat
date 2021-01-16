import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'

const Routes = () => (
  <Switch>
    <Route path="/" component={Login} exact />
  </Switch>
)

export default Routes

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import PTypes from 'prop-types';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    toast.error('Necessário Logar Primeiro');
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PTypes.bool,
  component: PTypes.oneOfType([PTypes.element, PTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

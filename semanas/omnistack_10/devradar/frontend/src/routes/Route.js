import React from 'react';
import { Route } from 'react-router-dom';
import PTypes from 'prop-types';

import DefaultLayout from '~/pages/_layouts/default';

export default function RouteWrapper({ component: Component, ...rest }) {
  const Layout = DefaultLayout;

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

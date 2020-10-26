import React from 'react';
import PTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PTypes.element.isRequired,
};

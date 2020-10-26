import React from 'react';
import PTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PTypes.element.isRequired,
};

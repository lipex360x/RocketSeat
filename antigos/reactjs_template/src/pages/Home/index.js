import React from 'react';
import { connect } from '~/services/socket';

import { Container } from './styles';

export default function Home() {
  // connect();

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}

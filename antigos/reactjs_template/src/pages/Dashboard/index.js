import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import { SignOut } from '~/store/modules/auth/actions';

export default function Home() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(SignOut());
  }
  return (
    <Container>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </Container>
  );
}

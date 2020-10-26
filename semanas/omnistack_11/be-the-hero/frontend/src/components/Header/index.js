import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import Logo from '~/assets/logo.svg';

import { Container } from './styles';

export default function Header() {
  const ong = localStorage.getItem('ongName');
  const history = useHistory();

  function handleLogoff() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <img src={Logo} alt="Be the Hero" />
      <h2>Bem Vindo, {ong}</h2>
      <Link to="casos/novo" className="button red-button">
        Cadastrar novo Caso
      </Link>
      <button type="button" onClick={() => handleLogoff()}>
        <FiLogOut size={18} color="#e02041" />
      </button>
    </Container>
  );
}

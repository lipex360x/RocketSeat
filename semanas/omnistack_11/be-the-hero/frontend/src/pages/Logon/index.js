import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '~/services/api';

import Logo from '~/assets/logo.svg';
import Heroes from '~/assets/heroes.png';

import { Container } from './styles';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const user = await api.post('session', { id });

      if (!user.data) {
        alert('falha ao logar, dados inválidos');
        localStorage.clear();
        return;
      }

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', user.data.name);

      history.push('/profile');
    } catch (error) {
      alert('falha ao logar, erro de comunicação com a API');
      localStorage.clear();
      setId('');
    }
  }

  return (
    <Container>
      <form onSubmit={handleLogon}>
        <img src={Logo} alt="Be the Hero" />
        <h1>Faça seu Logon</h1>

        <input
          placeholder="Faça seu logon"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button type="submit" className="button red-button">
          Entrar
        </button>

        <Link to="/register" className="link">
          <FiLogIn color="#e02041" />
          Não tenho cadastro
        </Link>
      </form>

      <img src={Heroes} alt="Heroes" />
    </Container>
  );
}

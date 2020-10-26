import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '~/services/api';

import Logo from '~/assets/logo.svg';

import { Container, Content } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', data);
      alert(response.data.user);
      history.push('/');
    } catch (error) {
      alert('erro ao cadastrar, tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ong
          </p>
          <Link to="/" className="link">
            <FiArrowLeft color="#e02041" />
            Já possuo cadastro
          </Link>
        </div>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div>
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button type="submit" className="button red-button">
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}

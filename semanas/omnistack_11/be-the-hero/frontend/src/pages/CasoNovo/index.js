import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '~/services/api';

import Logo from '~/assets/logo.svg';

import { Container, Content } from './styles';

export default function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleNovoCaso(e) {
    const ongId = localStorage.getItem('ongId');
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('casos', data, {
        headers: {
          authorization: ongId,
        },
      });
      alert('cadastro realizado com sucesso');
      history.push('/profile');
    } catch (error) {
      alert('falha ao cadastrar, tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para econtrar um herói para resolver
            isso
          </p>
          <Link to="/profile" className="link">
            <FiArrowLeft color="#e02041" />
            Voltar para Home
          </Link>
        </div>

        <form onSubmit={handleNovoCaso}>
          <input
            autoFocus
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="button red-button">
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}

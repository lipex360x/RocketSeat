import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import api from '~/services/api';

import Header from '~/components/Header';

import { Container } from './styles';

export default function Profile() {
  const ongId = localStorage.getItem('ongId');
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    api
      .get('casos', {
        headers: {
          authorization: ongId,
        },
      })
      .then(res => {
        setCasos(res.data);
      });
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`caso/${id}`, {
        headers: {
          authorization: ongId,
        },
      });

      setCasos(casos.filter(c => c.id !== id));
    } catch (error) {
      alert('erro ao deletar caso');
    }
  }

  return (
    <Container>
      <Header />
      <h1>Casos Cadastrados</h1>
      <ul>
        {casos.map(caso => (
          <li key={caso.id}>
            <div>
              <strong>CASO</strong>
              <p>{caso.title}</p>

              <strong>DESCRIÇÃO</strong>
              <p>{caso.desciption}</p>

              <strong>VALOR</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(caso.value)}
              </p>
            </div>

            <button type="button" onClick={() => handleDelete(caso.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

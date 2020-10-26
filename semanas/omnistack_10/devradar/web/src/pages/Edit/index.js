import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import DevEdit from '~/components/DevEdit';

import { Container } from './styles';

export default function Edit({ match }) {
  const { id } = match.params;
  const [dev, setDev] = useState({});

  useEffect(() => {
    async function getDev() {
      const devio = await api.get(`/devs/${id}`);
      setDev(devio.data);
    }
    getDev();
  }, [id]);

  async function handleUpdate(data) {
    const response = await api.put(`/devs/update?id=${id}`, data);

    toast.success(`Dev ${response.data.name} atualizado com sucesso`);
    history.push('/');
  }

  return (
    <Container>
      <DevEdit initialData={dev} handleUpdate={handleUpdate} />
    </Container>
  );
}

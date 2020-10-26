import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import DevForm from '~/components/DevForm';
import Devs from '~/components/Devs';
import Table from '~/components/DataTable';

import { Container } from './styles';

export default function Home() {
  const [devs, setDevs] = useState([]);

  async function handleDelDev(id) {
    await api.delete(`/devs/delete/${id}`);

    setDevs(devs.filter(e => e._id !== id));
  }

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  return (
    <Container>
      <DevForm onSubmit={handleAddDev} />
      <Devs devs={devs} handleDelDev={handleDelDev} />
      <Table></Table>
    </Container>
  );
}

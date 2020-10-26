import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { FaList } from 'react-icons/fa';

import { Container } from './styles';

function DevEdit({ onSubmit, initialData, handleUpdate }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [dev, setDev] = useState({});

  const schema = Yup.object().shape({
    github_username: Yup.string().required('Informe seu Github'),
    techs: Yup.string().required('Informe pelo menos 1 tech'),
    latitude: Yup.number().required('Informe a Latitude'),
    longitude: Yup.number().required('Informe a Longitude'),
  });

  useEffect(() => {
    async function getDev() {
      const response = await initialData;
      if (response.techs) {
        response.techs = response.techs.join(', ');
        response.latitude = response.location.coordinates[0];
        response.longitude = response.location.coordinates[1];
        delete response.location;
      }
      setDev(response);
    }
    getDev();
  }, [initialData]);

  async function handleSubmit(data) {
    await handleUpdate(data);
  }

  return (
    <Container>
      <strong>Editar: {dev.name}</strong>
      <Form schema={schema} onSubmit={handleSubmit} initialData={dev}>
        <div className="bio">
          <img src={dev.avatar_url} alt="" />
          <p>{dev.bio || 'Bio não Cadastrada'}</p>
        </div>

        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <Input
            disabled
            name="github_username"
            id="github_username"
            onChange={e => setGithubUsername(e.target.value)}
            autoFocus
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <Input
            name="techs"
            id="techs"
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <Input
              name="latitude"
              id="latitude"
              onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <Input
              name="longitude"
              id="longitude"
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Editar Perfil</button>
        <Link to="/">
          <FaList />
          Voltar para Lista
        </Link>
      </Form>
    </Container>
  );
}

export default DevEdit;

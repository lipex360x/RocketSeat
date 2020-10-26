import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {} from 'react-icons/';

import { Container } from './styles';

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  const schema = Yup.object().shape({
    github_username: Yup.string().required('Informe seu Github'),
    techs: Yup.string().required('Informe pelo menos 1 tech'),
    latitude: Yup.number().required('Informe a Latitude'),
    longitude: Yup.number().required('Informe a Longitude'),
  });

  async function handleSubmit() {
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <Container>
      <strong>Cadastrar</strong>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <Input
            name="github_username"
            id="github_username"
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            autoFocus
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <Input
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <Input
              name="latitude"
              id="latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <Input
              name="longitude"
              id="longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}

export default DevForm;

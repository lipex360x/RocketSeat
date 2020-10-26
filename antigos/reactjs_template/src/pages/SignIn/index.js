import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { SignInRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Home() {
  const schema = Yup.object().shape({
    inputName: Yup.string().required('Digite um Texto'),
  });

  const dispatch = useDispatch();
  function handleSubmit({ inputName }, { resetForm }) {
    dispatch(SignInRequest(inputName));
    resetForm();
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="inputName" placeholder="Input Text" />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

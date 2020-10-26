import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { SignInSuccess } from './actions';

export function* signIn({ payload }) {
  const { inputName } = payload;
  yield put(SignInSuccess(inputName));
  toast.success(inputName);
  history.push('/dashboard');
}

export function signOut() {
  toast.warn('message');
  history.push('/login');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

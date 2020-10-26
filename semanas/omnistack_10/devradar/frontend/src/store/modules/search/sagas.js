import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

// import {} from './actions';

export function* NAME({ payload }) {
  yield console.tron.log(payload);
  const { github_username, techs, latitude, longitude } = payload;

  const response = yield call(api.post, '/devs', {
    github_username,
    techs,
    latitude,
    longitude,
  });

  console.log(response);
  // const { RETURN_VALUES } = response.data;

  // try {
  //   yield put(ACTION_SUCCESS(RETURN_VALUES));
  //   // history.push('/##ROUTE##');
  // } catch (error) {
  //   // yield put(#ACTION_FAILURE#());
  // }
}

export default all([takeLatest('@search/SEARCH_REQUEST', NAME)]);

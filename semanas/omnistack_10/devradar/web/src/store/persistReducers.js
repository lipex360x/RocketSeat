import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'devradar_web',
      storage,
      // whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};

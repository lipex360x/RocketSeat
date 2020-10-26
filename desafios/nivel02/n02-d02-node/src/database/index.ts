import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      port: process.env.NODE_ENV === 'test' ? 5433 : 5432,
      database:
        process.env.NODE_ENV === 'test'
          ? 'gostack_desafio06_tests'
          : defaultOptions.database,
    }),
  );
};

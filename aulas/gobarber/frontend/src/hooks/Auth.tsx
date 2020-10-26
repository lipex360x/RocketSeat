import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface CredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: object;
  signIn(crendentials: CredentialsProps): Promise<void>;
  signOut(): void;
}

interface UserAuthProps {
  user: object;
  token: string;
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserAuthProps>(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as UserAuthProps;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('@gobarber:user', JSON.stringify(user));
    localStorage.setItem('@gobarber:token', token);

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@gobarber:token');
    localStorage.removeItem('@gobarber:user');

    setData({} as UserAuthProps);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthProvider é necessário na API da aplicação');
  }
  return context;
}

export { AuthProvider, useAuth };

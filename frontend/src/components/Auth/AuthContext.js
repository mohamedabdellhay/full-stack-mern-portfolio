// AuthContext.js
import React, { createContext, useReducer } from 'react';
import { initialState, authReducer } from './authReducer';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
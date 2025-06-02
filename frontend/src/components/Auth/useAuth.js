import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export function useAuth() {
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: JSON.parse(user)
      });
    }
  }, [dispatch]);

  return {
    ...state,
    dispatch
  };
}

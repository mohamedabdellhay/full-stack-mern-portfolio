// authReducer.js
const initialState = {
    user: null, 
    isAuthenticated: false, 
    loading: false, 
    error: null, 
  };
  
  const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export { initialState, authReducer };
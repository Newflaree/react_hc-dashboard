// React
import { useReducer } from 'react';
// Context
import { AuthContext, authReducer } from './';


const AUTH_INITIAL_STATE =	{
  isLogged: false
}

export const AuthProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );

  const authLogin = () => {
    // TODO: Create useAuth
    console.log( 'Logging In' );
    dispatch({ type: '[AUTH] - LogIn' });
  }

  const authLogout = () => {
    // TODO: Create useAuth
    console.log( 'Logging Out' );
    dispatch({ type: '[AUTH] - LogOut' });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        authLogin,
        authLogout
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};

// React
import { useReducer } from 'react';
// Context
import { AuthContext, authReducer } from './';
import { useSwal } from '../../modules/dashboard/hooks';
import { appApi } from '../../api';


const AUTH_INITIAL_STATE =	{
  isLogged: false,
  user: undefined
}


export const AuthProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
  const { simpleSwal } = useSwal();

  const checkingCredentials = () => {}

  const authLogin = async ( email = '', password = '' ) => {
    try {
      const { data } = await appApi.post( '/admin/login' , { email, password } );

      localStorage.setItem( 'token', data.token )

      dispatch({
        type: '[AUTH] - LogIn',
        payload: data.user
      });
    } catch ( error ) {
      const message = error.response.data.message || error.response.data.errors[0].msg;

      simpleSwal( message, 'error' );
    }

  }

  const authLogout = () => {
    localStorage.removeItem( 'token' );
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

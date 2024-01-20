// React
import {
  useEffect,
  useContext
} from 'react';
// React Router Dom
import {
  useNavigate,
  Routes,
  Route
} from 'react-router-dom';
// Context
import { AuthContext } from '../context';
// Routes
import {
  AuthRoutes,
  DashboardRoutes
} from '../modules';


export const AppRouter = () => {
  const { isLogged } = useContext( AuthContext );
  const navigate = useNavigate();

  useEffect( () => {
    isLogged
      ? navigate( '/' )
      : navigate( '/auth' )
  }, [ isLogged ]);
   
  return (
    <Routes>
        <Route path='auth/*' element={ <AuthRoutes /> } />
        <Route path='/*' element={ <DashboardRoutes /> } />
    </Routes>
  );
}

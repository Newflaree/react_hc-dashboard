// React
import {
  useEffect,
  useContext
} from 'react';
// React Router Dom
import {
  useNavigate,
  Navigate,
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
   
  return (
    <Routes>
      {
        ( !isLogged )
          ? <Route path='/auth/*' element={ <AuthRoutes /> } />
          : <Route path='/*' element={ <DashboardRoutes /> } />
      }

      <Route path='/*' element={ <Navigate to='/auth/login' /> } />
    </Routes>
  );
}

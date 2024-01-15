import { Navigate, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../modules/auth/routes';
import { DashboardRoutes } from '../modules/dashboard/routes';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={ <AuthRoutes /> } />
      <Route path='/*' element={ <DashboardRoutes /> } />
    </Routes>
  );
}

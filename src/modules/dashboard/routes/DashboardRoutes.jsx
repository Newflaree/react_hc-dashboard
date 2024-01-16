// React Router Dom
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Pages
import {
  DashboardPage,
  NarratorsPage
} from '../pages';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <DashboardPage /> } />
      <Route path='/narrators' element={ <NarratorsPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
}

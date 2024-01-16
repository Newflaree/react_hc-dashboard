// React Router Dom
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Pages
import {
  BookingsPage,
  DashboardPage,
  MessagesPage,
  NarratorsPage,
  TagsPage,
  UsersPage
} from '../pages';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <DashboardPage /> } />
      <Route path='/bookings' element={ <BookingsPage /> } />
      <Route path='/messages' element={ <MessagesPage /> } />
      <Route path='/tags' element={ <TagsPage /> } />
      <Route path='/users' element={ <UsersPage /> } />
      <Route path='/narrators' element={ <NarratorsPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
}

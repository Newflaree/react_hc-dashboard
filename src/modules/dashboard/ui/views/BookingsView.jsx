// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Components
import { DashboardPaper } from '../components';


export const BookingsView = () => {
  return (
    <DashboardPaper pageTitle='Gestión de Reservas'>
      <Typography variant='h1'>
        BookingsView
      </Typography>
    </DashboardPaper>
  );
}

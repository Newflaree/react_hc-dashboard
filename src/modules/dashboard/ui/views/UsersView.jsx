// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Components
import { DashboardPaper } from '../components';


export const UsersView = () => {
  return (
    <DashboardPaper pageTitle='Gestión de Usuarios'>
      <Typography variant='h1'>
        UsersView
      </Typography>
    </DashboardPaper>
  );
}

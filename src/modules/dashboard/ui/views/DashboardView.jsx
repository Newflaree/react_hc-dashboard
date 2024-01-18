// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Components
import { DashboardPaper } from '../components';


export const DashboardView = () => {
  return (
    <DashboardPaper pageTitle='Resumen de Inicio'>
      <Typography variant='h1'>
        DashboardView
      </Typography>
    </DashboardPaper>
  );
}

// Material UI
import {
  ListItem,
  ListItemText
} from '@mui/material';
// Material Icons
import { Logout } from '@mui/icons-material';


export const SidebarLogout = () => {
  return (
    <ListItem
      button
      sx={{
        mt: 4,
        '&.Mui-selected': { backgroundColor: '#E8E8E8' }
      }}
    >
      <Logout sx={{ mr: 1, color: 'red' }} />
      <ListItemText primary='Cerrar Sesión' sx={{ color: 'red' }} />
    </ListItem>
  );
}

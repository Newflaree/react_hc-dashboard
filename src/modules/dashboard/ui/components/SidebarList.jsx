// React
import { Fragment } from 'react';
// Material UI
import {
  ListItem,
  ListItemText
} from '@mui/material';
// Material Icons
import {
  Home,
  Mic
} from '@mui/icons-material';


export const SidebarList = ({ handleNavigate }) => {
  return (
    <Fragment>
      <ListItem
        button
        onClick={ () => handleNavigate( '/' ) }
        sx={{
          ml: 1,
          '&:hover': { pr: 1 },
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Home sx={{ mr: 1, color: '#1D3B86' }} />
        <ListItemText primary='Inicio' sx={{ color: '#1D3B86' }} />
      </ListItem>

      <ListItem
        button
        onClick={ () => handleNavigate( '/narrators' ) }
        sx={{
          '&:hover': { mr: 1 },
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Mic
          sx={{
            mr: 1,
            '&:hover': { color: '#1D3B86' }
          }}
        />
        <ListItemText
          primary='Locutores'
          sx={{
            '&:hover': { color: '#1D3B86' },
          }}
        />
      </ListItem>
      {/*ListItem*/}
      {/*ListItem*/}
      <ListItem
        button
        sx={{
          '&:hover': { mr: 1 },
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Mic
          sx={{
            mr: 1,
            '&:hover': { color: '#1D3B86' }
          }}
        />
        <ListItemText
          primary='Locutores'
          sx={{
            '&:hover': { color: '#1D3B86' },
          }}
        />
      </ListItem>
      {/*ListItem*/}
      {/*ListItem*/}
      <ListItem
        button
        sx={{
          '&:hover': { mr: 1 },
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Mic
          sx={{
            mr: 1,
            '&:hover': { color: '#1D3B86' }
          }}
        />
        <ListItemText
          primary='Locutores'
          sx={{
            '&:hover': { color: '#1D3B86' },
          }}
        />
      </ListItem>
    </Fragment>
  );
}

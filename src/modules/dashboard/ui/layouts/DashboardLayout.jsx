// React
import {
  useEffect,
  useState
} from 'react';
// React Router Dom
import { useNavigate } from 'react-router-dom';
// Material UI
import {
  Box,
} from '@mui/material';
// Components
import {
  LoadingPage,
  Navbar,
  SidebarDesktop,
  SidebarMobile,
} from '../components';


const drawerWidth = 270;

export const DashboardLayout = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState( true );
  const navigate = useNavigate();

  useEffect( () => {
    loadingControl();
  }, [] );

  const loadingControl = () => {
    setTimeout( () => {
      setIsLoading( false );
    }, 700 );
  }

  const handleNavigate = ( to ) => {
    navigate( to )
  }

  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <Navbar />

      <SidebarDesktop
        drawerWidth={ drawerWidth } 
        handleNavigate={ handleNavigate }
      />

      <SidebarMobile
        drawerWidth={ drawerWidth } 
        handleNavigate={ handleNavigate }
      />

      <Box
        height='100vh'
        component='main'
        bgcolor='#E8E8E8'
        sx={{
          flexGrow: 1,
        }}
      >
        {
          isLoading
            ? <LoadingPage />
            : <>{ children }</>
        }
      </Box>
    </Box>
  );
}

// Material UI
import {
  Box,
  Container,
  Paper,
  Typography
} from '@mui/material';


export const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url("https://res.cloudinary.com/newflare/image/upload/v1705268137/zondzykpqtssek0eknco.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        { /*Sidebar*/ }
        <Container
          component='main'
          maxWidth='xs'
          sx={{
            margin: {
              xs: 0,
              md: 3
            },
            p: {
              xs: 3,
              md: 0
            }
          }}
        >
          <Paper
            elevation={ 3 }
            sx={{
              borderRadius: 4,
              width: {
                xs: 'xs',
                md: '400px'
              },
              p: 4,
              position: {
                sx: '',
                md: 'fixed'
              },
              right: 50,
              height: 'calc( 100vh - 50px )'
            }}
          >
            <Box
              display='flex'
              justifyContent='center'
              py={ 3 }
            >
              <img src='https://res.cloudinary.com/newflare/image/upload/v1702381830/demos/hc/w3bchuvv1acjdeje3jsz.png' alt='hc-logo' width={ 150 } />
            </Box>

            <Typography
              variant='h1'
              component='h1'
              sx={{
                fontSize: 40,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Iniciar Sesión
            </Typography>

            { children }
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

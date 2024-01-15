import {
  Button,
  FormControlLabel,
  Grid,
  Link,
  TextField
} from '@mui/material';


export const AuthLoginView = () => {
  return (
    <form>
      <TextField
        margin='normal'
        fullWidth
        label='Correo Electrónico'
        type='email'
        autoComplete='email'
        autoFocus
      />

      <TextField
        margin='normal'
        fullWidth
        label='Contraseña'
        type='password'
        autoComplete='current-password'
        autoFocus
      />

      <FormControlLabel
        control={
          <input
            type='checkbox'
            name='remenber'
          />
        }
        label='Recordarme'
      />

      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{
          bgcolor: 'primary',
          mt: 3,
          mb: 2
        }}
      >
        Iniciar Sesión
      </Button>

      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body1'>
            ¿Olvidaste tu contraseña?
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

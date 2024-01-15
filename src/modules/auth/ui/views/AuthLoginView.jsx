import {
  Button,
  FormControlLabel,
  Grid,
  Link,
  TextField
} from '@mui/material';


export const AuthLoginView = ({
  onSubmitForm,
  register,
  handleSubmit,
  errors,
  reset,
}) => {
  return (
    <form
      onSubmit={ handleSubmit( onSubmitForm ) }
    >
      <TextField
        margin='normal'
        fullWidth
        label='Correo Electrónico'
        type='email'
        autoComplete='email'
        autoFocus
        { ...register( 'email', {
          required: 'Este campo es obligatorio'
        })}
        error={ !!errors.email }
        helperText={ errors.email?.message }
      />

      <TextField
        margin='normal'
        fullWidth
        label='Contraseña'
        type='password'
        autoComplete='current-password'
        autoFocus
        { ...register( 'password', {
          required: 'Este campo es obligatorio'
        })}
        error={ !!errors.password }
        helperText={ errors.password?.message }
      />

      <FormControlLabel
        sx={{
          py: 2,
          ml: '1px'
        }}
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
          borderRadius: 4,
          p: 1,
          bgcolor: 'primary',
          mt: 3,
          mb: 2
        }}
      >
        Iniciar Sesión
      </Button>

      <Grid container mt={ 2 }>
        <Grid item xs>
          <Link href='#' variant='body1'>
            ¿Olvidaste tu contraseña?
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

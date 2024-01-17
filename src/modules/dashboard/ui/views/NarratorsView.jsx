// React
import { useState } from 'react';
// Material UI
import {
  Box,
  Button,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Typography
} from '@mui/material';
import { testNarratorsData } from '../../../../database';


export const NarratorsView = () => {
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ filteredLocutors, setFilteredLocutors ] = useState([]);

  const handleViewProfile = ( narratorId ) => {
    console.log( `Ver perfil del locutor con ID: ${ narratorId }` );
  }

  const handleDeleteNarrator = ( narratorId ) => {
    console.log( `Eliminar locutor con ID: ${ narratorId }` );
  }

  const handleSearch = ( event ) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm( searchTerm ); 
  }

  return (
    <Box
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Paper
        elevation={ 8 }
        sx={{ 
          p: {
            xs: 4,
            md: 6
          },
          width: {
            xs: 'calc( 100vw - 40px )',
            md: 'calc( 1000px - 70px )'
          },
          borderRadius: 4
        }}
      >
        <Grid
          container
          spacing={ 3 }
        >
          {/*Title*/}
          <Grid
            item
            mb={ 8 }
            xs={ 12 }
          >
            <Typography
              mt={ 2 }
              color='primary'
              variant='h2'
              component='h2'
            >
              Locutores
            </Typography>
          </Grid>
          {/*Title*/}

          <Grid
            item
            xs={ 12 }
            mb={ 4 }
          >
            <TextField
              label='Buscar por Nombre, Ciudad o Especialidad del Locutor'
              variant='outlined'
              fullWidth
              margin='normal'
            />
          </Grid>

          <TableContainer style={{ maxHeight: 300 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Ciudad</TableCell>
                  <TableCell>Especialidad</TableCell>
                  <TableCell>Ver Perfil</TableCell>
                  <TableCell>Eliminar Locutor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  testNarratorsData.map( ({ id, name, city, speciality }) => (
                    <TableRow key={ id }>
                      <TableCell>{ name }</TableCell>
                      <TableCell>{ city }</TableCell>
                      <TableCell>{ speciality }</TableCell>
                      <TableCell>
                        <Button
                          variant='outlined'
                          color='primary'
                          onClick={ () => handleViewProfile( id ) }
                        >
                          Ver Perfil
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant='outlined'
                          color='error'
                          onClick={ () => handleViewProfile( id ) }
                        >
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper>
    </Box>
  );
}

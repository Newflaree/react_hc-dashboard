// React
import { useState } from 'react';
// Material UI
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
} from '@mui/material';
// Components
import { DashboardPaper, EmptyTable } from '../components';
// Data
import { specialtiesData } from '../../../../database';


export const TagsView = () => {
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ newTag, setNewTag ] = useState( '' );
  const [ tags, setTags ] = useState( specialtiesData );

  const handleAddTag = () => {
    if ( newTag && !tags.includes( newTag ) ) {
      setTags([ ...tags, newTag ]);
      setNewTag( '' );
    }
  }

  const handleDeleteTag = ( tagToDelete ) => {
    setTags( tags.filter( (tag) => tag !== tagToDelete ) );
  }

  const filteredTags = tags.filter( (tag) =>
    tag.toLowerCase().includes( searchTerm.toLowerCase() )
  );

  return (
    <DashboardPaper pageTitle='Gestión de Tags'>
      <Grid
        item
        xs={ 12 }
      >
        <TextField
          label='Buscar Tag'
          variant='outlined'
          fullWidth
          margin='normal'
          value={ searchTerm }
          onChange={ ( e ) => setSearchTerm( e.target.value ) }
        />
      </Grid>

      <Grid
        item
        xs={ 12 }
      >
        <Grid
          container
          spacing={ 2 }
        >
          <Grid
            item
            xs={ 8 }
          >
            <TextField
              label='Agregar nuevo tag'
              variant='outlined'
              fullWidth
              margin='normal'
              value={ newTag }
              onChange={ ( e ) => setNewTag( e.target.value ) }
            />
          </Grid>
          <Grid
            item
            xs={ 4 }
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button
              size='large'
              variant='outlined'
              color='primary'
              sx={{ borderRadius: 8 }}
              onClick={ handleAddTag }
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Tag</TableCell>
              <TableCell>Número de Usuarios</TableCell>
              <TableCell>Eliminar Tag</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              filteredTags.length < 1
                ? <EmptyTable colSpan={ 3 } />
                : filteredTags.map( ( tag ) => (
                <TableRow key={ tag }>
                  <TableCell>{ tag }</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>
                    <Button
                      variant='outlined'
                      color='error'
                      sx={{ borderRadius: 8 }}
                      onClick={ () => handleDeleteTag }
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
    </DashboardPaper>
  );
}

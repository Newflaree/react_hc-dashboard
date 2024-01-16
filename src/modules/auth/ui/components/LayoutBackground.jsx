// Material UI
import { Box } from '@mui/material';


export const LayoutBackground = ({ children }) => {
  const imgUrl = 'https://res.cloudinary.com/newflare/image/upload/v1705268137/zondzykpqtssek0eknco.jpg';
   
  return (
    <Box
      sx={{
        flex: 1,
        backgroundImage: `url( ${ imgUrl } )`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      { children }
    </Box>
  );
}

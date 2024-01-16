// Material UI
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';


export const SidebarAvatar = () => {
  return (
    <ListItem
      sx={{
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <ListItemIcon>
        <img
          src='https://res.cloudinary.com/newflare/image/upload/v1705381326/demos/hc/hsjnbgecbaaijmftf0vi.png'
          alt='avatar'
          style={{
            marginBottom: '30px',
            width: '100px',
            height: '100px',
            borderRadius: '50%'
          }}
        />
      </ListItemIcon>
      <ListItemText
        primary={ `Buen día, ${ 'nombre-de-usuario' }` }
      />
    </ListItem>
  );
}

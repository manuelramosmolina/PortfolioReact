import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useContextoTema } from '../context/ContextoTema';

function Encabezado() {
  const { modo, alternarTema } = useContextoTema();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Manuel Ramos Molina - Desarrollador Web
        </Typography>
        <Box>
          <IconButton onClick={alternarTema} color="inherit">
            {modo === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Encabezado;

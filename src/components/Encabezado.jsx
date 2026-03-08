import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useContextoTema } from '../context/ContextoTema';

function Encabezado() {
  const { modo, alternarTema } = useContextoTema();

  return (
    <AppBar position="static">
      <Toolbar sx={{ py: 0.75 }}>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.35rem' },
              fontWeight: 700,
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Manuel Ramos Molina
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.78rem', sm: '0.92rem' },
              opacity: 0.9,
              lineHeight: 1.2,
              mt: 0.2,
            }}
          >
            Desarrollador Web
          </Typography>
        </Box>
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

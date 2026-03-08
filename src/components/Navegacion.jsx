import { Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Navegacion() {
  const ubicacion = useLocation();

  const enlacesNav = [
    { path: '/', label: 'Inicio' },
    { path: '/portfolio', label: 'Proyectos' },
    { path: '/experience', label: 'Experiencia' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        padding: 2,
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      {enlacesNav.map((item) => (
        <Button
          key={item.path}
          component={Link}
          to={item.path}
          variant={ubicacion.pathname === item.path ? 'contained' : 'outlined'}
          sx={{ minWidth: 120 }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}

export default Navegacion;

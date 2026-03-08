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
        flexWrap: 'wrap',
        gap: { xs: 1, sm: 2 },
        px: { xs: 1, sm: 2 },
        py: 2,
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
          sx={{
            minWidth: 0,
            flex: { xs: '1 1 calc(33.333% - 8px)', sm: '0 0 auto' },
            px: { xs: 1, sm: 2 },
            py: { xs: 0.55, sm: 0.8 },
            fontSize: { xs: '0.74rem', sm: '0.875rem' },
            lineHeight: 1.1,
            whiteSpace: 'nowrap',
            maxWidth: { xs: '130px', sm: 'none' },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}

export default Navegacion;

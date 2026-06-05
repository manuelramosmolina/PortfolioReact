import { Box } from '@mui/material';

function SeccionTresColumnas({ children }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: '1fr',          // móvil
          sm: '1fr 1fr',      // tablet
          md: '1fr 1fr 1fr'   // escritorio
        }
      }}
    >
      {children}
    </Box>
  );
}

export default SeccionTresColumnas;

import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Code } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import tecnologias from '../data/tecnologias.json';

function TarjetaTecnologias() {
  const [estaSobre, setEstaSobre] = useState(false);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1e1e1e' : '#f0f0f0',
        borderRadius: '8px',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',

        transition: 'all 0.3s ease-in-out',
        transform: estaSobre ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: estaSobre
          ? '0 8px 24px rgba(0,0,0,0.3)'
          : '0 4px 20px rgba(0,0,0,0.2)',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
        },
      }}
      onMouseEnter={() => setEstaSobre(true)}
      onMouseLeave={() => setEstaSobre(false)}
    >
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '1.3rem',
          mb: 2,
          textAlign: 'center',
          color: '#42a5f5',
        }}
      >
        TECNOLOGÍAS
      </Typography>

      {Object.entries(tecnologias).map(([categoria, items]) => (
        <Box key={categoria} sx={{ mb: 2 }}>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '1.05rem',
              color: '#42a5f5',
              mb: 0.5,
            }}
          >
            {categoria}
          </Typography>

          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.4 }}>
            {items.join(', ')}
          </Typography>
        </Box>
      ))}

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
        <IconButton component={RouterLink} to="/portfolio" size="large">
          <Code sx={{ fontSize: '2rem', color: '#42a5f5' }} />
        </IconButton>
        <Typography sx={{ fontSize: '0.9rem', mt: 0.5 }}>Proyectos</Typography>
      </Box>
    </Box>
  );
}

export default TarjetaTecnologias;

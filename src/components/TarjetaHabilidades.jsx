import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { School } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import habilidades from '../data/habilidades.json';

function TarjetaHabilidades() {
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
        HABILIDADES
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {habilidades.map((hab) => (
          <Box
            key={hab}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',   // ← CORRECCIÓN CLAVE
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#42a5f5',
                mt: '4px', // opcional: mejora aún más la alineación visual
              }}
            />
            <Typography sx={{ fontSize: '1rem' }}>{hab}</Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <IconButton component={RouterLink} to="/experience" size="large">
          <School sx={{ fontSize: '2rem', color: '#42a5f5' }} />
        </IconButton>
        <Typography sx={{ fontSize: '0.9rem', mt: 0.5 }}>
          Experiencia
        </Typography>
      </Box>
    </Box>
  );
}

export default TarjetaHabilidades;

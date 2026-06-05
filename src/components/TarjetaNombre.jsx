import { useState } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

function TarjetaNombre() {
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
        textAlign: 'center',
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
      <Avatar
        src={`${import.meta.env.BASE_URL}images/perfil.png`}
        alt="Manuel Ramos Molina"
        sx={{
          width: 120,
          height: 120,
          margin: '0 auto',
          mb: 2,
          border: '3px solid #42a5f5',
        }}
      />

      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: '#42a5f5', mb: 1 }}
        >
          Manuel Ramos Molina
        </Typography>

        <Typography sx={{ fontSize: '1rem', mb: 1, color: '#42a5f5' }}>
          Desarrollador Web
        </Typography>

        <Typography sx={{ fontSize: '0.9rem', mb: 2 }}>
          Estudiante de DAW
        </Typography>

        <Typography sx={{ fontSize: '0.9rem', mb: 2, lineHeight: 1.5 }}>
          Estudiante de DAW a punto de finalizar mis estudios, con especial
          interés en el desarrollo web y la creación de interfaces funcionales.
          Busco mi primera oportunidad como desarrollador junior para crecer
          profesionalmente.
        </Typography>

        <Typography sx={{ fontSize: '0.85rem', mb: 1, color: '#42a5f5' }}>
          2 años estudiando / Grado Superior DAW
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton href="https://github.com" target="_blank" sx={{ color: '#42a5f5' }}>
          <GitHub />
        </IconButton>

        <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#42a5f5' }}>
          <LinkedIn />
        </IconButton>

        <IconButton href="mailto:correo@example.com" sx={{ color: '#42a5f5' }}>
          <Email />
        </IconButton>
      </Box>

      <Typography sx={{ fontSize: '0.85rem', mt: 2 }}>
        Disponible para prácticas y proyectos
      </Typography>
    </Box>
  );
}

export default TarjetaNombre;

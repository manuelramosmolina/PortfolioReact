import { Container, Typography, Box, Divider } from '@mui/material';
import ItemExperiencia from '../components/ItemExperiencia';
import datosExperiencia from '../data/experiencia.json';
import { useState } from 'react';

function PaginaExperiencia() {
  const formacion = datosExperiencia.filter((item) => item.tipo === 'formacion');
  const laboral = datosExperiencia.filter((item) => item.tipo === 'laboral');

  // Componente interno para aplicar animación tipo tarjeta
  const BloqueAnimado = ({ children }) => {
    const [hover, setHover] = useState(false);

    return (
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1e1e1e' : '#f0f0f0',
          borderRadius: '8px',
          padding: '20px',
          mb: 3,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          transform: hover ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hover
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
      >
        {children}
      </Box>
    );
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          textAlign="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Mi Experiencia
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Formación académica y experiencia profesional
        </Typography>

        {/* Experiencia Laboral */}
        {laboral.length > 0 && (
          <>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 3,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experiencia Laboral
            </Typography>

            {laboral.map((item) => (
              <BloqueAnimado key={item.id}>
                <ItemExperiencia
                  cargo={item.cargo}
                  lugar={item.lugar}
                  fechas={item.fechas}
                  detalles={item.detalles}
                  tipo="laboral"
                />
              </BloqueAnimado>
            ))}

            <Divider sx={{ my: 4 }} />
          </>
        )}

        {/* Formación Académica */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            mb: 3,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Formación Académica
        </Typography>

        {formacion.map((item) => (
          <BloqueAnimado key={item.id}>
            <ItemExperiencia
              cargo={item.cargo}
              lugar={item.lugar}
              fechas={item.fechas}
              detalles={item.detalles}
              tipo="formacion"
            />
          </BloqueAnimado>
        ))}
      </Box>
    </Container>
  );
}

export default PaginaExperiencia;

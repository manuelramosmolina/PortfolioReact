import { Container, Typography, Box, Divider } from '@mui/material';
import ItemExperiencia from '../components/ItemExperiencia';
import datosExperiencia from '../data/experiencia.json';

function PaginaExperiencia() {
  const formacion = datosExperiencia.filter((item) => item.tipo === 'formacion');
  const laboral = datosExperiencia.filter((item) => item.tipo === 'laboral');

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
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
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
              <ItemExperiencia
                key={item.id}
                cargo={item.cargo}
                lugar={item.lugar}
                fechas={item.fechas}
                detalles={item.detalles}
                tipo="laboral"
              />
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
          <ItemExperiencia
            key={item.id}
            cargo={item.cargo}
            lugar={item.lugar}
            fechas={item.fechas}
            detalles={item.detalles}
            tipo="formacion"
          />
        ))}
      </Box>
    </Container>
  );
}

export default PaginaExperiencia;

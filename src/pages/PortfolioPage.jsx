import { Container, Typography, Grid, Box } from '@mui/material';
import TarjetaProyecto from '../components/TarjetaProyecto';
import datosProyectos from '../data/proyectos.json';

function PaginaProyectos() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Mis Proyectos
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Aquí puedes encontrar algunos de los proyectos en los que he trabajado
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {datosProyectos.map((proyecto) => (
            <Grid item key={proyecto.id} xs={12} sm={6} md={4}>
              <TarjetaProyecto
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                imagen={proyecto.imagen}
                enlace={proyecto.enlace}
                etiquetas={proyecto.etiquetas}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default PaginaProyectos;

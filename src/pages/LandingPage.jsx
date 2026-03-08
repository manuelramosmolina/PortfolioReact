import { Container, Box, Typography, IconButton, Avatar, Grid, LinearProgress, Card, CardContent, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email, Code, School, WorkOutline } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function LandingPage() {
  const infoPersonal = {
    name: 'Manuel Ramos Molina',
    role: 'Desarrollador Web',
    tipo: 'Estudiante de DAW',
    yearsStudy: '2',
    degree: 'Grado Superior DAW',
    description:
      'Estudiante de DAW a punto de finalizar mis estudios, con especial interés en el desarrollo web y la creación de interfaces funcionales. Busco mi primera oportunidad como desarrollador junior para crecer profesionalmente.',
    avatar: '/images/perfil.png',
    github: 'https://github.com/manuelramosmolina',
    linkedin: 'https://www.linkedin.com/in/manuelramosmolina/',
    email: 'molinainformatico@gmail.com',
  };

  const habilidades = [
    { name: 'Desarrollo Web', level: 85 },
    { name: 'Java', level: 82 },
    { name: 'HTML/CSS', level: 88 },
    { name: 'JavaScript', level: 83 },
    { name: 'SQL', level: 80 },
    { name: 'React', level: 80 },
    { name: 'PHP & Laravel', level: 76 },
    { name: 'Base de datos', level: 80 },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
        }}
      >
        <Grid container spacing={2}>
          {/* TARJETA IZQUIERDA - Foto y Descripción */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
                borderRadius: 2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  {/* Foto */}
                  <Avatar
                    variant="rounded"
                    src={infoPersonal.avatar}
                    alt={infoPersonal.name}
                    sx={{
                      width: 240,
                      height: 240,
                      border: 3,
                      borderRadius: 3,
                      borderColor: '#1976d2',
                      boxShadow: '0 4px 20px rgba(25,118,210,0.3)',
                      mt: 2,
                    }}
                  />

                  {/* Nombre y Rol */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: 'white', mb: 1, fontWeight: 'bold' }}>
                      {infoPersonal.name}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {infoPersonal.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      {infoPersonal.tipo}
                    </Typography>
                  </Box>

                  {/* Descripción */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      lineHeight: 1.7,
                      textAlign: 'center',
                      px: 2,
                    }}
                  >
                    {infoPersonal.description}
                  </Typography>

                  {/* Información adicional */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#42a5f5',
                      display: 'flex',
                      gap: 1,
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    }}
                  >
                    <span>{infoPersonal.yearsStudy} años estudiando</span>
                    <span>/</span>
                    <span>{infoPersonal.degree}</span>
                  </Typography>

                  {/* Enlaces sociales */}
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <IconButton
                      href={infoPersonal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        '&:hover': { color: '#42a5f5' },
                      }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      href={infoPersonal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        '&:hover': { color: '#42a5f5' },
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      href={`mailto:${infoPersonal.email}`}
                      sx={{
                        color: 'white',
                        '&:hover': { color: '#42a5f5' },
                      }}
                    >
                      <Email />
                    </IconButton>
                  </Box>

                  {/* Navegación */}
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <IconButton
                      component={RouterLink}
                      to="/portfolio"
                      sx={{
                        color: 'white',
                        '&:hover': { color: '#42a5f5' },
                      }}
                      title="Proyectos"
                    >
                      <Code />
                    </IconButton>
                    <IconButton
                      component={RouterLink}
                      to="/experience"
                      sx={{
                        color: 'white',
                        '&:hover': { color: '#42a5f5' },
                      }}
                      title="Experiencia"
                    >
                      <School />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* TARJETA DERECHA - Habilidades */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
                borderRadius: 2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Título de habilidades */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: '#1976d2',
                        mr: 1,
                      }}
                    />
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                      Habilidades
                    </Typography>
                  </Box>

                  {/* Lista de habilidades */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
                    {habilidades.map((habilidad) => (
                      <Box key={habilidad.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                            {habilidad.name}
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#42a5f5', fontWeight: 'bold' }}>
                            {habilidad.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={habilidad.level}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                              borderRadius: 1,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* Información adicional */}
                  <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                      Disponible para prácticas y proyectos
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default LandingPage;

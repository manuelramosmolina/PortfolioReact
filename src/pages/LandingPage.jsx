import { Container, Box, Typography, IconButton, Avatar } from '@mui/material';
import { GitHub, LinkedIn, Email, Code, School } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function LandingPage() {
  const infoPersonal = {
    name: 'Manuel Ramos Molina',
    role: 'Desarrollador Web',
    tipo: 'Estudiante de DAW',
    yearsStudy: '2 años estudiando',
    degree: 'Grado Superior DAW',
    description:
      'Estudiante de DAW a punto de finalizar mis estudios, con especial interés en el desarrollo web y la creación de interfaces funcionales. Busco mi primera oportunidad como desarrollador junior para crecer profesionalmente.',
    avatar: '/images/perfil.png',
    github: 'https://github.com/manuelramosmolina',
    linkedin: 'https://www.linkedin.com/in/manuelramosmolina/',
    email: 'molinainformatico@gmail.com',
  };

  const rutaAvatar = infoPersonal.avatar.startsWith('/')
    ? `${import.meta.env.BASE_URL}${infoPersonal.avatar.slice(1)}`
    : infoPersonal.avatar;

  const habilidades = [
    'Programación orientada a objetos',
    'Desarrollo web frontend',
    'Desarrollo web backend',
    'Diseño y arquitectura de APIs REST',
    'Bases de datos y SQL',
    'Control de versiones',
    'Trabajo en Linux',
    'Contenedores y despliegue',
    'Cloud computing'
  ];

  const tecnologias = {
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'TypeScript'],
    'Backend': ['Java', 'PHP', 'Laravel', 'Node.js', 'APIs REST'],
    'Bases de datos': ['SQL', 'MySQL', 'SQLite'],
    'Sistemas y DevOps': ['Linux', 'Docker', 'AWS', 'Azure'],
    'Herramientas': ['Git', 'GitHub', 'VS Code', 'Postman'],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>

      <Box sx={{ display: 'flex', gap: 3 }}>

        {/* BLOQUE 1 - NOMBRE */}
        <Box
          sx={{
            flex: 0.33,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1e1e1e' : '#f0f0f0',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            variant="rounded"
            src={rutaAvatar}
            alt={infoPersonal.name}
            sx={{
              width: 140,
              height: 140,
              border: 3,
              borderRadius: 2,
              borderColor: '#42a5f5',
              boxShadow: '0 4px 20px rgba(66,165,245,0.3)',
              mb: 1
            }}
          />

          <Typography sx={{ fontWeight: '700', fontSize: '1.3rem', textAlign: 'center' }}>
            {infoPersonal.name}
          </Typography>

          <Typography sx={{ color: '#42a5f5', fontWeight: '600', fontSize: '1.05rem' }}>
            {infoPersonal.role}
          </Typography>

          <Typography sx={{ fontSize: '0.95rem', mb: 1 }}>
            {infoPersonal.tipo}
          </Typography>

          <Typography sx={{ lineHeight: 1.4, fontSize: '1rem', mb: 1, textAlign: 'center' }}>
            {infoPersonal.description}
          </Typography>

          <Typography sx={{ fontSize: '0.95rem', mb: 2, color: '#42a5f5' }}>
            {infoPersonal.yearsStudy} / {infoPersonal.degree}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
            <IconButton href={infoPersonal.github} target="_blank" size="small">
              <GitHub sx={{ fontSize: '1.3rem' }} />
            </IconButton>
            <IconButton href={infoPersonal.linkedin} target="_blank" size="small">
              <LinkedIn sx={{ fontSize: '1.3rem' }} />
            </IconButton>
            <IconButton href={`mailto:${infoPersonal.email}`} size="small">
              <Email sx={{ fontSize: '1.3rem' }} />
            </IconButton>
          </Box>

          <Typography sx={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
            Disponible para prácticas y proyectos
          </Typography>
        </Box>

        {/* BLOQUE 2 - TECNOLOGÍAS (CENTRO) */}
        <Box
          sx={{
            flex: 0.33,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1e1e1e' : '#f0f0f0',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: '700', fontSize: '1.1rem', mb: 1, color: '#42a5f5' }}>
              TECNOLOGÍAS
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {Object.entries(tecnologias).map(([categoria, items]) => (
                <Box key={categoria}>
                  <Typography sx={{ fontWeight: '600', fontSize: '1rem', mb: 0.2, color: '#42a5f5' }}>
                    {categoria}
                  </Typography>
                  <Typography sx={{ fontSize: '0.95rem' }}>
                    {items.join(', ')}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <IconButton component={RouterLink} to="/portfolio" size="large">
              <Code sx={{ fontSize: '2rem', color: '#42a5f5' }} />
            </IconButton>
            <Typography sx={{ fontSize: '0.9rem', mt: 0.5 }}>Proyectos</Typography>
          </Box>
        </Box>

        {/* BLOQUE 3 - HABILIDADES */}
        <Box
          sx={{
            flex: 0.33,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1e1e1e' : '#f0f0f0',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: '700', fontSize: '1.1rem', mb: 1, color: '#42a5f5' }}>
              HABILIDADES
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
              {habilidades.map((habilidad, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#42a5f5' }} />
                  <Typography sx={{ fontSize: '1rem' }}>
                    {habilidad}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <IconButton component={RouterLink} to="/experience" size="large">
              <School sx={{ fontSize: '2rem', color: '#42a5f5' }} />
            </IconButton>
            <Typography sx={{ fontSize: '0.9rem', mt: 0.5 }}>Experiencia</Typography>
          </Box>
        </Box>

      </Box>
    </Container>
  );
}

export default LandingPage;

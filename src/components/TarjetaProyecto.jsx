import { useState } from 'react';
import { Card, CardContent, CardMedia, CardActions, Typography, Button, Chip, Box, Collapse } from '@mui/material';
import { GitHub, Launch, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const IconoExpandir = styled((props) => {
  const { expandido, ...resto } = props;
  return <IconButton {...resto} />;
})(({ theme, expandido }) => ({
  transform: !expandido ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function TarjetaProyecto({ titulo, descripcion, imagen, enlace, etiquetas }) {
  const [expandido, setExpandido] = useState(false);
  const [estaSobre, setEstaSobre] = useState(false);

  const manejarExpandir = () => {
    setExpandido(!expandido);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        transform: estaSobre ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: estaSobre ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.2)',
        borderRadius: 2,
        background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
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
      {imagen && (
        <CardMedia
          component="img"
          height="200"
          image={imagen}
          alt={titulo}
          sx={{
            objectFit: 'cover',
          }}
        />
      )}
      
      <CardContent sx={{ flexGrow: 1, p: 3, pt: 3.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h2"
          sx={{
            fontWeight: 700,
            color: 'white',
            mb: 2,
            fontSize: '1.3rem',
            textAlign: 'center',
          }}
        >
          {titulo}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2.5,
            color: 'white',
            lineHeight: 1.7,
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          {descripcion}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, justifyContent: 'center' }}>
          {etiquetas && etiquetas.map((etiqueta, indice) => (
            <Chip 
              key={indice} 
              label={etiqueta} 
              size="small" 
              sx={{
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
                height: '24px',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
      
      <CardActions 
        disableSpacing 
        sx={{ 
          px: 3, 
          pb: 2,
          pt: 0,
          justifyContent: 'space-between',
        }}
      >
        {enlace && (
          <Button
            size="small"
            startIcon={<GitHub />}
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '0.875rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#42a5f5',
              },
            }}
          >
            Ver Código
          </Button>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <IconoExpandir
          expandido={expandido}
          onClick={manejarExpandir}
          aria-expanded={expandido}
          aria-label="mostrar más"
          sx={{
            color: 'white',
          }}
        >
          <ExpandMore />
        </IconoExpandir>
      </CardActions>
      
      <Collapse in={expandido} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0, px: 3, pb: 2 }}>
          <Box 
            sx={{ 
              borderTop: '1px solid',
              borderColor: 'divider',
              pt: 2,
            }}
          >
            <Typography 
              variant="subtitle2" 
              sx={{ 
                fontWeight: 700,
                color: 'primary.main',
                mb: 1,
                fontSize: '0.9rem',
              }}
            >
              Sobre este proyecto
            </Typography>
            <Typography 
              variant="body2"
              sx={{ 
                color: 'white',
                lineHeight: 1.6,
                fontSize: '0.875rem',
              }}
            >
              Este proyecto demuestra habilidades en {etiquetas ? etiquetas.join(', ') : 'desarrollo web'}, 
              aplicando las mejores prácticas de desarrollo y diseño moderno.
            </Typography>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TarjetaProyecto;

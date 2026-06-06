import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

function ItemExperiencia({ cargo, lugar, fechas, detalles, tipo = 'laboral' }) {
  return (
    <Card 
      elevation={0}
      sx={{ 
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        
        {/* Cargo */}
        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ mb: 1, fontWeight: 700 }}
        >
          {cargo}
        </Typography>

        {/* Lugar */}
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{
            color: (theme) => 
              theme.palette.mode === 'dark' ? '#ccc' : '#555',
            fontWeight: 500
          }}
        >
          {lugar}
        </Typography>

        {/* FECHAS → CHIP AZUL COMO EN PROYECTOS */}
        <Chip 
          label={fechas}
          size="small"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
            },
          }}
        />

        {/* Detalles */}
        <Typography 
          variant="body1"
          sx={{
            color: (theme) => 
              theme.palette.mode === 'dark' ? '#ddd' : '#333',
            lineHeight: 1.6,
            fontSize: '0.95rem'
          }}
        >
          {detalles}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default ItemExperiencia;

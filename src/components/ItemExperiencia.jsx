import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

function ItemExperiencia({ cargo, lugar, fechas, detalles, tipo = 'laboral' }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
          {cargo}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {lugar}
        </Typography>
        <Chip label={fechas} size="small" sx={{ mb: 2 }} />
        <Typography variant="body1" color="text.secondary">
          {detalles}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemExperiencia;

import { Container } from '@mui/material';
import SeccionTresColumnas from '../components/SeccionTresColumnas';
import TarjetaNombre from '../components/TarjetaNombre';
import TarjetaHabilidades from '../components/TarjetaHabilidades';
import TarjetaTecnologias from '../components/TarjetaTecnologias';

function LandingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SeccionTresColumnas>
        <TarjetaNombre />
        <TarjetaHabilidades />
        <TarjetaTecnologias />
      </SeccionTresColumnas>
    </Container>
  );
}

export default LandingPage;

import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

function PiePagina() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Manuel Ramos Molina - Portfolio personal
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="https://github.com/manuelramosmolina" target="_blank" rel="noopener" color="inherit">
              <GitHub />
            </Link>
            <Link href="https://www.linkedin.com/in/manuelramosmolina/" target="_blank" rel="noopener" color="inherit">
              <LinkedIn />
            </Link>
            <Link href="mailto:molinainformatico@gmail.com" color="inherit">
              <Email />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default PiePagina;

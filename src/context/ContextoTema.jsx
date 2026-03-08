import { createContext, useState, useContext, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ContextoTema = createContext();

export const useContextoTema = () => {
  const contexto = useContext(ContextoTema);
  if (!contexto) {
    throw new Error('useContextoTema debe usarse dentro de ProveedorTema');
  }
  return contexto;
};

export const ProveedorTema = ({ children }) => {
  const [modo, setModo] = useState('dark');

  const alternarTema = () => {
    setModo((modoAnterior) => (modoAnterior === 'light' ? 'dark' : 'light'));
  };

  const tema = useMemo(
    () =>
      createTheme({
        palette: {
          mode: modo,
          ...(modo === 'light'
            ? {
                // Tema claro
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#dc004e',
                },
                background: {
                  default: '#f5f5f5',
                  paper: '#ffffff',
                },
              }
            : {
                // Tema oscuro
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#f48fb1',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
              }),
        },
      }),
    [modo]
  );

  return (
    <ContextoTema.Provider value={{ modo, alternarTema }}>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ContextoTema.Provider>
  );
};

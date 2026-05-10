import { createTheme } from '@mui/material/styles';

/**
 * Tema personalizado para el portal.
 * Un Senior Developer no usa los colores por defecto.
 * Definimos una paleta armoniosa y tipografía moderna.
 */
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Un azul moderno
      light: '#60a5fa',
      dark: '#1e40af',
    },
    secondary: {
      main: '#7c3aed', // Un morado elegante
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // Botones más modernos sin todo en mayúsculas
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
});

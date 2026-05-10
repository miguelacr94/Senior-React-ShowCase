import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './core/Layout';
import ProductList from './features/products/components/ProductList';

// Instancia del cliente de TanStack Query
const queryClient = new QueryClient();

/**
 * Componente Principal App.
 * Aquí configuramos todos los Providers (Tema, Query, etc.)
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* Reset de CSS de MUI */}
        <CssBaseline />
        
        <Layout>
          <ProductList />
        </Layout>

        {/* Herramientas de desarrollo para Query - Solo en dev */}
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

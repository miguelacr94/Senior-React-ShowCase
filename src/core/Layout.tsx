import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartStore } from '../store/useCartStore';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Componente de Layout principal.
 * Centraliza la estructura de la aplicación y la navegación.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const cartItemsCount = useCartStore((state) => state.items.length);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 800 }}>
            SENIOR STORE 🚀
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>
      
      <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: 'white', borderTop: '1px solid #e2e8f0' }}>
        <Typography variant="body2" color="text.secondary">
          © 2026 Senior React Showcase - Prueba Técnica Bogotá
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;

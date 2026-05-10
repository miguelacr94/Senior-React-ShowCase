import React from 'react';
import { Grid, Skeleton, Box, Typography, Alert } from '@mui/material';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard';

/**
 * Componente ProductList.
 * Maneja los estados de Carga, Error y Éxito de la API.
 */
const ProductList: React.FC = () => {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {[...Array(8)].map((_, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
            <Box sx={{ pt: 1 }}>
              <Skeleton width="60%" />
              <Skeleton width="80%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (isError) {
    return (
      <Box sx={{ py: 4 }}>
        <Alert severity="error">
          Error al cargar los productos: {(error as Error).message}
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        Nuestros Productos
      </Typography>
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;

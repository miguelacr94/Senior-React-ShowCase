import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Chip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import type { Product } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';

interface ProductCardProps {
  product: Product;
}

/**
 * Componente ProductCard responsivo y accesible.
 * Implementa la lógica de "Agregar al Carrito" usando Zustand.
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 2, bgcolor: 'white' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 1 }}>
          <Chip label={product.category} size="small" color="secondary" variant="outlined" />
        </Box>
        <Typography gutterBottom variant="h6" component="div" noWrap title={product.title}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          mb: 2
        }}>
          {product.description}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          fullWidth 
          variant="contained" 
          startIcon={<AddShoppingCartIcon />}
          onClick={() => addItem(product)}
        >
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

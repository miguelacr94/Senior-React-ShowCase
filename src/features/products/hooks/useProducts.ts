import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';

/**
 * Hook personalizado para obtener productos.
 * Abstraemos la lógica de TanStack Query para que los componentes no dependan directamente de ella.
 */
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productService.getAll,
    staleTime: 1000 * 60 * 5, // 5 minutos de caché (Senior practice)
    retry: 2, // Reintentar 2 veces si falla
  });
};

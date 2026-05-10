import api from '@/api/axiosInstance';
import type { Product } from '@/types/product';

/**
 * Servicio de Productos (Capa de Acceso a Datos).
 * Siguiendo el patrón Repository, centralizamos las llamadas a la API aquí.
 */
export const productService = {
  getAll: async (): Promise<Product[]> => {
    const { data } = await api.get<Product[]>('/products');
    return data;
  },

  getById: async (id: number): Promise<Product> => {
    const { data } = await api.get<Product>(`/products/${id}`);
    return data;
  },
  
  // Ejemplo de método de 'escritura' para demostrar seguridad
  create: async (product: Partial<Product>): Promise<Product> => {
    const { data } = await api.post<Product>('/products', product);
    return data;
  }
};

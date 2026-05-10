/**
 * Definición de tipos para Productos.
 * Mantener los tipos centralizados mejora la mantenibilidad y evita errores.
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

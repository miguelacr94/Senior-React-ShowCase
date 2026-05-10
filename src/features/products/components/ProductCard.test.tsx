import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from './ProductCard';
import type { Product } from '@/types/product';

// Mock de la tienda de Zustand
const mockAddItem = vi.fn();
vi.mock('@/store/useCartStore', () => ({
  useCartStore: (selector: (state: unknown) => unknown) => selector({ addItem: mockAddItem }),
}));

const mockProduct: Product = {
  id: 1,
  title: 'Producto de Prueba',
  price: 99.99,
  description: 'Descripción de prueba',
  category: 'test',
  image: 'test-image.jpg',
};

describe('ProductCard Component', () => {
  it('debe renderizar la información del producto correctamente', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Producto de Prueba')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('debe llamar a addItem cuando se hace clic en el botón', () => {
    render(<ProductCard product={mockProduct} />);

    const button = screen.getByRole('button', { name: /agregar/i });
    fireEvent.click(button);

    expect(mockAddItem).toHaveBeenCalledWith(mockProduct);
  });
});

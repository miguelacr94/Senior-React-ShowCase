import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/types/product';

/**
 * Tipado para los productos en el carrito.
 */
interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

/**
 * Estado Global del Carrito con Zustand.
 * Usamos el middleware 'persist' para que los datos sobrevivan a recargas (Senior practice).
 */
interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        } else {
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },

      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage', // Nombre de la llave en localStorage
    }
  )
);

import { http, HttpResponse } from 'msw';

/**
 * Handlers de MSW (Mock Service Worker).
 * Esto permite interceptar peticiones de red y devolver datos falsos.
 * Es vital para tests unitarios y para desarrollar sin backend.
 */
export const handlers = [
  // Mock de la lista de productos
  http.get('https://fakestoreapi.com/products', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'Producto Mock de MSW',
        price: 29.99,
        description: 'Este producto viene de un Service Worker interceptado.',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
      {
        id: 2,
        title: 'Producto Senior #2',
        price: 49.99,
        description: 'Prueba de escalabilidad y testing.',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      }
    ]);
  }),

  // Mock de un producto individual
  http.get('https://fakestoreapi.com/products/:id', ({ params }) => {
    return HttpResponse.json({
      id: Number(params.id),
      title: `Producto Detallado ${params.id}`,
      price: 15.00,
      description: 'Detalle simulado por MSW.',
      category: 'men\'s clothing',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    });
  }),
];

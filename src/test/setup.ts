import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../mocks/server';

/**
 * Configuración global de Vitest.
 * Encendemos el servidor de MSW antes de todos los tests y lo limpiamos después.
 */

// Establecer mocks de API antes de los tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Resetear los manejadores entre cada test (importante para aislamiento)
afterEach(() => server.resetHandlers());

// Limpiar después de que todos los tests terminen
afterAll(() => server.close());

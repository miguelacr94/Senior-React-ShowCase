import { setupServer } from 'msw/node';
import { handlers } from './handlers';

/**
 * Configuración del servidor de MSW para Node.js.
 * Se usa principalmente en entornos de ejecución de tests (Vitest/Jest).
 */
export const server = setupServer(...handlers);

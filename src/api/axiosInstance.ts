import axios from 'axios';

/**
 * Instancia de Axios configurada para el proyecto.
 * Como Senior, centralizamos la configuración aquí para manejar interceptores,
 * encabezados de seguridad y la URL base.
 */
const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
  // Importante para CSRF: permite enviar cookies en peticiones cross-site
  withCredentials: true,
});

/**
 * Interceptor de Peticiones
 * Aquí inyectamos tokens de seguridad o encabezados Anti-CSRF.
 */
api.interceptors.request.use(
  (config) => {
    // Ejemplo: Obtener token del localStorage o de una cookie
    const token = localStorage.getItem('csrf_token');
    if (token) {
      config.headers['X-CSRF-TOKEN'] = token;
    }
    
    // Encabezado para prevenir CSRF en algunos servidores
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor de Respuestas
 * Centraliza el manejo de errores (401, 403, 500).
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirigir al login o limpiar sesión
      console.error('Sesión expirada');
    }
    return Promise.reject(error);
  }
);

export default api;

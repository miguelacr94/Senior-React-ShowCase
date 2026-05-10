# Senior React Showcase - Proyecto de Prueba Técnica

Este proyecto ha sido diseñado para demostrar competencias de nivel **Senior Frontend Developer** siguiendo los requisitos técnicos para el portal en Bogotá.

## 🛠️ Tecnologías Utilizadas
- **React 18 + TypeScript + Vite**: Para un rendimiento óptimo y tipado estricto.
- **Material UI (MUI)**: Sistema de diseño profesional con tematización personalizada.
- **TanStack Query (React Query)**: Gestión profesional del estado del servidor y caché.
- **Zustand**: Estado global ligero con persistencia para el carrito de compras.
- **MSW (Mock Service Worker)**: Simulación de red para desarrollo y testing.
- **Vitest + React Testing Library**: Pruebas unitarias y de integración.
- **Axios**: Con interceptores para manejo de seguridad (CSRF).

## 🏗️ Arquitectura (DDD / Modular)
El proyecto está organizado por capas y módulos (features) para asegurar la escalabilidad:
- `src/api`: Configuración centralizada de HTTP.
- `src/core`: Componentes transversales y estructurales (Layout).
- `src/features`: Módulos de negocio independientes (ej. `products`).
- `src/theme`: Centralización de la identidad visual.

## 🔒 Seguridad Implementada
1.  **XSS Protection**: Uso de React para escapar datos y mención de **DOMPurify** para contenido HTML dinámico.
2.  **CSRF Protection**: Interceptores de Axios para incluir tokens `X-CSRF-TOKEN` y encabezados `X-Requested-With`. Uso de cookies `SameSite=Lax`.
3.  **JWT**: Estrategia de almacenamiento en cookies **HttpOnly**.

## 🧪 Testing y Calidad
- **MSW**: Intercepción de red a nivel de Service Worker.
- **Unit Tests**: Pruebas de componentes con RTL.
- **CI/CD**: Pipeline de GitHub Actions configurado en `.github/workflows/ci.yml`.

## 🚀 Cómo ejecutar
1.  Instalar dependencias: `npm install`
2.  Ejecutar en desarrollo: `npm run dev`
3.  Ejecutar pruebas: `npm run test`
4.  Construir para producción: `npm run build`

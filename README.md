# Hito 4 - Pizzería Mamma Mía

Implementación del Hito 4 de Desafío Latam: consumo de una API externa desde React utilizando `fetch` y `useEffect`.

## Estructura

- `frontend/`: aplicación React + Vite.
- `backend/`: backend entregado en el material de apoyo, sin modificar.

## Requisitos

- Node.js 18+ (se recomienda una versión LTS reciente).
- npm.

## 1. Levantar el backend

Abre una terminal en `backend/` y ejecuta:

```bash
npm install
npm start
```

El servidor quedará disponible en:

`http://localhost:5000`

Endpoint de pizzas:

`GET http://localhost:5000/api/pizzas`

Endpoint de detalle solicitado por el hito:

`GET http://localhost:5000/api/pizzas/p001`

## 2. Levantar el frontend

En otra terminal, entra en `frontend/` y ejecuta:

```bash
npm install
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173`.

## Requisitos implementados

### Home.jsx

- Consume `GET http://localhost:5000/api/pizzas`.
- Utiliza `useEffect` para realizar la petición.
- Guarda la respuesta en estado.
- Renderiza las tarjetas de todas las pizzas recibidas.

### Pizza.jsx

- Consume `GET http://localhost:5000/api/pizzas/p001`.
- Utiliza `useEffect` para realizar la petición.
- Muestra nombre, precio, ingredientes, imagen y descripción.
- El botón de añadir al carrito está presente, pero no tiene funcionalidad, tal como solicita el hito.

## Nota para la entrega

El backend es el proporcionado por el curso y se mantiene dentro de la carpeta `backend/`. No es necesario subir `node_modules`; las dependencias se instalan con `npm install`.
# react4

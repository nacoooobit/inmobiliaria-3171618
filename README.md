## Inmobiliaria — Proyecto por semanas

Este repositorio agrupa ejercicios semanales (1–5) que implementan pequeñas versiones de un catálogo inmobiliario. El objetivo es tener demos independientes por semana que muestren componentes UI, filtrado, búsqueda y layouts —útiles para aprendizaje o como base para un proyecto más grande.

Contenido y propósito
- `week 1/` — demo HTML/CSS estático (página simple de ejemplo).
- `week 2/my-app/` — app React + Vite con componentes de listado y formulario.
- `week 3/3-proyecto/starter/` — starter del catálogo con hooks y componentes reutilizables.
- `week 4/` — versión del catálogo con mayor componentización.
- `week 5/starter/` — layout con `ConfigContext`, `Layout` y ajustes finales.

Qué encontrarás (alto nivel)
- Componentes UI: `Card`, `Navbar`, `FilterPanel`, `ItemList`, `ItemCard`, `SearchBar`.
- Hooks: `useDebounce`, `useFetch`, `useLocalStorage` (dependiendo de la semana).
- Datos de ejemplo: `data/items.ts` con mock data para poblar listas.
- Estilos: ficheros `styles.css` o `styles/global.css` por proyecto, con variables básicas.

Tecnologías y herramientas
- Node.js y npm
- Vite (dev server y build)
- React (v18+)
- TypeScript en proyectos que incluyen `tsconfig.json`
- CSS (sin framework CSS principal; es CSS a medida por carpeta)

Cómo se hizo (breve)
- Cada semana se desarrolló como un proyecto independiente para facilitar la experimentación.
- Se usaron componentes funcionales de React y hooks para manejar estado y efectos.
- Mock data en `data/items.ts` permite testear UI sin backend.

Cómo ejecutar

1) Requisitos

- Instala Node.js (16+) y npm.

2) Semana 1 (estático)

```powershell
cd "week 1"
Invoke-Item "index.html"
```

3) Semanas 2–5 (Vite + React)

Para cada subproyecto, por ejemplo semana 2:

```powershell
cd "week 2\my-app"
npm install
npm run dev
```

Repite en:
- `week 3\3-proyecto\starter`
- `week 4`
- `week 5\starter`

Para ejecutar varias apps a la vez, abre una terminal por proyecto. Los puertos usados en mi sesión fueron 5175, 5174, 5173 y 5176; Vite elige puertos por defecto si no se especifica.

Build y despliegue

```bash
cd <subproyecto>
npm run build
npm run preview   # para probar el build localmente
```

Los resultados del build son estáticos y listos para servir en Netlify, Vercel, GitHub Pages u otro host.

Notas para desarrolladores
- Para añadir o modificar UI, edita los componentes en `src/components` y los estilos correspondientes; Vite recarga automáticamente.
- Para unificar diseño entre semanas, mover variables CSS a un archivo compartido y aplicar colores/tipografías comunes.






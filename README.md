# Proyecto Inmobiliaria — Resumen de cambios y ejecución

Este repositorio contiene ejercicios por semana. He aplicado estilos básicos y un navbar en las semanas 1–5 y añadí archivos y ajustes para que cada proyecto tenga una apariencia organizada.

## Cambios principales
- Semana 1: `week 1/index.html`, `week 1/styles.css` (página estática + navbar)
- Semana 2: `week 2/my-app/src/components/header.tsx`, `week 2/my-app/src/App.css` (Header -> navbar + estilos)
- Semana 3: `week 3/3-proyecto/starter/src/components/Navbar.tsx`, `week 3/3-proyecto/starter/src/styles/global.css`, `week 3/3-proyecto/starter/src/AppCatalog.tsx`, `week 3/3-proyecto/starter/src/main.tsx` (Navbar + estilos globales)
- Semana 4: `week 4/src/components/Navbar.tsx`, `week 4/src/styles/global.css`, `week 4/src/App.tsx`, `week 4/src/main.tsx` (Navbar + estilos)
- Semana 5: `week 5/starter/components/Layout/Layout.tsx`, `week 5/starter/styles.css` (Navbar integrado en `Layout` y ajustes de estilo)

## Cómo ejecutar (rápido)

- Semana 1 (archivo estático): abrir `week 1/index.html` en el navegador o en PowerShell:

```powershell
Invoke-Item "week 1\index.html"
```

- Semanas con Vite/React (2–5): desde cada carpeta correspondiente ejecutar:

```powershell
cd "week 2\my-app"
npm install
npm run dev

cd "..\..\week 3\3-proyecto\starter"
npm install
npm run dev

cd "..\..\..\week 4"
npm install
npm run dev

cd "..\week 5\starter"
npm install
npm run dev
```

Puertos usados en mi sesión (puedes cambiarlos):
- Semana 2: `5175`
- Semana 3: `5174`
- Semana 4: `5173`
- Semana 5: `5176`

Accede desde el navegador en:
- http://localhost:5175/
- http://localhost:5174/
- http://localhost:5173/
- http://localhost:5176/

## Git
- Remote: `https://github.com/nacoooobit/inmobiliaria-3171618.git`
- Branch usado: `main`

Comandos útiles si quieres commitear/pushear manualmente:

```bash
git status
git add -A
git commit -m "feat: add basic styling and navbar for weeks 1-5"
git push origin main
```

Nota: en mi ejecución `git status` mostró "No changes to commit" y `git push` devolvió "Everything up-to-date", por eso no se creó un nuevo commit en esta sesión.

## Siguientes pasos sugeridos
- Hacer el navbar responsive (mobile). 
- Unificar paleta de colores si quieres consistencia entre semanas.
- Crear una rama específica y abrir un PR si prefieres revisar antes de fusionar.

Si quieres, hago uno de estos cambios ahora y lo subo en una rama nueva.


# My App — Gestor de Inmuebles (básico)

**Descripción**
- **Propósito:** Aplicación sencilla en React + TypeScript para crear, listar, editar y eliminar propiedades en memoria.
- **Público objetivo:** cualquier persona con conocimientos básicos de Node/NPM puede ejecutar y probar la app.

**Requisitos**
- **Node.js:** versión 16+ instalada.
- **npm:** viene con Node; usar CMD o Git Bash en Windows si PowerShell da problemas de ejecución.

**Instalación (rápida)**
1. Abrir una terminal en la carpeta del proyecto:

```bash
cd "C:\Users\johan\OneDrive\Desktop\PROYECTO\week 2\my-app"
```

2. Instalar dependencias:

```bash
npm install
```

3. (Opcional) Si faltan paquetes, instalarlos explícitamente:

```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom vite
```

**Ejecutar en desarrollo**
- Levantar servidor Vite y abrir el navegador:

```bash
npm run dev
# abrir http://localhost:5173/
```

**Estructura principal y qué hace cada archivo**
- **`index.html`**: punto de entrada HTML (monta la app en `#root`).
- **`src/main.tsx`**: monta React en la página y carga `App`.
- **`src/App.tsx`**: componente raíz que guarda el estado `properties` y handlers (crear/editar/eliminar).
- **`src/types/index.ts`**: definiciones de tipos; exporta `propiedad` usado por componentes.
- **`src/components/header.tsx`**: cabecera simple.
- **`src/components/PropertyForm.tsx`**: formulario para crear o actualizar una propiedad.
- **`src/components/PropertyList.tsx`**: lista de propiedades; muestra `direccion`, `precio`, `status`, `type`.
- **`src/components/PropertyCard.tsx`**: componente presentación mínima por propiedad.
- **`tsconfig.json`**: configuración TypeScript (incluye `jsx: "react-jsx"`).
- **`package.json`**: scripts y dependencias (usar `npm run dev`).

**Cómo funciona (flujo básico)**
- `App` mantiene la lista en memoria (`useState`).
- `PropertyForm` envía nuevos objetos a `App` mediante `onAdd`, o actualiza con `onUpdate`.
- `PropertyList` muestra las propiedades y permite `onEdit` / `onDelete`.

**Problemas comunes y soluciones**
- Si el editor muestra errores de TypeScript: reiniciar servidor TypeScript en VS Code → Paleta → "TypeScript: Restart TS Server".
- Si PowerShell bloquea `npm`/`npx`, usar CMD/Git Bash o permitir scripts:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

- Si `vite` no se reconoce: instalarlo con `npm install -D vite`.

**Siguientes mejoras sugeridas**
- Persistencia en `localStorage` o conexión a una API para no perder datos al recargar.
- Validación del formulario y campos adicionales (fotos, descripción, ciudad).
- Mejorar la UI y añadir filtros/búsqueda.

Si quieres, puedo añadir persistencia en `localStorage` ahora o mejorar el formulario para editar el `status` directamente.


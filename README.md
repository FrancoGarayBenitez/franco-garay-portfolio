# Franco Garay — Portfolio

> Portfolio personal de Franco Garay, desarrollador Full Stack de Mendoza, Argentina.

## ✨ Características

- Diseño responsive con Tailwind CSS v4
- Modo oscuro/claro con next-themes
- Animaciones con Framer Motion
- Galería de imágenes con lightbox y zoom
- Formulario de contacto vía Formspree
- Navegación por scroll con secciones activas

## 🛠️ Stack

Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4 · Framer Motion · lucide-react

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## 📦 Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |

## 🔐 Variables de entorno

Crear un archivo `.env.local` con las siguientes variables:

```
NEXT_PUBLIC_FORMSPREE_ID=tu_form_id
```

`NEXT_PUBLIC_FORMSPREE_ID` es requerida para el formulario de contacto. Ver `AGENTS.md` para la lista completa de variables.

## 📁 Estructura

```
src/
  app/          — Página principal y layout
  components/   — Componentes React (sections/, ui/)
  lib/          — Animaciones, datos, hooks, tipos, utilidades
```

## 🌐 Deploy

Optimizado para [Vercel](https://vercel.com). Build estándar con `next build`.

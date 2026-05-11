# Análisis del Proyecto Amano Frontend

## Estado General

**Stack**: React 19 + TypeScript + Vite 8 + Tailwind CSS v4 + Zustand + Recharts + Lucide
**Estado**: MVP temprano con mock data. Sin backend real conectado. Sin tests.
**Versión**: 0.0.0 (privado/pre-release)

---

## Lo que ya funciona (implementado)

### Autenticación (mock)
- Página de Login con formulario (email + password), validación, loading state, errores
- Página de Register con formulario completo (nombre negocio, email, password, confirmar), validación client-side
- Redirección login → dashboard y register → login

### Dashboard (completo con mock data)
- Sidebar con navegación completa (6 items menú + 4 items "Mi negocio"), active state
- Header con search bar animada, campana notificaciones, theme toggle, menú usuario
- Gráfico Recharts (31 días, formato S/)
- 4 tarjetas de métricas (Rendimiento, Meta mensual, Boletas completadas, Total ventas)
- Clientes recientes (3 mock, linkeables a perfil)
- Producto destacado

### Perfil de Cliente (completo con mock data)
- Tarjeta de info (avatar inicial, nombre, categoría, DNI, teléfono, email, miembro desde)
- 4 tarjetas de resumen (Total compras, Total gastado, Boletas pagadas, Boletas pendientes)
- Tabla de boletas (ID, fecha, productos, total S/, estado con badge color: pagada/pendiente/vencida)
- ✅ Ruta `/clientes/:id` agregada en `App.tsx`

### Sistema de Tema
- Paleta "Berry Rose" (accent: `#a8001b`, accent-light: `#ffbacc`)
- Modo claro y oscuro completo vía CSS custom properties
- Zustand store con persistencia en localStorage
- Flash protection en `index.html`

### Infraestructura
- Cliente Axios configurado (baseURL vía env, interceptor JWT, handler 401)
- Utilidad `cn()` (clsx + tailwind-merge)
- Alias `@/` para imports
- Mock data separado por dominio (dashboard, metrics, clientProfile)

---

## Lo que falta — ordenado de menor a mayor esfuerzo/dificultad

### 🔹 Nivel 1 — Minutos (< 30 min c/u)

| # | Tarea | Dificultad | Detalle |
|---|-------|-----------|---------|
| ~~1~~ | ~~**Agregar ruta faltante `/clientes/:id`**~~ | ~~Muy fácil~~ | ~~✅ Solucionado — ruta agregada en `App.tsx`~~ |
| ~~2~~ | ~~**Mover sidebar/header a layout compartido**~~ | ~~Fácil~~ | ~~✅ Solucionado — `DashboardLayout` creado en `components/template/dashboardLayout/`, stubs y templates refactorizados, menús centralizados en `lib/menus.ts`~~ |
| ~~3~~ | ~~**Eliminar `App.css`**~~ | ~~Muy fácil~~ | ~~✅ Solucionado — archivo eliminado e import removido de `App.tsx`~~ |
| ~~4~~ | ~~**Revisar hardcode `#f3f3f4` en SearchBar**~~ | ~~Muy fácil~~ | ~~✅ Solucionado — variable `--input-bg` agregada en `index.css`, `lightTheme.tsx` y `darkTheme.tsx`; SearchBar usa `bg-[var(--input-bg)]`~~ |
| ~~5~~ | ~~**Unificar barrel imports inconsistentes**~~ | ~~Fácil~~ | ~~✅ Solucionado — templates usan `{ Sidebar, Header } from "@/components/organism"` (barrel), import `Link` no usado eliminado de `section/index.tsx`~~ |
| ~~6~~ | ~~**Agregar handler de logout en UserMenu**~~ | ~~Fácil~~ | ~~✅ Solucionado — `logout()` en `lib/auth.ts`, Header acepta `onLogout`, propagado vía `DashboardLayout` a todas las páginas~~ |

### 🔸 Nivel 2 — Horas (< 2-3 h c/u)

| # | Tarea | Dificultad | Detalle |
|---|-------|-----------|---------|
| 7 | **Definir types compartidos** | Fácil | `lib/types/index.ts` solo tiene comentarios. Tipos como `Boleta`, `Cliente`, `EstadoBoleta`, `Producto` están definidos ad-hoc en mocks. Hay duplicación: `RecentClient` en mocks/dashboard.ts tiene campos diferentes a los de clientProfile.ts. |
| 8 | **Crear `lib/utils.ts` con helpers** | Fácil | Agregar `formatCurrency()`, `formatDate()`, etc. para evitar formateo inline. |
| 9 | **Configurar TanStack Query** | Media | Crear `queryClient.ts`, wrapper provider. Sin esto no hay conexión real a API. |
| 10 | **Conectar login/register a API real** | Media | Reemplazar mock/simulación por llamadas Axios reales. Requiere #9. |
| 11 | **Protección de rutas (AuthGuard)** | Media | Crear wrapper que redirija a `/` si no hay sesión activa. Aplicar a todas las rutas del dashboard. |
| 12 | **Crear `store/authStore.ts`** | Fácil | Zustand store para sesión de usuario (token, user data, login/logout actions). Ya hay placeholder en `lib/store/`. |

### 🔶 Nivel 3 — Días (4-8 h c/u)

| # | Tarea | Dificultad | Detalle |
|---|-------|-----------|---------|
| 13 | **Página de Clientes (`/clientes`)** | Media | Lista de clientes con tabla o cards, búsqueda/filtro, link a perfil. Actualmente es stub. |
| 14 | **Página de Boletas (`/boletas`)** | Media | Lista/tabla de boletas con filtros por estado, fechas, cliente. Actualmente es stub. |
| 15 | **Página de Productos (`/productos`)** | Media | CRUD de productos (nombre, precio, stock). Actualmente es stub. |
| 16 | **Página de Ventas (`/ventas`)** | Media | Registro de venta (seleccionar productos, cantidades, generar boleta). Actualmente es stub. |
| 17 | **Página de Stock (`/stock`)** | Media | Vista de inventario con niveles de stock, alertas de stock bajo. Actualmente es stub. |
| 18 | **Página de Historial (`/historial`)** | Media | Historial completo de transacciones, búsqueda por fecha/rango. Actualmente es stub. |

### 🔷 Nivel 4 — Semanas (1-2 semanas c/u)

| # | Tarea | Dificultad | Detalle |
|---|-------|-----------|---------|
| 19 | **Página de Rendimiento (`/rendimiento`)** | Alta | Reportes/gráficos avanzados: comparativas mensuales, tendencias, proyecciones. Actualmente es stub. |
| 20 | **Página de Notificaciones (`/notificaciones`)** | Media | Centro de notificaciones (boletas vencidas, stock bajo, etc.), marcado como leído. Actualmente es stub. |
| 21 | **Página de Lista Negra (`/lista-negra`)** | Media | Gestión de clientes bloqueados, motivo, fecha. Actualmente es stub. |
| 22 | **Configurar WebSockets (socket.io-client)** | Alta | Notificaciones en tiempo real, actualización de datos sin polling. La dependencia ya está en `package.json`. |
| 23 | **Agregar tests** | Alta | Configurar Vitest + React Testing Library, escribir tests de componentes y pages clave. |
| 24 | **Integración con Sonner** | Media | Sistema de toasts para feedback de acciones (guardado exitoso, error, etc.). La dependencia ya está en `package.json`. |
| 25 | **Integración con Framer Motion** | Media | Animaciones de transición entre páginas, micro-interacciones. La dependencia ya está en `package.json`. |

---

## Bugs / Deuda técnica detectada

- ~~**Ruta `/clientes/:id` no configurada**~~ — ✅ Solucionado, ruta agregada en `App.tsx`
- ~~**Duplicación de types**~~: ✅ Parcialmente solucionado — `RecentClient` en mocks/dashboard.ts ahora incluye `id`; `ClientProfile` y `TopProduct` aún coexisten sin estandarizar (ver Nivel 2, tarea 7)
- ~~**Layout repetido**~~: ✅ Solucionado — `DashboardLayout` compartido, menús centralizados en `lib/menus.ts`
- ~~**`App.css` muerto**~~: ✅ Solucionado — archivo eliminado
- ~~**Color hardcodeado**~~: ✅ Solucionado — variable `--input-bg` en sistema de temas
- ~~**Import inconsistente**~~: ✅ Solucionado — barrel imports unificados

---

## Resumen de esfuerzo total estimado

| Nivel | Ítems | Tiempo estimado |
|-------|-------|----------------|
| 🔹 Nivel 1 (rápido) | 0 | ✅ Completado |
| 🔸 Nivel 2 (horas) | 6 | ~10-15 horas |
| 🔶 Nivel 3 (días) | 6 | ~24-48 horas |
| 🔷 Nivel 4 (semanas) | 7 | ~6-12 semanas |
| **Total** | **19** | **~7-12 semanas** |

---

## Recomendación

**~~Primer sprint (Nivel 1)~~**: ✅ Completado. Ruta de perfil, layout compartido, App.css eliminado, SearchBar arreglado, imports unificados, logout handler agregado.

**Segundo sprint (Nivel 2)**: Establecer la base técnica (types, utils, auth store, query client, auth guard) y conectar login/register a API. Sin esto, las features no pueden ser reales.

**Tercer sprint+ (Niveles 3-4)**: Implementar las 8 páginas stub (empezando por Clientes y Boletas que son las más críticas para un negocio local), luego rendimiento, notificaciones, y features avanzadas (WebSockets, tests, animaciones).
# Documentación del Proyecto React: E-commerce

## Instalación y ejecución

Para instalar y ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio**: El primer paso es clonar el repositorio desde GitHub en tu máquina local.
2. **Instalar las dependencias**: Con `npm install` se instalan todas las dependencias que el proyecto necesita para funcionar.
3. **Ejecutar el proyecto**: `npm run dev` lanza el servidor de desarrollo, lo que te permite ver y trabajar en la aplicación.

**Versión Node.js instalada "^18.18.0 || ^19.8.0 || >= 20.0.0"**

## Parámetros configurables (constantes)

El carrito de compras se gestiona a través de un identificador de usuario.

La constante `ID_CART_USER` se encuentra en la carpeta **constants** y se define de la siguiente manera:

```javascript
export const ID_CART_USER = 1;
```

Si cambias el valor de ID_CART_USER por otro número, se cargará un carrito diferente.

### Arquitectura del Proyecto

La estructura del proyecto sigue una organización modular para garantizar una fácil escalabilidad y mantenimiento. A continuación, se explica la organización de las carpetas principales:

#### `src/app`

Contiene las páginas principales de la aplicación, las cuales corresponden a vistas específicas. Cada archivo aquí representa una ruta en la aplicación. Las páginas clave son:

- **Home (`/`)**: Página principal que muestra un listado de productos y categorías.
- **Categoría (`/category/[category]`)**: Página que filtra y muestra los productos por categoría, usando enrutado dinámico.
- **Producto (`/product/[id]`)**: Página de detalle de un producto, donde se presenta su imagen, descripción y precio.
- **Carrito (`/cart`)**: Página donde se listan los productos añadidos al carrito, mostrando subtotales, total de la compra y un formulario para completar los datos de envío.

#### `src/components`

Contiene todos los componentes reutilizables de la aplicación. Se organizan en subcarpetas dependiendo de su tipo o funcionalidad:

- **Common**: Componentes generales que se utilizan en varias partes de la aplicación, como botones, formularios, o modales.
- **Layout**: Componentes relacionados con la estructura y diseño general de las páginas, como cabeceras, pie de página, y barra de navegación.

#### `src/providers`

Contiene los proveedores que gestionan el contexto y la configuración global, incluyendo la configuración de la store de Redux. Aquí se inicializan los hooks de Redux y la integración con la API.

#### `src/store`

Esta carpeta contiene toda la gestión del estado de la aplicación, que se realiza mediante Redux Toolkit. Está organizada de la siguiente manera:

- **api**: Contiene los endpoints y la lógica de llamadas a la API utilizando RTK Query. Aquí se definen los `createApi` para gestionar las peticiones de productos, categorías y el carrito.
- **cartSlice**: Aquí se gestionan las acciones relacionadas con el carrito en el estado local, como añadir, eliminar o actualizar productos en el carrito.

#### `src/styles`

Contiene los estilos globales de la aplicación. Se usan **styled-components** para estilizar los componentes. Aquí se gestionan las variables globales de colores, tamaños y fuentes, además de los estilos de cada componente y layout.

#### `src/types`

Aquí se encuentran las interfaces y tipos de TypeScript que definen la forma de los datos en la aplicación. Por ejemplo, se definen las interfaces para los productos, categorías y el carrito de compras, mejorando la seguridad y claridad en el código.

---

### Resumen de la arquitectura

1. **Páginas (`src/app`)**: Cada página es responsable de una vista en la aplicación.
2. **Componentes (`src/components`)**: Componentes reutilizables divididos en **common** y **layout**.
3. **Providers (`src/providers`)**: Configuración global, como la store y el contexto.
4. **Store (`src/store`)**: Gestión del estado con Redux Toolkit (RTK Query y slices).
5. **Estilos (`src/styles`)**: Estilos globales y componentes estilizados.
6. **Tipos (`src/types`)**: Interfaces y tipos para la estructura de datos en la app.

Esta estructura modular garantiza que el proyecto sea fácil de entender, escalable y fácil de mantener a medida que crece.

## Stack Tecnológico

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Next.js**: Framework de React que permite una mejor optimización, SSR (Server-Side Rendering) y generación de páginas estáticas, mejorando el rendimiento de la aplicación.
- **React v18**: Biblioteca principal para la construcción de la interfaz de usuario, permitiendo una experiencia dinámica y modular.
- **Redux Toolkit**: Librería para la gestión del estado global de la aplicación, facilitando el manejo del carrito de compras y otras funcionalidades.
- **Styled Components**: Herramienta para aplicar estilos CSS dentro de los componentes de React, permitiendo una mejor modularización y mantenimiento del código.
- **Framer Motion**: Biblioteca para añadir animaciones fluidas y atractivas en la interfaz de usuario.
- **Lucide React & React Icons**: Conjunto de iconos SVG optimizados para React, utilizados para mejorar la experiencia visual.
- **TypeScript**: Superset de JavaScript que añade tipado estático, mejorando la calidad del código y reduciendo errores.
- **ESLint**: Herramienta para analizar el código y mantener buenas prácticas de desarrollo en JavaScript y TypeScript.

Este stack ha sido elegido para garantizar un desarrollo eficiente, una aplicación rápida y una experiencia de usuario fluida.

## Gestión del Estado

La gestión del estado se ha realizado con Redux Toolkit, utilizando dos enfoques principales:

1. **RTK Query** para las llamadas a la API (módulo cartApi.ts).

2. **Redux Slice** para el manejo del estado del carrito local (cartSlice.ts).

Las llamadas a la API se manejan con createApi de RTK Query, incluyendo los siguientes endpoints:

- getCart: Obtiene el carrito de un usuario.

- addToCart: Agrega productos al carrito.

- updateCart: Actualiza la cantidad de productos en el carrito.

- deleteCart: Elimina el carrito (pero la api no permite eliminar productos individualmente, la solución aplicada para eso ha sido eliminar el producto en el estado y luego actualizar el carrito, que eso si lo permite la API).

## Diseño de la Aplicación

El diseño de la aplicación sigue el UI Kit de Nike, asegurando una apariencia moderna y consistente. Se han utilizado los diseños de forma global (fuentes, tamaños, colores, etc.) para crear una experiencia visual coherente en todas las páginas.

🔗 Enlace al diseño en Figma: [Nike UI Kit](https://www.figma.com/community/file/1235719100191160651)

Además de la arquitectura y el stack tecnológico, una pregunta esencial en el desarrollo de la aplicación es:

**¿Qué experiencia quiero que tenga el usuario con la aplicación?**

En esta aplicación, la prioridad ha sido la **fluidez y una navegación eficiente**. Para ello:

- Se han implementado skeleton loaders para mejorar la percepción de carga en las fichas de productos.

- Se han añadido transiciones y animaciones fluidas para mejorar la experiencia de usuario.

- Se ha optimizado la navegación para que las acciones requieran los menores pasos posibles.

- Se ha implementado un hook customizado para la búsqueda, permitiendo al usuario encontrar rápidamente el producto que desea comprar.

## Ecommerce API Integration

Este proyecto integra una API de ecommerce usando `Redux Toolkit Query` para gestionar categorías, productos y el carrito de compras.

## Endpoints

### 1. Categorías

- **Obtener categorías**: `GET /products/categories`

### 2. Productos

- **Obtener productos por categoría**: `GET /products/category/{categoryName}`
- **Obtener detalles de un producto**: `GET /products/{id}`

### 3. Carrito

- **Obtener carrito**: `GET /carts/{cartId}`
- **Añadir producto al carrito**: `POST /carts`
- **Actualizar carrito**: `PATCH /carts/{cartId}`

## Implementación con Redux Toolkit

- **`productApi`**: Gestión de productos (todos, por categoría y por ID).
- **`categoryApi`**: Gestión de categorías de productos.
- **`cartApi`**: Gestión del carrito de compras (añadir, eliminar y actualizar productos).

## Dependencias

- `@reduxjs/toolkit`
- `react-redux`

Todo está conectado a la API de [fakestoreapi.com](https://fakestoreapi.com/) sin necesidad de validación de usuarios, usando un ID de carrito fijo.

## Features y mejoras

- **Registro y Login de usuarios**
- **Búsqueda avanzada de productos**: Barra de búsqueda con filtros avanzados (precio, calificación, marcas).
- **Sistema de recomendaciones de productos**: Sugerencias personalizadas basadas en el comportamiento del usuario.
- **Valoraciones y reseñas de productos**: Permitir valoraciones de productos con puntuaciones de 1 a 5 estrellas.
- **Historial de compras y recompensas**: Sección de "Mi cuenta" con historial y recompensas por compras.
- **Chat en vivo y soporte al cliente**: Integración de chat en vivo o chatbot para atención al cliente.
- **Múltiples métodos de pago**: Soporte para pagos con tarjetas, PayPal, Apple Pay, Google Pay, etc.
- **Integración con redes sociales**: Opciones para compartir productos en redes sociales.
- **Ofertas y descuentos personalizados**: Cupones y promociones basadas en el comportamiento del usuario.
- **Optimización para móviles (responsive Design)**: Diseño optimizado para dispositivos móviles, adaptar el menú y la experiencia.
- **Sistema de listas de deseos (Wish List)**: Guardar productos para comprarlos más tarde.
- **Envío y seguimiento de pedidos**: Rastrear el estado de los pedidos en tiempo real.
- **Multilenguaje y multimoneda**: Soporte para varios idiomas y monedas.
- **Sistema de suscripción para productos**: Suscripciones recurrentes para productos necesarios regularmente.
- **Accesibilidad mejorada**: Cumplimiento de las pautas de accesibilidad web (WCAG).

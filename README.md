# Formulario de Registro - Frontend

Este proyecto es una aplicación de formulario de registro desarrollada con tecnologías modernas de frontend. Proporciona una interfaz de usuario intuitiva con validación en tiempo real y feedback visual para el usuario.

## Tecnologías Utilizadas

### Frontend
- **Next.js (v15.3.2)**: Framework de React que permite renderizado del lado del servidor y generación de sitios estáticos.
- **React (v18.3.1)**: Biblioteca para construir interfaces de usuario con componentes reutilizables.
- **TypeScript**: Superset de JavaScript que añade tipado estático para mejorar la calidad del código y la experiencia de desarrollo.
- **Tailwind CSS (v4)**: Framework CSS utilitario que permite un desarrollo rápido y consistente de interfaces.
- **tw-animate-css**: Biblioteca de animaciones para Tailwind CSS.

### Validación y Formularios
- **Zod (v3.25.32)**: Biblioteca de validación de esquemas TypeScript-first para validar datos de entrada.
- **React Hook Form (v7.56.4)**: Biblioteca para manejo de formularios con alto rendimiento y validación flexible.
- **@hookform/resolvers**: Integraciones para conectar React Hook Form con bibliotecas de validación como Zod.

### Componentes UI
- **Radix UI**: Biblioteca de componentes primitivos accesibles y sin estilos para construir sistemas de diseño robustos.
- **Lucide React**: Biblioteca de iconos SVG para React.
- **class-variance-authority & clsx**: Utilidades para manejar clases condicionales en componentes.

## Características Implementadas

- **Formulario de Registro**: Interfaz de usuario moderna y responsiva para registro de usuarios.
- **Validación en Tiempo Real**: Validación de campos mientras el usuario escribe con mensajes de error claros.
- **Indicador de Fuerza de Contraseña**: Componente visual que muestra la fortaleza de la contraseña ingresada.
- **Interfaz Adaptable**: Diseño responsivo que se adapta a diferentes tamaños de pantalla.
- **Accesibilidad**: Implementación de prácticas de accesibilidad para mejorar la experiencia de todos los usuarios.
- **Modo Oscuro/Claro**: Soporte para temas de interfaz claros y oscuros.

## Estructura del Proyecto

- **src/components**: Componentes reutilizables como el formulario y el indicador de fuerza de contraseña.
- **src/app**: Estructura de la aplicación Next.js con páginas y layouts.
- **src/app/globals.css**: Estilos globales y configuración de temas.

## Cómo Iniciar el Proyecto

Para ejecutar el proyecto en modo desarrollo:

```bash
npm i
```
y luego: (no olvidar iniciar el back-end)

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Despliegue

Este proyecto puede ser desplegado en plataformas como Vercel, Netlify o cualquier otro servicio que soporte aplicaciones Next.js.

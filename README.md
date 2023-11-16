# Spotify Albums Web Project

## Descripción General
Spotify Albums Web Project es una aplicación web que permite a los usuarios buscar artistas en Spotify y visualizar sus álbumes ordenados por popularidad. Este proyecto interactúa con la API de Spotify y presenta una interfaz de usuario amigable y responsive.

## Tecnologías Utilizadas
- **Frontend**: React
- **Backend**: Node.js con Express y TypeScript
- **Base de Datos**: SQLite con Sequelize como ORM
- **Otras Bibliotecas/Frameworks**: Axios, React Router, React Icons

## Arquitectura del Proyecto
El proyecto se estructura en dos partes:
- **Frontend**: Desarrollado con React, maneja la interfaz de usuario y la interacción con el backend.
- **Backend**: Implementado con Node.js y Express, maneja las solicitudes a la API de Spotify y almacena registros de búsquedas en una base de datos SQLite.

## Características Principales
- Búsqueda de artistas a través de su nombre.
- Visualización de álbumes de artistas, incluyendo imágenes y datos relevantes.
- Registro en base de datos de cada búsqueda realizada, incluyendo IP del usuario y fecha.

## Decisiones de Diseño y Arquitectura
- Implementación de SQLite para simplificar el almacenamiento y manejo de datos.
- Uso de Sequelize como ORM para facilitar el manejo de la base de datos.
- Uso de TypeScript para mejorar la calidad del código y facilitar el mantenimiento.
- Uso de React Router para manejar las rutas de la aplicación.
- Uso de React Icons para mejorar la interfaz de usuario.
- Uso de Axios para realizar solicitudes a la API de Spotify.
- Uso de Express para manejar las solicitudes al backend.

## Instrucciones de Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/agustinamartinez1044/spotify-webapp.git

# Instalar dependencias
   - Frontend: cd client && npm install.
   - Backend: cd server && npm install.

# Iniciar el servidor: 
   - build: cd server && npm run build.
   - start: cd server && npm start. 

# Ejecutar el frontend:
   - start: cd client && npm start
```

## Uso del Proyecto
1. Abre la aplicación en tu navegador.
2. Busca un artista usando la barra de búsqueda.
3. Explora los álbumes mostrados.

## Contribuciones y Mejoras Futuras
Las contribuciones son bienvenidas. Algunas mejoras futuras incluyen:
- Implementación de un sistema de autenticación de usuarios.
- Mejora en el diseño de la interfaz de usuario.
- Agregar un loader para indicar que la aplicación está cargando.
- Agregar una página de error.
- Implementación de pruebas unitarias.


## Desafíos y Aprendizajes
- Interacción con la API de Spotify, incluyendo autenticación y manejo de datos.
- Uso de los hooks de React, especialmente `useState` y `useEffect` para manejar el estado de la aplicación.
- Usar TypeScript para mejorar la calidad del código y facilitar el mantenimiento.

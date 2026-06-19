# PDF Collector

Descarga y combina PDFs de cualquier sitio web

## Últimas Novedades

### Versión 1.0.8 (Lanzada el 19/6/2026)
- Cierre forzado automático de la aplicación y procesos secundarios durante la instalación/actualización para evitar bloqueos en Windows.
- Corrección de visualización del icono (favicon) y barra de tareas en la versión de Windows.
- Ocultación de todos los menús en la versión de Windows, dejando únicamente el menú "Ayuda" con las opciones de "Buscar actualización..." y "Acerca de".
- Optimización y reducción de tamaño en los recursos de imagen (logo PNG de 256x256 e icon.ico de 256x256).

## Características Técnicas de Desarrollo

Este proyecto ha sido desarrollado utilizando un stack moderno, seguro y optimizado para aplicaciones de escritorio:

- **Frontend**:
  - **Framework/Biblioteca**: React 19 para la construcción de una interfaz reactiva e interactiva.
  - **Lenguaje**: TypeScript para garantizar robustez, tipado estático y mantenibilidad del código.
  - **Construcción y Servidor de Desarrollo**: Vite para compilaciones ultrarrápidas y hot module replacement (HMR).
  - **Animaciones**: Framer Motion para lograr transiciones y microinteracciones fluidas y atractivas.
  - **Iconografía**: Lucide React para un set de iconos consistente y moderno.

- **Backend / Proceso Principal (Electron)**:
  - **Entorno**: Electron 39 como entorno de escritorio multiplataforma (macOS y Windows).
  - **Servidor Local**: Express para la gestión interna de descarga y procesado de archivos PDF, superando limitaciones de CORS.
  - **Web Scraping / Extracción**: Axios para peticiones HTTP eficientes y Cheerio para el análisis del DOM HTML en busca de enlaces PDF de manera concurrente.
  - **Manipulación de Archivos**: pdf-lib para la fusión, división y reordenación de páginas de documentos PDF, y JSZip para la compresión de archivos descargados.

- **Infraestructura de Distribución**:
  - **Compilación de Instaladores**: electron-builder para generar ejecutables DMG de macOS y asistentes de instalación NSIS (EXE) de Windows.
  - **Actualizaciones Automáticas**: Sistema integrado de auto-actualización que comprueba nuevas versiones consultando un archivo de versión compartido en una carpeta pública de Google Drive.

# AnoniData

AnoniData es una herramienta de escritorio diseñada para eliminar de forma irreversible datos de carácter personal (PII) en documentos PDF. No se toca el PDF original, generando un nuevo PDF anonimizado en la misma carpeta del documento. Todo el procesamiento se realiza de manera 100% local en tu ordenador, garantizando el cumplimiento  del RGPD (Reglamento General de Protección de Datos) y el principio de 'Zero Data Retention'

## 🚀 Últimas Novedades

- **Migración a Tauri v2**: Transición desde Electron a Tauri v2 para un rendimiento optimizado, menor consumo de memoria y tamaño de instalador reducido, además de un aislamiento de seguridad mejorado en el proceso IPC.
- **Implementación de Dark Mode**: Interfaz adaptativa con soporte completo para modo oscuro y diseño renovado de iconos, ofreciendo una experiencia visual premium y moderna.
- **Detección Visual Integrada (OCR)**: Mejoras significativas en el backend de Python para la detección y redacción de firmas manuscritas y códigos QR dentro de los documentos.
- **Publicación Directa en Google Drive**: Automatización de la compilación y copia del instalador ejecutable y sus metadatos a la unidad pública de Google Drive para simplificar la distribución.

## 🛠️ Características Técnicas de Desarrollo

El desarrollo de AnoniData se basa en una arquitectura híbrida de alto rendimiento:

### Arquitectura y Frameworks
- **Tauri v2 (Rust)**: Actúa como el contenedor de escritorio seguro, gestionando la ventana nativa y la comunicación IPC (Inter-Process Communication) securizada con el backend.
- **Frontend (React 18 + TypeScript)**: Interfaz de usuario interactiva y fluida construida sobre React con TypeScript y estilizada con TailwindCSS.
- **Backend (Python 3.11+)**: Ejecutado localmente como un binario sidecar compilado con PyInstaller, encargado del procesamiento pesado de PDF y análisis de datos.

### Procesamiento de PDFs y Lenguaje Natural (NLP)
- **PyMuPDF**: Manipulación y redacción nativa e irreversible de PDFs (eliminación del contenido subyacente y metadatos).
- **spaCy (Modelo en español: es_core_news_lg)**: Procesamiento de Lenguaje Natural para identificar entidades nombradas (nombres de personas, localizaciones, etc.).
- **Tesseract OCR / EasyOCR**: Reconocimiento óptico de caracteres para extraer texto de imágenes integradas y PDFs no digitalizados.
- **OpenCV & PyZbar**: Procesamiento de imagen para la detección de firmas manuscritas y códigos de barras/QR.

### Seguridad y Privacidad
- **Ejecución 100% local**: No requiere conexión a internet para funcionar, ni realiza peticiones externas.
- **Zero Data Retention**: No se almacenan copias temporales de los documentos analizados de forma persistente.
- **Logs Sanitizados**: El sistema de logs local oculta y reemplaza cualquier dato personal detectado antes de escribir en disco.

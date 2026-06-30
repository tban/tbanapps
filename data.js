const lastPublishedDate = "2026-06-19T20:49:47+01:00";

const appsData = [
  {
    id: "anonidata",
    name: "AnoniData",
    tagline: "Anonimización de PDFs 100% Local y Segura",
    version: "1.0.3",
    releaseDate: "2026-06-30T21:29:38Z",
    logo: "ANONIDATA/logo.png",
    description: "AnoniData es una herramienta profesional de escritorio diseñada para eliminar de forma irreversible datos de carácter personal (PII) en documentos PDF. Todo el procesamiento se realiza de manera 100% local en tu ordenador, garantizando el cumplimiento estricto del RGPD (Reglamento General de Protección de Datos) y el principio de 'Zero Data Retention'.",
    features: [
      "Tauri v2 (Rust) + React 18 + TypeScript + Python 3.11+ (Sidecar)",
      "Procesamiento avanzado con PyMuPDF y spaCy para NLP (modelo es_core_news_lg)",
      "Reconocimiento Óptico de Caracteres (OCR) integrado con Tesseract y EasyOCR para PDFs escaneados",
      "Detección inteligente de firmas manuscritas y códigos QR/Barras mediante OpenCV y PyZbar",
      "Ejecución offline total: ningún archivo sale nunca de tu máquina local",
      "Logs sanitizados localmente para evitar la fuga accidental de datos sensibles"
    ],
    releaseNotes: [
      "Migración a Tauri v2: Transición desde Electron para optimizar el rendimiento, reducir el consumo de memoria a la mitad y recortar drásticamente el tamaño del instalador.",
      "Implementación de Dark Mode: Interfaz adaptativa con soporte completo para modo oscuro y diseño renovado de iconos.",
      "Detección Visual Integrada (OCR): Mejoras significativas en el backend de Python para la detección y redacción de firmas manuscritas y códigos QR dentro de los documentos.",
      "Publicación Directa en Google Drive: Automatización de la compilación y copia del instalador ejecutable y sus metadatos a la unidad pública de Google Drive."
    ],
    downloads: {
      mac: {
        label: "macOS (.dmg)",
        url: "https://drive.google.com/uc?export=download&id=1bxE2vziPKfNEbWwSo0zO6IG_3qz7EwCc&confirm=t",
        localPath: "ANONIDATA/AnoniData.dmg",
        arch: "Universal"
      },
      windows: {
        label: "Windows (.exe)",
        url: "https://drive.google.com/uc?export=download&id=1aE8XuzonmI9Bi50Th7vk9FawOHkthf_4&confirm=t",
        arch: "x64"
      }
    }
  },
  {
    id: "caffeinatenow",
    name: "CaffeinateNow",
    tagline: "Control de reposo minimalista y moderno para macOS",
    version: "1.6",
    releaseDate: "2026-06-17T12:00:00.000Z",
    logo: "CAFFEINATENOW/logo.png",
    description: "CaffeinateNow es una utilidad de barra de menús ultraligera y moderna diseñada exclusivamente para macOS. Permite mantener el sistema despierto de forma temporal o apagar la pantalla rápidamente mediante comandos nativos del sistema operativo, evitando interrupciones molestas durante tareas de larga duración o descargas nocturnas.",
    features: [
      "Desarrollado de forma nativa en Swift 5 y SwiftUI para un consumo mínimo de recursos",
      "Efectos visuales translúcidos modernos (NSVisualEffectView) adaptados a la estética de macOS",
      "Prevención de reposo mediante invocación del comando del sistema `/usr/bin/caffeinate` con argumentos optimizados",
      "Apagado inmediato del panel usando el comando pmset nativo",
      "Opción de arranque con el sistema (Launch at Login) integrado mediante SMAppService (macOS 13+)"
    ],
    releaseNotes: [
      "Actualización Automática y Silenciosa: Detección automática en el arranque mediante la lectura de versión hospedada en Google Drive para una experiencia libre de mantenimiento.",
      "Inicio Automático (Launch at Login): Integración oficial con SMAppService en macOS Ventura (13.0+) y superiores.",
      "Interfaz Fluida y Traslúcida: Rediseño completo de la interfaz flotante usando SwiftUI y AppKit nativo para efectos de desenfoque de cristal.",
      "Búsqueda Manual de Actualizaciones: Botón en la sección de información (About) para forzar la verificación al instante."
    ],
    downloads: {
      mac: {
        label: "macOS ARM64 (.zip)",
        localPath: "CAFFEINATENOW/CaffeinateNow.zip",
        arch: "Apple Silicon ARM"
      }
    }
  },
  {
    id: "geturlfiles",
    name: "PDF Collector",
    tagline: "Descarga y fusión de PDFs desde cualquier sitio web",
    version: "1.0.9",
    releaseDate: "2026-06-19T19:20:45.736Z",
    logo: "GETURLFILES/logo.png",
    description: "PDF Collector es una potente utilidad de escritorio que simplifica el web scraping de archivos PDF. Introduce cualquier enlace web y la aplicación analizará el código HTML, detectará los enlaces de descarga de PDFs de forma concurrente, los descargará en tu equipo local y te permitirá combinarlos en un único documento unificado o empaquetarlos en un archivo ZIP con un solo clic.",
    features: [
      "Construido con React 19, TypeScript y Vite para una interfaz ultrarrápida y reactiva",
      "Contenedor de escritorio con Electron 39 que proporciona soporte multiplataforma completo",
      "Servidor local Express integrado en el proceso backend para mitigar restricciones de CORS de forma segura",
      "Análisis concurrente del DOM con Cheerio y peticiones Axios de alto rendimiento",
      "Manipulación y fusión de documentos PDF mediante la librería de bajo nivel pdf-lib",
      "Mecanismo automático de descarga y compresión en lotes usando JSZip"
    ],
    releaseNotes: [
      "Unificación del nombre de los ejecutables en Google Drive (sin incluir el número de versión en el nombre de archivo).",
      "Eliminación automática de las versiones de ejecutables anteriores en el repositorio al publicar una nueva actualización."
    ],
    downloads: {
      mac: {
        label: "macOS (.dmg)",
        url: "https://drive.google.com/uc?export=download&id=1rqYyTvLDng41QaHuyNpGiAuYv2hzUuJ1&confirm=t",
        localPath: "GETURLFILES/PDF Collector.dmg",
        arch: "Intel / Apple Silicon"
      },
      windows: {
        label: "Windows (.exe)",
        url: "https://drive.google.com/uc?export=download&id=1_dNrj9_vIQH6RzJL5venBZHF40l3hwd7&confirm=t",
        localPath: "GETURLFILES/PDF Collector Setup.exe",
        arch: "x64"
      }
    }
  }
];

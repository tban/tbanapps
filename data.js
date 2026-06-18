const appsData = [
  {
    id: "anonidata",
    name: "AnoniData",
    tagline: "Anonimización de PDFs 100% Local y Segura",
    version: "1.0.0",
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
        url: "https://github.com/tban/tbanapps/releases/download/v1.0.0/AnoniData.dmg",
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
    version: "1.0.0",
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
      "Versión Inicial 1.0.0: Lanzamiento oficial de la aplicación con soporte para web scraping concurrente de PDFs.",
      "Sistema de Auto-actualización: Integración de comprobación automática de actualizaciones al arrancar la aplicación desde Google Drive.",
      "Comprobación Manual: Botón dedicado en el panel del menú para comprobar versiones manualmente.",
      "Redes Sociales del Creador: Incorporación de enlace directo a Twitter/X (@Tbanr) en el panel principal."
    ],
    downloads: {
      mac: {
        label: "macOS (.dmg)",
        url: "https://github.com/tban/tbanapps/releases/download/v1.0.0/PDF%20Collector-1.0.0.dmg",
        localPath: "GETURLFILES/PDF Collector-1.0.0.dmg",
        arch: "Intel / Apple Silicon"
      },
      windows: {
        label: "Windows (.exe)",
        url: "https://github.com/tban/tbanapps/releases/download/v1.0.0/PDF%20Collector%20Setup%201.0.0.exe",
        localPath: "GETURLFILES/PDF Collector Setup 1.0.0.exe",
        arch: "x64"
      }
    }
  }
];

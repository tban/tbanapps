# CaffeinateNow

CaffeinateNow es una utilidad de barra de menús minimalista y moderna para macOS, diseñada para mantener el sistema despierto de forma temporal o apagar la pantalla rápidamente mediante comandos nativos, evitando interrupciones durante el trabajo o descargas de larga duración.

## Últimas Novedades

- **Actualización Automática y Silenciosa**: Implementada la detección automática de nuevas versiones mediante la lectura de un archivo `version.json` hospedado en Google Drive. La aplicación puede auto-actualizarse de manera completamente silenciosa en su inicio si así está configurado.
- **Inicio Automático (Launch at Login)**: Integración con macOS 13.0+ usando `SMAppService` para permitir al usuario activar o desactivar que la aplicación se abra automáticamente al iniciar sesión.
- **Interfaz Fluida y Traslúcida**: Diseño moderno con efectos de desenfoque (`VisualEffectView` / `NSVisualEffectView`) y animaciones fluidas utilizando SwiftUI.
- **Búsqueda Manual de Actualizaciones**: Añadido un botón en el menú de información (About) para verificar manualmente si hay versiones más recientes disponibles.

## Características Técnicas de Desarrollo

- **Lenguaje de Programación**: Swift 5.
- **Plataformas Soportadas**: macOS 11.0 o superior (compilado nativamente para la arquitectura Apple Silicon `arm64-apple-macos11.0`).
- **Frameworks Principales**:
  - **SwiftUI**: Para la construcción reactiva de la interfaz de usuario.
  - **AppKit / Cocoa**: Integración con `NSApplication`, `NSWindow` flotante sin bordes (`.borderless` de nivel `.floating`), y `NSViewRepresentable` para efectos visuales avanzados.
  - **ServiceManagement**: Uso de `SMAppService` para gestionar el arranque con el sistema.
- **Mecanismos del Sistema**:
  - **Prevención del Reposo**: Invocación de la herramienta del sistema `/usr/bin/caffeinate` con los argumentos `["-dimsu"]` para impedir la suspensión de la pantalla, el disco y el sistema.
  - **Apagado Rápido de Pantalla**: Invocación del comando `/usr/bin/pmset displaysleepnow` para apagar la pantalla inmediatamente.
- **Sistema de Compilación y Despliegue**:
  - Script en bash (`build.sh`) que automatiza el ciclo de vida: limpia compilaciones previas, compila el ejecutable usando `swiftc`, genera el conjunto de iconos (`AppIcon.icns`) a partir de una imagen de origen mediante `sips` e `iconutil`, y empaqueta la aplicación final.
  - Publicación automatizada a una ruta configurada de Google Drive, incluyendo la compresión a formato `.zip` y la generación de metadatos de actualización (`version.json`).

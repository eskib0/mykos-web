export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      features: 'Características',
      architecture: 'Arquitectura',
      providers: 'Proveedores',
      voice: 'Voz',
      cli: 'CLI',
      security: 'Seguridad',
      install: 'Instalación',
    },
    hero: {
      badge: 'v1.0 — Lanzamiento inicial',
      subtitle: 'Plataforma personal de inteligencia artificial con pasarela multimodelo, motor de voz bidireccional y suite de aplicaciones nativas para',
      linux: 'Linux',
      and: 'y',
      windows: 'Windows',
      tagline: 'Multi-Model AI Gateway · Local & Cloud Voice Engine · CLI & Desktop Suite',
      cta: 'Empezar ahora →',
      github: 'Ver en GitHub',
      stats: [
        { value: '74', label: 'Rutas' },
        { value: '36', label: 'Políticas HMAC' },
        { value: '207', label: 'Herramientas REA' },
        { value: '12+', label: 'Proveedores IA' },
      ],
    },
    features: {
      title: 'Todo en un solo',
      highlight: 'ecosistema',
      subtitle: 'Desde la inferencia local hasta la ingeniería inversa, MyKOS cubre todo lo que necesitas para trabajar con IA de forma privada y potente.',
      items: [
        {
          icon: '🔐',
          title: 'Gateway Seguro',
          description: '74 rutas con políticas HMAC firmadas, autoridad de permisos y almacén ACID con revisiones y copias de seguridad.',
        },
        {
          icon: '🧠',
          title: 'Multi-Modelo',
          description: 'Claude, OpenAI, Gemini, Meta AI, Mistral, NVIDIA, Kimi y más. Un solo gateway para todos los proveedores.',
        },
        {
          icon: '🎙️',
          title: 'Voz Bidireccional',
          description: 'Whisper para STT, Chatterbox para TTS GPU y Kokoro para TTS CPU. Voz 100% local o en la nube.',
        },
        {
          icon: '⚡',
          title: 'Inferencia Local',
          description: 'Strata CUDA (125B MoE), llama.cpp y Ollama. Ejecuta modelos potentes sin salir de tu máquina.',
        },
        {
          icon: '🔬',
          title: 'Ingeniería Inversa (REA)',
          description: '207 herramientas MCP para decompilación nativa, análisis de ELF/PE/Mach-O/APK/WASM y bundles JS.',
        },
        {
          icon: '🖥️',
          title: 'Apps de Escritorio',
          description: 'Suite nativa para Linux: cliente seguro de WhatsApp Web (MyKOS-Whats, Qt6), Monitor de sistema en tiempo real (GTK4) y Analizador de disco (PySide6).',
          link: 'https://github.com/eskib0/mykos-whats',
          linkText: 'Ver MyKOS-Whats en GitHub',
        },
      ],
    },
    architecture: {
      title: 'Arquitectura',
      highlight: 'separada',
      subtitle: 'El Gateway decide y guarda. El Worker ejecuta. Frontera clara, seguridad total.',
      layers: [
        { icon: '🌐', label: 'Navegador Web / UI', detail: 'http://127.0.0.1:3210' },
        { icon: '🔐', label: 'MyKOS Gateway (Node.js)', detail: '74 rutas · 36 políticas HMAC · Bucle de chat · Almacén ACID' },
        { icon: '⚙️', label: 'Trabajador Python (server.py)', detail: '127.0.0.1:3211 · HTTP interno autenticado · Firma HMAC' },
        { icon: '🧠', label: 'Motores y Proveedores', detail: 'Strata · Ollama · Claude · OpenAI · Gemini · Meta AI · Mistral · REA · Whisper · Chatterbox' },
      ],
      security: {
        title: 'Seguridad por diseño',
        text: 'Cero secretos en el repositorio. Credenciales cifradas con',
        text2: '. Aislamiento de red en',
        text3: '. Verificación de Host, Origin y tokens en tiempo constante.',
      },
    },
    providers: {
      title: 'Proveedores',
      highlight: 'integrados',
      subtitle: 'Un solo gateway para todos los modelos. Locales y remotos, con autenticación segura.',
    },
    voice: {
      title: 'Motor de',
      highlight: 'voz',
      subtitle: 'Voz 100% local con transcripción y síntesis de alta calidad. Sin enviar audio a servicios externos.',
      engines: [
        {
          icon: '👂',
          name: 'Whisper (STT)',
          model: 'large-v3-turbo',
          description: 'Transcripción persistente en segundo plano. Autodetección de idioma y caché local.',
          specs: ['Proceso persistente', 'Sin envío a la nube', 'Autodetección de idioma'],
          color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
        },
        {
          icon: '🗣️',
          name: 'Chatterbox (TTS GPU)',
          model: 'Multilingual · CUDA',
          description: 'Síntesis de voz de alta naturalidad en español con voces Álvaro y Elvira sobre CUDA.',
          specs: ['Voces Álvaro y Elvira', 'Alta naturalidad', 'Fallback automático a CPU'],
          color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
        },
        {
          icon: '⚡',
          name: 'Kokoro 82M (TTS CPU)',
          model: 'Ultrarrápido · Sin VRAM',
          description: 'Motor TTS ultrarrápido en CPU sin consumo de VRAM. Ideal cuando la GPU está al 100%.',
          specs: ['Voces em_alex y ef_dora', 'Cero VRAM', 'Latencia mínima'],
          color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
        },
      ],
      realtime: {
        title: 'Llamadas en tiempo real',
        description: 'Streaming frase a frase (NDJSON) en modo local, o conexión bidireccional de baja latencia con OpenAI WebRTC y Gemini Live.',
      },
    },
    cli: {
      title: 'Control total desde la',
      highlight: 'terminal',
      subtitle: 'Un solo comando `mykos` para gestionar todo el ecosistema.',
      commands: [
        {
          category: '🚀 Servidor',
          items: [
            { cmd: 'mykos run', desc: 'Arranca MyKOS con logo y logs en vivo' },
            { cmd: 'mykos start', desc: 'Arranca en segundo plano' },
            { cmd: 'mykos status', desc: 'Estado del Gateway, Backend y Almacén' },
            { cmd: 'mykos stop', desc: 'Detiene todo limpiamente' },
          ],
        },
        {
          category: '🩺 Diagnóstico',
          items: [
            { cmd: 'mykos doctor', desc: 'Diagnóstico integral del sistema' },
            { cmd: 'mykos doctor --fix', desc: 'Repara permisos y procesos huérfanos' },
            { cmd: 'mykos doctor --deep', desc: 'Diagnóstico + 6 baterías de seguridad' },
            { cmd: 'mykos test', desc: 'Ejecuta todos los tests' },
          ],
        },
        {
          category: '💾 Almacén',
          items: [
            { cmd: 'mykos store status', desc: 'Revisiones, copias e instantáneas' },
            { cmd: 'mykos store verify', desc: 'Verifica integridad de documentos' },
            { cmd: 'mykos store repair', desc: 'Restaura documentos dañados' },
            { cmd: 'mykos store export', desc: 'Exporta datos a JSON' },
          ],
        },
        {
          category: '🔬 REA',
          items: [
            { cmd: 'mykos rea status', desc: 'Estado del motor REA (207 herramientas)' },
            { cmd: 'mykos rea tools [filtro]', desc: 'Lista o busca herramientas MCP' },
            { cmd: 'mykos rea inspect <prog>', desc: 'Analiza un binario o programa' },
            { cmd: 'mykos rea call <tool>', desc: 'Invoca herramienta MCP directamente' },
          ],
        },
      ],
    },
    security: {
      title: 'Privacidad y',
      highlight: 'seguridad',
      subtitle: 'Tu datos, tu máquina, tu control. Sin excepciones.',
      items: [
        {
          icon: '🔑',
          title: 'Cero secretos en el repo',
          description: 'Todas las credenciales se cifran localmente con mykos-sealed-v1 (HMAC-SHA256 + clave maestra local con permisos 0600).',
        },
        {
          icon: '🌐',
          title: 'Aislamiento de red',
          description: 'Gateway y Worker escuchan exclusivamente en 127.0.0.1. Verificación de Host, Origin y tokens en tiempo constante.',
        },
        {
          icon: '🖥️',
          title: 'Terminal web bloqueada',
          description: 'El endpoint /terminal permanece desactivado salvo que se habilite explícitamente con MYKOS_ENABLE_WEB_TERMINAL=1.',
        },
        {
          icon: '📁',
          title: 'Raíces autorizadas',
          description: 'Las herramientas de ficheros solo operan dentro de carpetas declaradas en allowed_roots.json. Bloqueo por código de /.',
        },
        {
          icon: '🛡️',
          title: '3 modos de permiso',
          description: 'Solo lectura, supervisado (por defecto) y acceso total. Aprobaciones granulares con opción una vez, por sesión o permanente.',
        },
        {
          icon: '💾',
          title: 'Almacén ACID',
          description: 'Escrituras atómicas con control de revisión, copias de seguridad rotativas, instantáneas diarias y diario SHA-256.',
        },
      ],
    },
    install: {
      title: 'Instalación',
      highlight: 'rápida',
      subtitle: 'Un solo comando y listo. Soporte nativo para Linux y Windows.',
      linux: '🐧 Linux',
      windows: '🪟 Windows',
      checks: [
        'Verifica Node.js ≥ 20 y Python ≥ 3.10',
        'Crea entorno virtual e instala dependencias',
        'Enlaza el comando `mykos` globalmente',
        'Instala accesos directos de escritorio',
      ],
    },
    cta: {
      title: '¿Listo para probar MyKOS?',
      subtitle: 'Explora el código, contribuye o simplemente úsalo. Es open source.',
      button: 'Ver repositorio en GitHub',
    },
    footer: {
      madeWith: 'Hecho con ❤️',
    },
  },
  en: {
    nav: {
      features: 'Features',
      architecture: 'Architecture',
      providers: 'Providers',
      voice: 'Voice',
      cli: 'CLI',
      security: 'Security',
      install: 'Install',
    },
    hero: {
      badge: 'v1.0 — Initial release',
      subtitle: 'Personal AI platform with multi-model gateway, bidirectional voice engine and native desktop suite for',
      linux: 'Linux',
      and: 'and',
      windows: 'Windows',
      tagline: 'Multi-Model AI Gateway · Local & Cloud Voice Engine · CLI & Desktop Suite',
      cta: 'Get started →',
      github: 'View on GitHub',
      stats: [
        { value: '74', label: 'Routes' },
        { value: '36', label: 'HMAC Policies' },
        { value: '207', label: 'REA Tools' },
        { value: '12+', label: 'AI Providers' },
      ],
    },
    features: {
      title: 'Everything in one',
      highlight: 'ecosystem',
      subtitle: 'From local inference to reverse engineering, MyKOS covers everything you need to work with AI privately and powerfully.',
      items: [
        {
          icon: '🔐',
          title: 'Secure Gateway',
          description: '74 routes with signed HMAC policies, permission authority and ACID store with revisions and backups.',
        },
        {
          icon: '🧠',
          title: 'Multi-Model',
          description: 'Claude, OpenAI, Gemini, Meta AI, Mistral, NVIDIA, Kimi and more. One gateway for all providers.',
        },
        {
          icon: '🎙️',
          title: 'Bidirectional Voice',
          description: 'Whisper for STT, Chatterbox for GPU TTS and Kokoro for CPU TTS. 100% local or cloud voice.',
        },
        {
          icon: '⚡',
          title: 'Local Inference',
          description: 'Strata CUDA (125B MoE), llama.cpp and Ollama. Run powerful models without leaving your machine.',
        },
        {
          icon: '🔬',
          title: 'Reverse Engineering (REA)',
          description: '207 MCP tools for native decompilation, ELF/PE/Mach-O/APK/WASM analysis and JS bundles.',
        },
        {
          icon: '🖥️',
          title: 'Desktop Apps',
          description: 'Native Linux suite: secure WhatsApp Web client (MyKOS-Whats, Qt6), real-time system monitor (GTK4), and disk analyzer (PySide6).',
          link: 'https://github.com/eskib0/mykos-whats',
          linkText: 'View MyKOS-Whats on GitHub',
        },
      ],
    },
    architecture: {
      title: 'Separated',
      highlight: 'architecture',
      subtitle: 'The Gateway decides and stores. The Worker executes. Clear boundary, total security.',
      layers: [
        { icon: '🌐', label: 'Web Browser / UI', detail: 'http://127.0.0.1:3210' },
        { icon: '🔐', label: 'MyKOS Gateway (Node.js)', detail: '74 routes · 36 HMAC policies · Chat loop · ACID store' },
        { icon: '⚙️', label: 'Python Worker (server.py)', detail: '127.0.0.1:3211 · Authenticated internal HTTP · HMAC signature' },
        { icon: '🧠', label: 'Engines & Providers', detail: 'Strata · Ollama · Claude · OpenAI · Gemini · Meta AI · Mistral · REA · Whisper · Chatterbox' },
      ],
      security: {
        title: 'Security by design',
        text: 'Zero secrets in the repository. Credentials encrypted with',
        text2: '. Network isolation on',
        text3: '. Host, Origin and token verification in constant time.',
      },
    },
    providers: {
      title: 'Integrated',
      highlight: 'providers',
      subtitle: 'One gateway for all models. Local and remote, with secure authentication.',
    },
    voice: {
      title: 'Voice',
      highlight: 'engine',
      subtitle: '100% local voice with high-quality transcription and synthesis. No audio sent to external services.',
      engines: [
        {
          icon: '👂',
          name: 'Whisper (STT)',
          model: 'large-v3-turbo',
          description: 'Persistent background transcription. Auto language detection and local cache.',
          specs: ['Persistent process', 'No cloud upload', 'Auto language detection'],
          color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
        },
        {
          icon: '🗣️',
          name: 'Chatterbox (GPU TTS)',
          model: 'Multilingual · CUDA',
          description: 'High naturalness Spanish voice synthesis with Álvaro and Elvira voices on CUDA.',
          specs: ['Álvaro & Elvira voices', 'High naturalness', 'Auto CPU fallback'],
          color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
        },
        {
          icon: '⚡',
          name: 'Kokoro 82M (CPU TTS)',
          model: 'Ultra-fast · No VRAM',
          description: 'Ultra-fast CPU TTS engine with zero VRAM consumption. Ideal when GPU is at 100%.',
          specs: ['em_alex & ef_dora voices', 'Zero VRAM', 'Minimal latency'],
          color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
        },
      ],
      realtime: {
        title: 'Real-time calls',
        description: 'Phrase-by-phrase streaming (NDJSON) in local mode, or low-latency bidirectional connection with OpenAI WebRTC and Gemini Live.',
      },
    },
    cli: {
      title: 'Full control from the',
      highlight: 'terminal',
      subtitle: 'A single `mykos` command to manage the entire ecosystem.',
      commands: [
        {
          category: '🚀 Server',
          items: [
            { cmd: 'mykos run', desc: 'Start MyKOS with logo and live logs' },
            { cmd: 'mykos start', desc: 'Start in background' },
            { cmd: 'mykos status', desc: 'Gateway, Backend and Store status' },
            { cmd: 'mykos stop', desc: 'Clean shutdown' },
          ],
        },
        {
          category: '🩺 Diagnostics',
          items: [
            { cmd: 'mykos doctor', desc: 'Full system diagnostics' },
            { cmd: 'mykos doctor --fix', desc: 'Fix permissions and orphan processes' },
            { cmd: 'mykos doctor --deep', desc: 'Diagnostics + 6 security test suites' },
            { cmd: 'mykos test', desc: 'Run all tests' },
          ],
        },
        {
          category: '💾 Store',
          items: [
            { cmd: 'mykos store status', desc: 'Revisions, copies and snapshots' },
            { cmd: 'mykos store verify', desc: 'Verify document integrity' },
            { cmd: 'mykos store repair', desc: 'Restore damaged documents' },
            { cmd: 'mykos store export', desc: 'Export data to JSON' },
          ],
        },
        {
          category: '🔬 REA',
          items: [
            { cmd: 'mykos rea status', desc: 'REA engine status (207 tools)' },
            { cmd: 'mykos rea tools [filter]', desc: 'List or search MCP tools' },
            { cmd: 'mykos rea inspect <prog>', desc: 'Analyze a binary or program' },
            { cmd: 'mykos rea call <tool>', desc: 'Invoke MCP tool directly' },
          ],
        },
      ],
    },
    security: {
      title: 'Privacy and',
      highlight: 'security',
      subtitle: 'Your data, your machine, your control. No exceptions.',
      items: [
        {
          icon: '🔑',
          title: 'Zero secrets in repo',
          description: 'All credentials are encrypted locally with mykos-sealed-v1 (HMAC-SHA256 + local master key with 0600 permissions).',
        },
        {
          icon: '🌐',
          title: 'Network isolation',
          description: 'Gateway and Worker listen exclusively on 127.0.0.1. Host, Origin and token verification in constant time.',
        },
        {
          icon: '🖥️',
          title: 'Web terminal locked',
          description: 'The /terminal endpoint stays disabled unless explicitly enabled with MYKOS_ENABLE_WEB_TERMINAL=1.',
        },
        {
          icon: '📁',
          title: 'Authorized roots',
          description: 'File tools only operate within folders declared in allowed_roots.json. Code-level blocking of /.',
        },
        {
          icon: '🛡️',
          title: '3 permission modes',
          description: 'Read-only, supervised (default) and full access. Granular approvals with once, per-session or permanent options.',
        },
        {
          icon: '💾',
          title: 'ACID store',
          description: 'Atomic writes with revision control, rotating backups, daily snapshots and SHA-256 journal.',
        },
      ],
    },
    install: {
      title: 'Quick',
      highlight: 'installation',
      subtitle: 'One command and you\'re ready. Native support for Linux and Windows.',
      linux: '🐧 Linux',
      windows: '🪟 Windows',
      checks: [
        'Verifies Node.js ≥ 20 and Python ≥ 3.10',
        'Creates virtual environment and installs dependencies',
        'Links the `mykos` command globally',
        'Installs desktop shortcuts',
      ],
    },
    cta: {
      title: 'Ready to try MyKOS?',
      subtitle: 'Explore the code, contribute or just use it. It\'s open source.',
      button: 'View repository on GitHub',
    },
    footer: {
      madeWith: 'Made with ❤️',
    },
  },
}

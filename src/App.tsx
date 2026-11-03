import { useState, useEffect, useRef } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [installTab, setInstallTab] = useState<'linux' | 'windows'>('linux')
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.15 }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)

  const features = [
    {
      icon: '🔐',
      title: 'Gateway Seguro',
      description: '74 rutas con políticas HMAC firmadas, autoridad de permisos y almacén ACID con revisiones y copias de seguridad.',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      icon: '🧠',
      title: 'Multi-Modelo',
      description: 'Claude, OpenAI, Gemini, Meta AI, Mistral, NVIDIA, Kimi y más. Un solo gateway para todos los proveedores.',
      gradient: 'from-purple-500 to-violet-400',
    },
    {
      icon: '🎙️',
      title: 'Voz Bidireccional',
      description: 'Whisper para STT, Chatterbox para TTS GPU y Kokoro para TTS CPU. Voz 100% local o en la nube.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: '⚡',
      title: 'Inferencia Local',
      description: 'Strata CUDA (125B MoE), llama.cpp y Ollama. Ejecuta modelos potentes sin salir de tu máquina.',
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      icon: '🔬',
      title: 'Ingeniería Inversa (REA)',
      description: '207 herramientas MCP para decompilación nativa, análisis de ELF/PE/Mach-O/APK/WASM y bundles JS.',
      gradient: 'from-red-500 to-rose-400',
    },
    {
      icon: '🖥️',
      title: 'Apps de Escritorio',
      description: 'Monitor de sistema en tiempo real (GTK4) y Analizador de disco con detección de duplicados (PySide6).',
      gradient: 'from-pink-500 to-fuchsia-400',
    },
  ]

  const providers = [
    { name: 'Claude', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
    { name: 'OpenAI', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
    { name: 'Gemini', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { name: 'Meta AI', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
    { name: 'Mistral', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
    { name: 'NVIDIA NIM', color: 'bg-lime-500/20 text-lime-300 border-lime-500/30' },
    { name: 'Kimi', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
    { name: 'OpenRouter', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
    { name: 'Ollama', color: 'bg-white/10 text-white/80 border-white/20' },
    { name: 'Strata CUDA', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    { name: 'llama.cpp', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
    { name: 'Whisper', color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
  ]

  const architectureLayers = [
    {
      label: 'Navegador Web / UI',
      detail: 'http://127.0.0.1:3210',
      color: 'border-blue-500/50 bg-blue-500/10',
      icon: '🌐',
    },
    {
      label: 'MyKOS Gateway (Node.js)',
      detail: '74 rutas · 36 políticas HMAC · Bucle de chat · Almacén ACID',
      color: 'border-emerald-500/50 bg-emerald-500/10',
      icon: '🔐',
    },
    {
      label: 'Trabajador Python (server.py)',
      detail: '127.0.0.1:3211 · HTTP interno autenticado · Firma HMAC',
      color: 'border-purple-500/50 bg-purple-500/10',
      icon: '⚙️',
    },
    {
      label: 'Motores y Proveedores',
      detail: 'Strata · Ollama · Claude · OpenAI · Gemini · Meta AI · Mistral · REA · Whisper · Chatterbox',
      color: 'border-orange-500/50 bg-orange-500/10',
      icon: '🧠',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-sm font-bold">
              M
            </div>
            <span className="font-bold text-lg tracking-tight">MyKOS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Características</a>
            <a href="#architecture" className="hover:text-white transition-colors">Arquitectura</a>
            <a href="#providers" className="hover:text-white transition-colors">Proveedores</a>
            <a href="#install" className="hover:text-white transition-colors">Instalación</a>
          </div>
          <a
            href="https://github.com/eskib0/MyKOS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => { sectionRefs.current['hero'] = el }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        </div>

        <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            v1.0 — Lanzamiento inicial
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              MyKOS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            Plataforma personal de inteligencia artificial con pasarela multimodelo,
            motor de voz bidireccional y suite de aplicaciones nativas para{' '}
            <span className="text-white font-medium">Linux</span> y{' '}
            <span className="text-white font-medium">Windows</span>.
          </p>

          <p className="text-gray-500 text-lg mb-10">
            Multi-Model AI Gateway · Local & Cloud Voice Engine · CLI & Desktop Suite
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#install"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:scale-105"
            >
              Empezar ahora →
            </a>
            <a
              href="https://github.com/eskib0/MyKOS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Ver en GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '74', label: 'Rutas' },
              { value: '36', label: 'Políticas HMAC' },
              { value: '207', label: 'Herramientas REA' },
              { value: '12+', label: 'Proveedores IA' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={(el) => { sectionRefs.current['features'] = el }}
        className="relative py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Todo en un solo{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                ecosistema
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Desde la inferencia local hasta la ingeniería inversa, MyKOS cubre todo lo que necesitas para trabajar con IA de forma privada y potente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04] ${
                  isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section
        id="architecture"
        ref={(el) => { sectionRefs.current['architecture'] = el }}
        className="relative py-32 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('architecture') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Arquitectura{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                separada
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              El Gateway decide y guarda. El Worker ejecuta. Frontera clara, seguridad total.
            </p>
          </div>

          <div className="space-y-4">
            {architectureLayers.map((layer, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl border ${layer.color} transition-all duration-700 ${
                  isVisible('architecture') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">{layer.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{layer.label}</h3>
                    <p className="text-gray-400 text-sm">{layer.detail}</p>
                  </div>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-gray-600">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Security callout */}
          <div className={`mt-12 p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 transition-all duration-1000 delay-700 ${isVisible('architecture') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-bold mb-1">Seguridad por diseño</h4>
                <p className="text-gray-400 text-sm">
                  Cero secretos en el repositorio. Credenciales cifradas con <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-xs">mykos-sealed-v1</code>. 
                  Aislamiento de red en <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-xs">127.0.0.1</code>. 
                  Verificación de Host, Origin y tokens en tiempo constante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section
        id="providers"
        ref={(el) => { sectionRefs.current['providers'] = el }}
        className="relative py-32 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('providers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proveedores{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                integrados
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un solo gateway para todos los modelos. Locales y remotos, con autenticación segura.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 ${isVisible('providers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {providers.map((provider, index) => (
              <span
                key={index}
                className={`px-5 py-3 rounded-full text-sm font-medium border ${provider.color} hover:scale-105 transition-transform cursor-default`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {provider.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section
        id="install"
        ref={(el) => { sectionRefs.current['install'] = el }}
        className="relative py-32 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('install') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Instalación{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                rápida
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un solo comando y listo. Soporte nativo para Linux y Windows.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible('install') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setInstallTab('linux')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  installTab === 'linux'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                🐧 Linux
              </button>
              <button
                onClick={() => setInstallTab('windows')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  installTab === 'windows'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                🪟 Windows
              </button>
            </div>

            {/* Code block */}
            <div className="rounded-xl bg-[#0d0d14] border border-white/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-500 font-mono">
                  {installTab === 'linux' ? 'terminal' : 'powershell'}
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                {installTab === 'linux' ? (
                  <div className="space-y-2">
                    <p className="text-gray-500"># Clonar el repositorio</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">git clone https://github.com/eskib0/MyKOS.git</span></p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">cd MyKOS</span></p>
                    <p className="text-gray-500 mt-4"># Ejecutar el instalador</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">./install.sh</span></p>
                    <p className="text-gray-500 mt-4"># (Opcional) Habilitar servicio systemd</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">./install.sh --systemd</span></p>
                    <p className="text-gray-500 mt-4"># Arrancar MyKOS</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">mykos run</span></p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-gray-500"># Clonar el repositorio</p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">git clone https://github.com/eskib0/MyKOS.git</span></p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">cd MyKOS</span></p>
                    <p className="text-gray-500 mt-4"># Ejecutar el instalador</p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">powershell -ExecutionPolicy Bypass -File .\install.ps1</span></p>
                    <p className="text-gray-500 mt-4"># Arrancar MyKOS</p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">mykos run</span></p>
                  </div>
                )}
              </div>
            </div>

            {/* What it does */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '✓', text: 'Verifica Node.js ≥ 20 y Python ≥ 3.10' },
                { icon: '✓', text: 'Crea entorno virtual e instala dependencias' },
                { icon: '✓', text: 'Enlaza el comando `mykos` globalmente' },
                { icon: '✓', text: 'Instala accesos directos de escritorio' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-emerald-400 font-bold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para probar MyKOS?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Explora el código, contribuye o simplemente úsalo. Es open source.
            </p>
            <a
              href="https://github.com/eskib0/MyKOS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver repositorio en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-black">
              M
            </div>
            <span>MyKOS Ecosystem</span>
          </div>
          <p>Hecho con ❤️ · {new Date().getFullYear()}</p>
          <a
            href="https://github.com/eskib0/MyKOS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            github.com/eskib0/MyKOS
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

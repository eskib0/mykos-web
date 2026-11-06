import { useState, useEffect, useRef } from 'react'
import { translations, type Lang } from './i18n'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [lang, setLang] = useState<Lang>('es')
  const [installTab, setInstallTab] = useState<'linux' | 'windows'>('linux')
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const t = translations[lang]

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
      { threshold: 0.1 }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es')

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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-sm font-bold text-black">
              M
            </div>
            <span className="font-bold text-lg tracking-tight">MyKOS</span>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">{t.nav.features}</a>
            <a href="#architecture" className="hover:text-white transition-colors">{t.nav.architecture}</a>
            <a href="#providers" className="hover:text-white transition-colors">{t.nav.providers}</a>
            <a href="#voice" className="hover:text-white transition-colors">{t.nav.voice}</a>
            <a href="#cli" className="hover:text-white transition-colors">{t.nav.cli}</a>
            <a href="#security" className="hover:text-white transition-colors">{t.nav.security}</a>
            <a href="#install" className="hover:text-white transition-colors">{t.nav.install}</a>
          </div>
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <span className="text-base">{lang === 'es' ? '🇪🇸' : '🇬🇧'}</span>
              <span className="hidden sm:inline text-xs font-medium uppercase">{lang}</span>
            </button>
            <a
              href="https://github.com/eskib0/MyKOS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => { sectionRefs.current['hero'] = el }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
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
        </div>

        <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              MyKOS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            {t.hero.subtitle}{' '}
            <span className="text-white font-medium">{t.hero.linux}</span>{' '}
            {t.hero.and}{' '}
            <span className="text-white font-medium">{t.hero.windows}</span>.
          </p>

          <p className="text-gray-500 text-lg mb-10">{t.hero.tagline}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#install"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:scale-105"
            >
              {t.hero.cta}
            </a>
            <a
              href="https://github.com/eskib0/MyKOS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
            >
              {t.hero.github}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {t.hero.stats.map((stat, i) => (
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

      {/* Video Teaser Section */}
      <section className="relative px-6 -mt-6 mb-24 z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.teaser.badge}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              {t.teaser.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {t.teaser.subtitle}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-black/60 shadow-2xl shadow-emerald-500/10 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500 -z-10" />
            <video
              className="w-full aspect-video rounded-2xl bg-black"
              controls
              playsInline
              preload="metadata"
              poster="./mykos_poster.png"
            >
              <source src="./mykos_teaser.mp4" type="video/mp4" />
              Tu navegador no soporta el reproductor de vídeo HTML5.
            </video>
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
              {t.features.title}{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {t.features.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04] ${
                  isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-1">{feature.description}</p>
                  {'link' in feature && Boolean((feature as { link?: string }).link) && (
                    <a
                      href={(feature as { link: string }).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                    >
                      {('linkText' in feature && (feature as { linkText?: string }).linkText) || 'Ver en GitHub'} →
                    </a>
                  )}
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
              {t.architecture.title}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.architecture.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.architecture.subtitle}</p>
          </div>

          <div className="space-y-4">
            {t.architecture.layers.map((layer, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-700 ${
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
                {index < t.architecture.layers.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-gray-600 z-10">↓</div>
                )}
              </div>
            ))}
          </div>

          <div className={`mt-12 p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 transition-all duration-1000 delay-700 ${isVisible('architecture') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-bold mb-1">{t.architecture.security.title}</h4>
                <p className="text-gray-400 text-sm">
                  {t.architecture.security.text}{' '}
                  <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-xs">mykos-sealed-v1</code>
                  {t.architecture.security.text2}{' '}
                  <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-xs">127.0.0.1</code>
                  {t.architecture.security.text3}
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
              {t.providers.title}{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                {t.providers.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.providers.subtitle}</p>
          </div>

          <div className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 ${isVisible('providers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
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
            ].map((provider, index) => (
              <span
                key={index}
                className={`px-5 py-3 rounded-full text-sm font-medium border ${provider.color} hover:scale-105 transition-transform cursor-default`}
              >
                {provider.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Section */}
      <section
        id="voice"
        ref={(el) => { sectionRefs.current['voice'] = el }}
        className="relative py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('voice') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.voice.title}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.voice.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.voice.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t.voice.engines.map((engine, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${engine.color} border backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] ${
                  isVisible('voice') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl mb-3">{engine.icon}</div>
                <h3 className="text-lg font-bold mb-1">{engine.name}</h3>
                <p className="text-xs text-gray-400 mb-3 font-mono">{engine.model}</p>
                <p className="text-sm text-gray-300 mb-4">{engine.description}</p>
                <ul className="space-y-1.5">
                  {engine.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Realtime callout */}
          <div className={`p-6 rounded-xl bg-white/[0.02] border border-white/10 transition-all duration-1000 delay-500 ${isVisible('voice') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-bold mb-1">{t.voice.realtime.title}</h4>
                <p className="text-gray-400 text-sm">{t.voice.realtime.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLI Section */}
      <section
        id="cli"
        ref={(el) => { sectionRefs.current['cli'] = el }}
        className="relative py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('cli') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.cli.title}{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {t.cli.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.cli.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.cli.commands.map((group, gIndex) => (
              <div
                key={gIndex}
                className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-700 ${
                  isVisible('cli') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${gIndex * 100}ms` }}
              >
                <h3 className="text-lg font-bold mb-4">{group.category}</h3>
                <div className="space-y-3">
                  {group.items.map((item, iIndex) => (
                    <div key={iIndex} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <code className="text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap">
                        {item.cmd}
                      </code>
                      <span className="text-gray-400 text-sm">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section
        id="security"
        ref={(el) => { sectionRefs.current['security'] = el }}
        className="relative py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('security') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.security.title}{' '}
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                {t.security.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.security.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.security.items.map((item, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-red-500/20 transition-all duration-500 hover:bg-white/[0.04] ${
                  isVisible('security') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
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
              {t.install.title}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.install.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.install.subtitle}</p>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible('install') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setInstallTab('linux')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  installTab === 'linux'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                {t.install.linux}
              </button>
              <button
                onClick={() => setInstallTab('windows')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  installTab === 'windows'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                {t.install.windows}
              </button>
            </div>

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
                    <p className="text-gray-500"># {lang === 'es' ? 'Clonar el repositorio' : 'Clone the repository'}</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">git clone https://github.com/eskib0/MyKOS.git</span></p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">cd MyKOS</span></p>
                    <p className="text-gray-500 mt-4"># {lang === 'es' ? 'Ejecutar el instalador' : 'Run the installer'}</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">./install.sh</span></p>
                    <p className="text-gray-500 mt-4"># {lang === 'es' ? '(Opcional) Habilitar servicio systemd' : '(Optional) Enable systemd service'}</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">./install.sh --systemd</span></p>
                    <p className="text-gray-500 mt-4"># {lang === 'es' ? 'Arrancar MyKOS' : 'Start MyKOS'}</p>
                    <p><span className="text-emerald-400">$</span> <span className="text-white">mykos run</span></p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-gray-500"># {lang === 'es' ? 'Clonar el repositorio' : 'Clone the repository'}</p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">git clone https://github.com/eskib0/MyKOS.git</span></p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">cd MyKOS</span></p>
                    <p className="text-gray-500 mt-4"># {lang === 'es' ? 'Ejecutar el instalador' : 'Run the installer'}</p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">powershell -ExecutionPolicy Bypass -File .\install.ps1</span></p>
                    <p className="text-gray-500 mt-4"># {lang === 'es' ? 'Arrancar MyKOS' : 'Start MyKOS'}</p>
                    <p><span className="text-blue-400">PS&gt;</span> <span className="text-white">mykos run</span></p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.install.checks.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-emerald-400 font-bold">✓</span>
                  {item}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-gray-400 mb-8 text-lg">{t.cta.subtitle}</p>
            <a
              href="https://github.com/eskib0/MyKOS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {t.cta.button}
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
          <p>{t.footer.madeWith} · {new Date().getFullYear()}</p>
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

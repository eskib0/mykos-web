import { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [time, setTime] = useState(new Date())
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const greeting = () => {
    const hour = time.getHours()
    if (hour < 12) return 'Buenos días'
    if (hour < 19) return 'Buenas tardes'
    return 'Buenas noches'
  }

  const features = [
    {
      icon: '🚀',
      title: 'Rápido',
      description: 'Tecnología moderna con React y Vite para una experiencia ultrarrápida.',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: '🎨',
      title: 'Hermoso',
      description: 'Diseño elegante con Tailwind CSS y animaciones fluidas.',
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: '📱',
      title: 'Responsivo',
      description: 'Se adapta perfectamente a cualquier dispositivo y tamaño de pantalla.',
      color: 'from-orange-500 to-yellow-400',
    },
    {
      icon: '⚡',
      title: 'Interactivo',
      description: 'Componentes dinámicos que responden a tus acciones en tiempo real.',
      color: 'from-green-500 to-emerald-400',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Greeting section */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-6 text-6xl animate-bounce">👋</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            {greeting()}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Bienvenido a tu nueva aplicación web
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Construida con ❤️ usando React, Vite y Tailwind CSS
          </p>

          {/* Clock */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <span className="text-2xl">🕐</span>
            <span className="text-lg font-mono">
              {time.toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </span>
          </div>
        </div>

        {/* Features grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl w-full transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
                hover:border-white/30 transition-all duration-300 cursor-pointer
                ${activeCard === index ? 'scale-105 bg-white/10' : 'hover:scale-105'}
              `}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">¿Qué puedes hacer aquí?</h2>
            <p className="text-gray-300 mb-6">
              Esta es tu página de inicio. Puedes personalizarla completamente para crear 
              cualquier tipo de aplicación web: un portafolio, un blog, una tienda online, 
              un panel de control o lo que imagines.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                React 18
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Vite
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`mt-16 text-center text-gray-500 text-sm transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p>Hecho con ✨ por ti • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App

'use client'

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/zen.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
          Clinica Holistica Zen Shiatsu
          </h1>
          <p className="md:text-xl mb-12 text-white/90">
          Restaura la armonía de tu cuerpo y mente con la terapia de presión japonesa tradicional, desbloqueando tu potencial de sanación natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToBooking}
              size="lg" 
              className="bg-transparent backdrop-blur-sm border-2 border-gray-800 text-white px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              Reservá tu sesión
            </button>
            <button
              variant="outline" 
              size="lg"
              className="bg-transparent backdrop-blur-sm border-2 border-gray-800 text-white px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explorá los servicios disponibles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
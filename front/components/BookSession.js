'use client';
import { Calendar, Clock, MapPin } from 'lucide-react';
import CalendlyEmbed from './CalendlyEmbed';
import { useState } from 'react';

export default function BookSession() {
    const [showCalendly, setShowCalendly] = useState(false);

    return (
        <section id="booking" className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Reservá tu sesión</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Da el primer paso hacia el equilibrio y el bienestar programando tu sesión de terapia Shiatsu personalizada
                    </p>
                </div>

                {/* Contenedor en dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Columna 1: Información */}
                    <div className="border border-border p-6 hover:border-chart-2/50 transition-all duration-300">
                        <h1 className="text-2xl font-bold mb-2">Visitá nuestro Estudio</h1>
                        <h3 className="text-lg text-muted-foreground mb-4">Encuéntrenos en nuestro tranquilo santuario.</h3>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-chart-2 mr-3 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Zen Shiatsu</p>
                                    <p className="text-muted-foreground">Calle 1, Barrio 2</p>
                                    <p className="text-muted-foreground">Salta, Argentina</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="h-5 w-5 text-chart-2 mr-3 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Horarios</p>
                                    <p className="text-muted-foreground">Lunes - Viernes: 09:00 - 18:00</p>
                                    <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
                                    <p className="text-muted-foreground">Domingos: Cerrado</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Calendar className="h-5 w-5 text-chart-2 mr-3 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Políticas de reserva de sesiones</p>
                                    <p className="text-muted-foreground">El pago total de las sesiones mensuales se realizan a principio de mes.</p>
                                    <p className="text-muted-foreground">Por favor llegue 5 minutos antes de su hora programada.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna 2: Calendly Embed */}
                    <div className="border border-border p-6 hover:border-chart-2/50 transition-all duration-300">
                        <h2 className="text-2xl font-bold mb-2">Programá tu sesión</h2>
                        <p className="text-md text-muted-foreground mb-4">Elije un dia y horario que te quede cómodo</p>

                        {showCalendly ? (
                            <div className="aspect-video w-full">
                                <CalendlyEmbed />
                            </div>
                        ) : (
                            <div className="text-center py-12 space-y-6">
                                <p className="text-lg">¿Listo/a para experimentar los beneficios del Zen Shiatsu?</p>
                                <button
                                    onClick={() => setShowCalendly(true)}
                                    className="text-gray-200 px-6 py-3 rounded-lg border border-gray-800 bg-gray-800 hover:bg-gray-600"
                                >
                                    Abrir el Calendario
                                </button>
                                <p className="text-sm text-muted-foreground">
                                Podrás seleccionar tu servicio, fecha y hora preferidos.
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
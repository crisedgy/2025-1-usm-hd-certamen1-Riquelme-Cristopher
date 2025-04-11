import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-slate-800 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Burnout Project
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-slate-300 transition">
              Inicio
            </Link>
            <Link href="#proyecto" className="hover:text-slate-300 transition">
              Proyecto Semestral
            </Link>
            <Link href="#semblanza" className="hover:text-slate-300 transition">
              Semblanza
            </Link>
            <Link href="#estado-arte" className="hover:text-slate-300 transition">
              Estado del Arte
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-600">Certamen 1</h2>
          <h1 className="text-4xl font-bold mt-2 mb-4">Burnout: Prevención y Manejo en Entornos Laborales</h1>
          <p className="text-lg text-slate-600 mb-4">Christopher Riquelme</p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Burnout en el trabajo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-xl font-bold">El impacto del burnout en la productividad</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Estrategias de prevención"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-xl font-bold">Estrategias de prevención del burnout</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Recuperación del burnout"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-xl font-bold">Recuperación y manejo del burnout</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Christopher Riquelme"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-xl font-bold">Christopher Riquelme - Desarrollador del Proyecto</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
          <p className="text-lg text-slate-600">
            Este proyecto semestral se enfoca en el estudio del burnout laboral, sus causas, consecuencias y estrategias
            de prevención. Desarrollaremos una plataforma digital que ayude a las organizaciones a identificar factores
            de riesgo y proporcionar herramientas para mejorar el bienestar de los empleados, aumentando la
            productividad y reduciendo la rotación de personal.
          </p>
        </div>
      </section>

      {/* Proyecto Semestral Section */}
      <section id="proyecto" className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proyecto Semestral</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Nombre del proyecto</td>
                  <td className="py-4 px-6">Burnout: Prevención y Manejo en Entornos Laborales</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Número de equipo</td>
                  <td className="py-4 px-6">Equipo 7</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Objetivo</td>
                  <td className="py-4 px-6">
                    Desarrollar una plataforma digital que permita a las organizaciones identificar, prevenir y manejar
                    el burnout laboral, mejorando el bienestar de los empleados y la productividad organizacional.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Problemática a solucionar</td>
                  <td className="py-4 px-6">
                    El aumento de casos de burnout en entornos laborales modernos, que resulta en baja productividad,
                    alta rotación de personal y problemas de salud mental, con un costo estimado de millones para las
                    empresas anualmente.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Visión</td>
                  <td className="py-4 px-6">
                    Ser la plataforma líder en la prevención y manejo del burnout laboral, transformando la cultura
                    organizacional hacia un enfoque de bienestar integral.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Misión</td>
                  <td className="py-4 px-6">
                    Proporcionar herramientas basadas en evidencia científica para que las organizaciones puedan
                    identificar factores de riesgo de burnout y aplicar estrategias efectivas de prevención y manejo.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Lema</td>
                  <td className="py-4 px-6">"Reaviva la llama, no la quemes"</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-slate-100">Valores</td>
                  <td className="py-4 px-6">Bienestar, Innovación, Evidencia científica, Empatía, Colaboración</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold bg-slate-100">Elementos diferenciadores</td>
                  <td className="py-4 px-6">
                    <ul className="list-disc pl-5">
                      <li>Algoritmos de IA para detección temprana de factores de riesgo</li>
                      <li>Personalización de estrategias según el perfil organizacional</li>
                      <li>Integración con sistemas de recursos humanos existentes</li>
                      <li>Enfoque holístico que abarca aspectos individuales y organizacionales</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Semblanza Section */}
      <section id="semblanza" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Semblanza</h2>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="relative h-48 w-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Christopher Riquelme"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Christopher Riquelme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-slate-600">Edad</h3>
                  <p className="mb-3">25 años</p>

                  <h3 className="font-semibold text-slate-600">Ciudad de origen</h3>
                  <p className="mb-3">Santiago, Chile</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-600">Hobbies</h3>
                  <ul className="list-disc pl-5 mb-3">
                    <li>Programación</li>
                    <li>Senderismo</li>
                    <li>Fotografía</li>
                    <li>Lectura</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-slate-600 mb-2">Aporte al proyecto</h3>
                <p>
                  Como desarrollador full-stack y especialista en UX/UI, mi contribución principal al proyecto es el
                  diseño e implementación de la plataforma digital. Me enfoco en crear una experiencia de usuario
                  intuitiva y accesible que facilite la identificación de factores de riesgo de burnout y la
                  implementación de estrategias de prevención. Además, lidero la integración de algoritmos de IA para la
                  detección temprana de patrones relacionados con el agotamiento laboral.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Estado del Arte Section */}
      <section id="estado-arte" className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Estado del Arte</h2>

          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-3">Industria 4.0</h3>
              <p className="text-slate-700">
                La Industria 4.0 ha transformado radicalmente los entornos laborales, introduciendo automatización,
                conectividad y sistemas inteligentes que han modificado la naturaleza del trabajo. En relación con
                nuestro proyecto sobre burnout, esta revolución industrial presenta tanto desafíos como oportunidades.
                Por un lado, la hiperconectividad y la presión por adaptarse constantemente a nuevas tecnologías pueden
                intensificar factores de estrés laboral. Por otro lado, las herramientas de la Industria 4.0 nos
                permiten desarrollar soluciones más sofisticadas para monitorear, prevenir y manejar el burnout,
                utilizando análisis de datos e inteligencia artificial para personalizar intervenciones y crear entornos
                laborales más saludables.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Transformación Digital</h3>
              <p className="text-slate-700">
                La transformación digital ha acelerado cambios en la cultura organizacional y en las expectativas sobre
                disponibilidad y productividad de los empleados. Nuestro proyecto sobre burnout se sitúa en este
                contexto, reconociendo que la digitalización puede ser tanto causa (trabajo remoto difuminando límites
                entre vida personal y laboral) como solución al problema. Aprovechamos la transformación digital para
                crear una plataforma que utiliza datos en tiempo real para identificar patrones de comportamiento
                asociados al burnout antes de que se manifiesten completamente. Además, nuestra solución se integra con
                los ecosistemas digitales ya existentes en las organizaciones, facilitando su adopción y maximizando su
                impacto.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Cyber Physical Systems</h3>
              <p className="text-slate-700">
                Los Sistemas Ciberfísicos (CPS) representan la integración de procesos computacionales con objetos
                físicos, creando redes inteligentes que pueden monitorear y actuar sobre el entorno. En nuestro proyecto
                sobre burnout, exploramos cómo estos sistemas pueden contribuir a crear espacios de trabajo más
                saludables. Por ejemplo, sensores ambientales pueden detectar factores estresantes como ruido excesivo o
                mala calidad del aire, mientras que wearables pueden monitorear indicadores fisiológicos de estrés.
                Nuestra plataforma integra estos datos para ofrecer una visión holística del bienestar en el entorno
                laboral, permitiendo intervenciones proactivas que modifican el espacio físico y digital para reducir el
                riesgo de burnout.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Inteligencia Artificial</h3>
              <p className="text-slate-700">
                La Inteligencia Artificial constituye un pilar fundamental en nuestro proyecto sobre burnout. Utilizamos
                algoritmos de aprendizaje automático para analizar múltiples fuentes de datos: patrones de comunicación,
                productividad, horarios de trabajo, encuestas de bienestar y más. Estos algoritmos pueden identificar
                señales sutiles que preceden al burnout, permitiendo intervenciones tempranas. Además, nuestros modelos
                de IA personalizan recomendaciones según el perfil individual y organizacional, reconociendo que las
                causas y manifestaciones del burnout varían significativamente entre personas y contextos. La IA también
                nos permite evaluar continuamente la efectividad de las intervenciones, refinando nuestras estrategias
                basadas en resultados reales.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">CANVAS del Proyecto</h3>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl border">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="CANVAS del Proyecto de Software I"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Christopher Riquelme - Proyecto Semestral sobre Burnout</p>
          <p className="mt-2 text-slate-300">Certamen 1 - Ingeniería de Software</p>
        </div>
      </footer>
    </div>
  )
}

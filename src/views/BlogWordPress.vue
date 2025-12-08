<!-- Artículo de blog sobre WordPress para landing pages y sitios corporativos -->
<template>
  <div class="min-h-screen relative overflow-hidden">
    <MouseParticles />
    <div class="fixed inset-0" style="z-index: -10;">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark"></div>
      <div class="grid-background"></div>
      
      <!-- Floating Orbs -->
      <div class="absolute inset-0 opacity-20">
        <div class="floating-orb orb-1 w-96 h-96 bg-lavanda rounded-full blur-3xl"></div>
        <div class="floating-orb orb-2 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>
    </div>

    <HeaderNav />
    
    <!-- Article Hero -->
    <section class="relative pt-40 pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <router-link to="/#blog" class="inline-flex items-center text-lavanda hover:text-primary transition-colors mb-8 text-sm">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al blog
        </router-link>
        
        <div class="mb-8">
          <span class="px-4 py-2 bg-lavanda/20 text-lavanda text-sm rounded-full border border-lavanda/30 inline-block mb-6">WordPress</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            WordPress: Tu sitio web <span class="bg-gradient-to-r from-lavanda to-primary bg-clip-text text-transparent">profesional, fácil y escalable</span>
          </h1>
          <div class="flex items-center gap-4 text-gray-400 text-sm">
            <span>📅 Diciembre 2024</span>
            <span>•</span>
            <span>⏱️ 6 min lectura</span>
          </div>
        </div>

        <div class="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=675&fit=crop" 
            alt="WordPress Development" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <article class="prose prose-invert prose-lg max-w-none">
          <div class="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            
            <h2 class="text-3xl font-light mb-6 text-white">¿Qué es WordPress?</h2>
            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              WordPress es el <strong>sistema de gestión de contenidos (CMS) más popular del mundo</strong>, utilizado por más del 43% de todos los sitios web en internet. Desde blogs personales hasta sitios corporativos de Fortune 500, WordPress ha demostrado ser versátil, potente y fácil de usar.
            </p>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Por qué elegir WordPress?</h2>
            
            <h3 class="text-2xl font-light mb-4 text-lavanda mt-8">1. Gestión de contenido intuitiva</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Con WordPress, actualizar tu sitio web es tan fácil como usar Word. No necesitas conocimientos técnicos para agregar páginas, subir imágenes, escribir artículos de blog o cambiar textos. Tú tienes el control total.
            </p>

            <h3 class="text-2xl font-light mb-4 text-lavanda mt-8">2. SEO optimizado desde el inicio</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              WordPress está construido pensando en SEO. Con plugins como Yoast SEO o Rank Math, puedes optimizar cada página para aparecer en Google. URLs amigables, meta descripciones, sitemaps y más, todo incluido.
            </p>

            <h3 class="text-2xl font-light mb-4 text-lavanda mt-8">3. Miles de temas y plugins</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Con más de 60,000 plugins gratuitos y miles de temas profesionales, puedes agregar cualquier funcionalidad que imagines: formularios de contacto, galerías, calendarios, membresías, tiendas online (WooCommerce), y mucho más.
            </p>

            <h3 class="text-2xl font-light mb-4 text-lavanda mt-8">4. Perfecto para landing pages</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Con herramientas como Elementor Pro o Divi, puedes crear landing pages de conversión sin escribir código. Diseños drag & drop, optimizados para móviles y listos para captar leads.
            </p>

            <h3 class="text-2xl font-light mb-4 text-lavanda mt-8">5. Escalable y flexible</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Comienza con una simple landing page y crece hasta un sitio corporativo completo con blog, área de clientes, tienda online y más. WordPress escala contigo sin necesidad de migrar a otra plataforma.
            </p>

            <div class="bg-lavanda/10 border border-lavanda/30 rounded-2xl p-8 my-12">
              <h3 class="text-2xl font-light mb-4 text-white">📊 Datos de WordPress</h3>
              <p class="text-gray-300 leading-relaxed font-light text-lg mb-4">
                WordPress impulsa más de <strong>835 millones de sitios web</strong> en todo el mundo. Empresas como Sony Music, The New York Times, Microsoft News y The Walt Disney Company confían en WordPress.
              </p>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Casos de uso ideales</h2>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-lavanda/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-lavanda" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Landing pages de conversión</h4>
                  <p class="text-gray-400 font-light">Crea páginas optimizadas para captar leads, promocionar servicios o lanzar productos con tasas de conversión altas.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-lavanda/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-lavanda" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Sitios corporativos</h4>
                  <p class="text-gray-400 font-light">Presencia profesional online con páginas de servicios, equipo, portafolio y formularios de contacto.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-lavanda/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-lavanda" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Blogs y contenido</h4>
                  <p class="text-gray-400 font-light">Publica artículos, tutoriales, noticias. WordPress fue creado originalmente como plataforma de blogging y sigue siendo el mejor en esto.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-lavanda/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-lavanda" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Portafolios profesionales</h4>
                  <p class="text-gray-400 font-light">Muestra tu trabajo con galerías elegantes y diseños personalizados que reflejen tu estilo.</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Costos de WordPress</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              WordPress en sí es gratuito y open-source, pero hay costos asociados:
            </p>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="text-lavanda font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Hosting:</strong> $5-50 USD/mes dependiendo del tráfico</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-lavanda font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Dominio:</strong> $10-15 USD/año</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-lavanda font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Tema premium:</strong> $30-100 USD (pago único)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-lavanda font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Plugins premium:</strong> $0-200 USD/año (opcional)</span>
              </li>
            </ul>

            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              En Landify, ofrecemos paquetes completos que incluyen hosting optimizado, tema premium (Elementor Pro o Divi), plugins esenciales y configuración profesional.
            </p>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Ventajas de trabajar con profesionales</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Aunque WordPress es fácil de usar, un sitio profesional requiere conocimientos de diseño, SEO, seguridad y optimización de velocidad:
            </p>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-lavanda flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300 font-light text-lg">Diseño personalizado que refleja tu marca</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-lavanda flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300 font-light text-lg">Optimización SEO desde el día uno</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-lavanda flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300 font-light text-lg">Velocidad de carga optimizada (Google PageSpeed 90+)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-lavanda flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300 font-light text-lg">Seguridad y backups automáticos</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-lavanda flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300 font-light text-lg">Capacitación para que actualices el contenido fácilmente</span>
              </li>
            </ul>

            <div class="bg-gradient-to-r from-lavanda/20 to-primary/20 border border-lavanda/30 rounded-2xl p-8 mt-12">
              <h3 class="text-2xl font-light mb-4 text-white">¿Listo para tu sitio WordPress?</h3>
              <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                En Landify creamos sitios WordPress profesionales, optimizados y listos para crecer. Desde landing pages hasta sitios corporativos completos.
              </p>
              <router-link 
                to="/servicios/wordpress" 
                class="inline-block bg-gradient-to-r from-lavanda to-primary hover:from-primary hover:to-lavanda text-white px-8 py-4 rounded-full font-normal transition-all hover:scale-105"
              >
                Ver servicios WordPress
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </section>

    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import MouseParticles from '../components/MouseParticles.vue'
import HeaderNav from '../components/HeaderNav.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

<style scoped>
.grid-background {
  background-image: 
    linear-gradient(rgba(107, 78, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(107, 78, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.floating-orb {
  position: absolute;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  bottom: 20%;
  right: 10%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}
</style>

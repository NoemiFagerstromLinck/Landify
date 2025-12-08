<!-- Página de servicios WordPress y Desarrollo Custom -->
<template>
  <div class="min-h-screen relative overflow-hidden">
    <MouseParticles />
    <div class="fixed inset-0" style="z-index: -10;">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark"></div>
      <div class="grid-background"></div>
      
      <!-- Particles -->
      <div class="particles-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      
      <!-- Floating Orbs -->
      <div class="absolute inset-0 opacity-30">
        <div class="floating-orb orb-1 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="floating-orb orb-2 w-80 h-80 bg-magenta rounded-full blur-3xl"></div>
        <div class="floating-orb orb-3 w-72 h-72 bg-lavanda rounded-full blur-3xl"></div>
      </div>
    </div>

    <HeaderNav />
    
    <!-- Hero Section -->
    <section class="relative pt-40 pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div class="max-w-4xl">
          <div class="inline-block mb-6">
            <span class="px-6 py-3 bg-white/5 text-white rounded-full text-sm font-light border border-white/20 backdrop-blur-sm inline-flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Soluciones web a tu medida
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            WordPress & <span class="bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">Código Custom</span>
          </h1>
          
          <p class="text-xl text-gray-400 leading-relaxed mb-8 font-light">
            Desde landings profesionales en WordPress hasta desarrollo web personalizado con Vue.js, React o Node.js. La solución perfecta para tu proyecto único.
          </p>

          <div class="flex flex-wrap gap-4">
            <button class="bg-gradient-to-r from-primary to-magenta hover:from-magenta hover:to-primary text-white px-8 py-4 rounded-full font-normal transition-all hover:scale-105">
              Cotizar proyecto
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Opciones de Servicio -->
    <section class="py-20 relative">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-4">¿Qué necesitas?</h2>
          <p class="text-lg text-gray-400 font-light">Dos caminos según tu proyecto</p>
        </div>

        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <!-- WordPress -->
          <div class="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-magenta flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.39-2.310.607-3.582.607m-6.991-3.328C3.074 17.765 1.5 15.058 1.5 12c0-2.256.797-4.328 2.125-5.953L9.34 19.033l-4.331-1.577zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-light text-white">WordPress</h3>
            </div>
            
            <p class="text-gray-300 text-lg font-light mb-6">
              Perfecto para landing pages, sitios corporativos y blogs con gestión de contenido fácil.
            </p>

            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Landing pages de conversión</p>
                  <p class="text-gray-300 text-base font-light">Optimizadas para captar leads y ventas</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Sitios corporativos</p>
                  <p class="text-gray-300 text-base font-light">Presencia profesional con gestión sencilla</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Blogs y contenido</p>
                  <p class="text-gray-300 text-base font-light">SEO optimizado y fácil de actualizar</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Plugins premium incluidos</p>
                  <p class="text-gray-300 text-base font-light">Elementor Pro, ACF, WooCommerce y más</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Código Custom -->
          <div class="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-magenta/50 transition-all">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-magenta to-lavanda flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-2xl font-light text-white">Código Custom</h3>
            </div>
            
            <p class="text-gray-300 text-lg font-light mb-6">
              Desarrollo a medida con Vue.js, React, Node.js. Para proyectos únicos que necesitan funcionalidades específicas.
            </p>

            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Aplicaciones web SPA</p>
                  <p class="text-gray-300 text-base font-light">Vue.js, React, experiencias fluidas y rápidas</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">APIs y backends</p>
                  <p class="text-gray-300 text-base font-light">Node.js, Express, bases de datos personalizadas</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Integraciones complejas</p>
                  <p class="text-gray-300 text-base font-light">APIs externas, sistemas legacy, automatizaciones</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">100% a tu medida</p>
                  <p class="text-gray-300 text-base font-light">Sin limitaciones, cualquier funcionalidad es posible</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Conclusión -->
        <div class="max-w-4xl mx-auto mt-12 text-center">
          <p class="text-gray-300 text-lg font-light leading-relaxed">
            💡 <span class="text-white font-normal">¿No estás seguro cuál elegir?</span> WordPress es ideal para sitios de contenido y landing pages rápidas. Código custom es mejor cuando necesitas funcionalidades específicas, aplicaciones web o integraciones complejas. Contáctanos y te asesoramos.
          </p>
        </div>
      </div>
    </section>

    <!-- Proceso de Trabajo -->
    <section class="py-20 relative">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-4">¿Cómo trabajamos?</h2>
          <p class="text-lg text-gray-400 font-light">Proceso ágil y colaborativo</p>
        </div>

        <!-- Paso 1 -->
        <div class="max-w-6xl mx-auto mb-20">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <div class="inline-block px-5 py-2 bg-primary/20 text-white rounded-full text-base font-normal mb-4 border border-primary/30">
                Paso 1
              </div>
              <h3 class="text-4xl md:text-5xl font-light mb-6">Descubrimiento y planificación</h3>
              <p class="text-xl text-gray-300 leading-relaxed font-light mb-8">
                Entendemos tu proyecto, objetivos y audiencia. Definimos la tecnología ideal (WordPress o custom) y creamos un plan de trabajo detallado.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Reunión inicial y análisis de requerimientos</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Propuesta técnica y cotización</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Cronograma y definición de entregables</span>
                </li>
              </ul>
            </div>
            <div class="order-1 md:order-2">
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-magenta/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop" alt="Planificación" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- Paso 2 -->
        <div class="max-w-6xl mx-auto mb-20">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-magenta/20 to-lavanda/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop" alt="Desarrollo" class="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div class="inline-block px-5 py-2 bg-magenta/20 text-white rounded-full text-base font-normal mb-4 border border-magenta/30">
                Paso 2
              </div>
              <h3 class="text-4xl md:text-5xl font-light mb-6">Diseño y desarrollo</h3>
              <p class="text-xl text-gray-300 leading-relaxed font-light mb-8">
                Diseñamos la interfaz y desarrollamos con las mejores prácticas. Revisiones constantes y feedback para asegurar que vamos por buen camino.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-magenta mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Diseño UI/UX profesional</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-magenta mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Desarrollo responsive (móvil, tablet, desktop)</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-magenta mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Optimización de velocidad y SEO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Paso 3 -->
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <div class="inline-block px-5 py-2 bg-lavanda/20 text-white rounded-full text-base font-normal mb-4 border border-lavanda/30">
                Paso 3
              </div>
              <h3 class="text-4xl md:text-5xl font-light mb-6">Testing y lanzamiento</h3>
              <p class="text-xl text-gray-300 leading-relaxed font-light mb-8">
                Pruebas exhaustivas en todos los dispositivos y navegadores. Capacitación y documentación para que puedas gestionar tu sitio. Lanzamiento exitoso.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-lavanda mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Testing completo de funcionalidades</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-lavanda mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Capacitación y documentación</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-lavanda mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Soporte post-lanzamiento</span>
                </li>
              </ul>
            </div>
            <div class="order-1 md:order-2">
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-lavanda/20 to-primary/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop" alt="Lanzamiento" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-32 relative">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="max-w-5xl mx-auto">
          <div 
            class="relative overflow-hidden rounded-3xl group cursor-pointer cta-hover-container"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <!-- Imagen de fondo -->
            <div class="absolute inset-0">
              <img 
                ref="ctaImage"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop" 
                alt="Team collaboration" 
                class="w-full h-full object-cover cta-image"
                :style="imageStyle"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-magenta/80 to-primary/90 transition-all duration-500 group-hover:from-primary/85 group-hover:via-magenta/75 group-hover:to-primary/85"></div>
            </div>
            
            <!-- Contenido -->
            <div class="relative z-10 px-8 md:px-16 py-20 text-center">
              <h2 class="text-5xl md:text-6xl lg:text-7xl font-normal mb-8 text-white drop-shadow-lg">
                ¿Tienes un proyecto en mente?
              </h2>
              <p class="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto font-light drop-shadow-md">
                Conversemos sobre tu idea y encontremos la mejor solución técnica
              </p>
              <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <button class="bg-white text-primary px-12 py-6 rounded-full text-xl font-semibold hover:scale-105 transition-all hover:shadow-2xl">
                  Iniciar mi proyecto
                </button>
                <button class="px-12 py-6 rounded-full text-xl font-normal border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                  Agendar reunión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MouseParticles from '../components/MouseParticles.vue'
import HeaderNav from '../components/HeaderNav.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'

const ctaImage = ref(null)
const imageStyle = ref({
  transform: 'scale(1.1) translate(0px, 0px)',
  transition: 'transform 0.3s ease-out'
})

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const moveX = (x - centerX) / centerX * 15
  const moveY = (y - centerY) / centerY * 15
  
  imageStyle.value = {
    transform: `scale(1.15) translate(${moveX}px, ${moveY}px)`,
    transition: 'transform 0.3s ease-out'
  }
}

const handleMouseLeave = () => {
  imageStyle.value = {
    transform: 'scale(1.1) translate(0px, 0px)',
    transition: 'transform 0.6s ease-out'
  }
}
</script>

<style scoped>
/* Particles */
.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #6B4EFF;
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 15s infinite;
  box-shadow: 0 0 10px #6B4EFF;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; animation-delay: 2s; }
.particle:nth-child(3) { left: 30%; animation-delay: 4s; }
.particle:nth-child(4) { left: 40%; animation-delay: 1s; }
.particle:nth-child(5) { left: 50%; animation-delay: 3s; }
.particle:nth-child(6) { left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; animation-delay: 2.5s; }
.particle:nth-child(8) { left: 80%; animation-delay: 4.5s; }
.particle:nth-child(9) { left: 90%; animation-delay: 1.5s; }
.particle:nth-child(10) { left: 15%; animation-delay: 3.5s; }
.particle:nth-child(11) { left: 25%; animation-delay: 0.5s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(12) { left: 35%; animation-delay: 2.8s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(13) { left: 45%; animation-delay: 4.2s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(14) { left: 55%; animation-delay: 1.8s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(15) { left: 65%; animation-delay: 3.2s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(16) { left: 75%; animation-delay: 5.5s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(17) { left: 85%; animation-delay: 2.2s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(18) { left: 95%; animation-delay: 4.8s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(19) { left: 12%; animation-delay: 1.2s; width: 6px; height: 6px; }
.particle:nth-child(20) { left: 88%; animation-delay: 3.8s; width: 6px; height: 6px; }

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

/* Grid Background */
.grid-background {
  background-image: 
    linear-gradient(rgba(107, 78, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(107, 78, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Floating Orbs */
.floating-orb {
  position: absolute;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  top: 60%;
  right: 15%;
  animation-delay: -7s;
}

.orb-3 {
  bottom: 15%;
  left: 20%;
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% { 
    transform: translate(0, 0) scale(1); 
  }
  33% { 
    transform: translate(30px, -50px) scale(1.1); 
  }
  66% { 
    transform: translate(-20px, 30px) scale(0.9); 
  }
}

/* CTA Hover Effect with Dynamic Movement */
.cta-hover-container {
  transition: transform 0.3s ease;
}

.cta-image {
  will-change: transform;
}
</style>

<!-- Página de servicio Shopify con fondo parallax, pros/contras y proceso de trabajo -->
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
              La plataforma más popular del mundo
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            Tiendas <span class="bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">Shopify</span>
          </h1>
          
          <p class="text-xl text-gray-400 leading-relaxed mb-8 font-light">
            La plataforma eCommerce más completa y escalable. Ideal para marcas que buscan crecimiento ilimitado con miles de integraciones y funcionalidades avanzadas.
          </p>

          <div class="flex flex-wrap gap-4">
            <button class="bg-gradient-to-r from-primary to-magenta hover:from-magenta hover:to-primary text-white px-8 py-4 rounded-full font-normal transition-all hover:scale-105">
              Cotizar proyecto
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pros y Contras -->
    <section class="py-20 relative">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-4">¿Es Shopify adecuado para ti?</h2>
          <p class="text-lg text-gray-400 font-light">Ventajas y consideraciones importantes</p>
        </div>

        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <!-- Pros -->
          <div class="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-magenta flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-2xl font-light text-white">Ventajas</h3>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Plataforma global</p>
                  <p class="text-gray-300 text-base font-light">Ideal para vender internacionalmente con múltiples monedas y idiomas</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Escalabilidad ilimitada</p>
                  <p class="text-gray-300 text-base font-light">Maneja desde 10 hasta millones de productos sin problemas</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">+8,000 apps disponibles</p>
                  <p class="text-gray-300 text-base font-light">Integración con casi cualquier herramienta que necesites</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Venta multicanal</p>
                  <p class="text-gray-300 text-base font-light">Instagram, Facebook, Amazon, TikTok desde un solo panel</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Seguridad certificada</p>
                  <p class="text-gray-300 text-base font-light">Nivel 1 PCI, hosting incluido y actualizaciones automáticas</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Contras -->
          <div class="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-magenta to-lavanda flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 class="text-2xl font-light text-white">Consideraciones</h3>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Sin Transbank nativo</p>
                  <p class="text-gray-300 text-base font-light">Requiere apps de terceros para integración con Transbank (WebPay/OnePay)</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Costos de comisión</p>
                  <p class="text-gray-300 text-base font-light">Cobra entre 0.5% y 2% por transacción además de la pasarela de pago</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Costos mensuales más altos</p>
                  <p class="text-gray-300 text-base font-light">Desde $39 USD/mes, puede ser elevado para negocios pequeños iniciales</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Apps pueden acumularse</p>
                  <p class="text-gray-300 text-base font-light">Muchas funcionalidades avanzadas requieren apps pagas adicionales</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-2 text-lg">Optimizado para mercado global</p>
                  <p class="text-gray-300 text-base font-light">Algunas funcionalidades específicas para Chile/Latam son limitadas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Conclusión -->
        <div class="max-w-4xl mx-auto mt-12 text-center">
          <p class="text-gray-300 text-lg font-light leading-relaxed">
            💡 <span class="text-white font-normal">Recomendamos Shopify si:</span> Planeas vender internacionalmente, necesitas escalar rápido, o buscas integraciones personalizadas con apps y servicios externos. Para negocios 100% locales chilenos, considera <a href="/servicios/jumpseller" class="text-primary hover:text-magenta transition-colors">Jumpseller</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- Cómo funciona - Sección con videos/imágenes -->
    <section class="py-20 relative">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-4">¿Cómo creamos tu tienda Shopify?</h2>
          <p class="text-lg text-gray-400 font-light">Proceso paso a paso para lanzar tu negocio online</p>
        </div>

        <!-- Paso 1 -->
        <div class="max-w-6xl mx-auto mb-20">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <div class="inline-block px-5 py-2 bg-primary/20 text-white rounded-full text-base font-normal mb-4 border border-primary/30">
                Paso 1
              </div>
              <h3 class="text-4xl md:text-5xl font-light mb-6">Configuración inicial</h3>
              <p class="text-xl text-gray-300 leading-relaxed font-light mb-8">
                Configuramos tu cuenta de Shopify, elegimos el plan adecuado y preparamos la estructura base de tu tienda. Conectamos dominio, métodos de pago y configuramos las opciones de envío.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Selección y activación del plan</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Configuración de dominio personalizado</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Integración de medios de pago</span>
                </li>
              </ul>
            </div>
            <div class="order-1 md:order-2">
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-magenta/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <!-- Aquí irá tu imagen o video -->
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop" alt="Configuración Shopify" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- Paso 2 -->
        <div class="max-w-6xl mx-auto mb-20">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-magenta/20 to-lavanda/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <!-- Aquí irá tu imagen o video -->
                <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&fit=crop" alt="Diseño personalizado" class="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div class="inline-block px-5 py-2 bg-magenta/20 text-white rounded-full text-base font-normal mb-4 border border-magenta/30">
                Paso 2
              </div>
              <h3 class="text-4xl md:text-5xl font-light mb-6">Diseño y personalización</h3>
              <p class="text-xl text-gray-300 leading-relaxed font-light mb-8">
                Creamos un diseño único que refleje tu marca. Personalizamos colores, tipografías, logos y creamos páginas especiales adaptadas a tus necesidades de negocio.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-magenta mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Selección y customización de tema</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-magenta mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Diseño responsive para móviles</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-magenta mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Integración de identidad visual</span>
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
              <h3 class="text-4xl md:text-5xl font-light mb-6">Carga de productos y lanzamiento</h3>
              <p class="text-xl text-gray-300 leading-relaxed font-light mb-8">
                Subimos tus productos con descripciones optimizadas, imágenes profesionales y configuramos inventario. Realizamos pruebas exhaustivas y lanzamos tu tienda al público.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-lavanda mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Optimización de fichas de producto</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-lavanda mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Testing completo del checkout</span>
                </li>
                <li class="flex items-start text-gray-300">
                  <svg class="w-6 h-6 text-lavanda mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="font-light text-lg">Capacitación para administrar tu tienda</span>
                </li>
              </ul>
            </div>
            <div class="order-1 md:order-2">
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-lavanda/20 to-primary/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <!-- Aquí irá tu imagen o video -->
                <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=450&fit=crop" alt="Lanzamiento tienda" class="w-full h-full object-cover" />
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
                ¿Listo para llevar tu negocio online?
              </h2>
              <p class="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto font-light drop-shadow-md">
                Contáctanos hoy y recibe una cotización personalizada para tu tienda Shopify
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

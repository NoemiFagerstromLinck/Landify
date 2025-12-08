<!-- Sección de preguntas frecuentes con acordeones interactivos -->
<template>
  <section class="w-full flex flex-col items-center py-16 px-2 text-white overflow-hidden">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">Preguntas Frecuentes</h2>
        <p class="text-lg text-gray-400 font-light">Resolvemos tus dudas más comunes sobre cómo trabajamos y nuestros servicios.</p>
      </div>
      <div class="w-full max-w-5xl grid gap-6 mx-auto">
        <FaqItem 
          question="¿Qué plataformas trabajan?"
          answer="Somos expertos en Shopify, Jumpseller, WordPress y desarrollo a medida."
        />
        <FaqItem 
          question="¿Cuánto demora crear mi tienda online?"
          answer="¡Depende del proyecto! Pero la mayoría de las tiendas están listas en 7 a 15 días hábiles."
        />
        <FaqItem 
          question="¿Puedo migrar mi tienda de otra plataforma?"
          answer="Sí, te ayudamos a migrar desde WooCommerce, Wix, Tiendanube y más a Shopify o Jumpseller."
        />
        <FaqItem 
          question="¿Ofrecen soporte y capacitación?"
          answer="Sí, incluimos capacitación y soporte post-lanzamiento para que manejes tu tienda sin problemas."
        />
        <FaqItem 
          question="¿Qué diferencia hay entre Shopify y Jumpseller?"
          answer="Shopify es ideal para proyectos globales y escalables, Jumpseller es perfecto para negocios locales y pagos chilenos."
        />
      </div>
      
      <!-- CTA Section -->
      <div class="max-w-6xl mx-auto mt-20">
        <div class="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <!-- Text & CTA -->
          <div class="space-y-6">
            <h3 class="text-3xl md:text-4xl font-light text-white">
              ¿Listo para llevar tu negocio al mundo digital?
            </h3>
            <p class="text-gray-400 font-light leading-relaxed">
              Agenda una reunión gratuita y descubre cómo podemos ayudarte a crear tu presencia online profesional.
            </p>
            <button class="group relative bg-gradient-to-r from-primary to-magenta text-white px-8 py-4 rounded-full text-base font-normal transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 overflow-hidden">
              <span class="relative z-10 flex items-center gap-2">
                Agendar Reunión
                <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-magenta to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
          
          <!-- Image -->
          <div class="relative">
            <div class="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop" 
                alt="Equipo trabajando" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Particles for tech effect -->
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
    </div>
  </section>
</template>

<script setup>
import FaqItem from './FaqItem.vue';
</script>

<style scoped>
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
  animation: particleFloat 12s infinite;
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
.particle:nth-child(10) { left: 15%; animation-delay: 3.5s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
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
</style>

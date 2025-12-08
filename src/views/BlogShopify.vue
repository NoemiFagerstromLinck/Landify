<!-- Artículo de blog sobre Shopify y sus ventajas para eCommerce global -->
<template>
  <div class="min-h-screen relative overflow-hidden">
    <MouseParticles />
    <div class="fixed inset-0" style="z-index: -10;">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark"></div>
      <div class="grid-background"></div>
      
      <!-- Floating Orbs -->
      <div class="absolute inset-0 opacity-20">
        <div class="floating-orb orb-1 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="floating-orb orb-2 w-80 h-80 bg-magenta rounded-full blur-3xl"></div>
      </div>
    </div>

    <HeaderNav />
    
    <!-- Article Hero -->
    <section class="relative pt-40 pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <router-link to="/#blog" class="inline-flex items-center text-primary hover:text-magenta transition-colors mb-8 text-sm">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al blog
        </router-link>
        
        <div class="mb-8">
          <span class="px-4 py-2 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 inline-block mb-6">Shopify</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Shopify: La mejor plataforma para tu <span class="bg-gradient-to-r from-primary to-magenta bg-clip-text text-transparent">tienda online global</span>
          </h1>
          <div class="flex items-center gap-4 text-gray-400 text-sm">
            <span>📅 Diciembre 2024</span>
            <span>•</span>
            <span>⏱️ 5 min lectura</span>
          </div>
        </div>

        <div class="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=675&fit=crop" 
            alt="Shopify Dashboard" 
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
            
            <h2 class="text-3xl font-light mb-6 text-white">¿Qué es Shopify?</h2>
            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              Shopify es la plataforma de eCommerce más popular del mundo, con más de <strong>2 millones de tiendas activas</strong> en 175 países. Fue fundada en 2006 y desde entonces se ha convertido en la opción preferida de emprendedores, pequeñas empresas y grandes marcas como Gymshark, Allbirds y Kylie Cosmetics.
            </p>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Por qué elegir Shopify?</h2>
            
            <h3 class="text-2xl font-light mb-4 text-primary mt-8">1. Plataforma global probada</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Shopify está diseñado para vender en cualquier parte del mundo. Soporta múltiples monedas, idiomas y métodos de pago internacionales. Si tu visión es crecer más allá de tu país, Shopify es la mejor opción.
            </p>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">2. Escalabilidad ilimitada</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Desde 10 productos hasta 100,000+, Shopify puede manejar cualquier volumen de ventas. Su infraestructura en la nube garantiza que tu tienda nunca se caiga, incluso durante picos de tráfico como Black Friday.
            </p>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">3. Más de 8,000 aplicaciones</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              El App Store de Shopify tiene una aplicación para casi cualquier necesidad: email marketing, reviews, programas de lealtad, contabilidad, inventario, envíos y mucho más. Puedes agregar funcionalidades sin necesidad de programar.
            </p>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">4. Diseño y personalización profesional</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Con miles de temas (gratuitos y premium) y un editor visual fácil de usar, puedes crear una tienda que refleje tu marca perfectamente. Si necesitas algo único, Shopify permite personalización completa con código.
            </p>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">5. Integración con redes sociales</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Vende directamente en Instagram, Facebook, TikTok, Pinterest y más. Shopify se integra nativamente con todas las plataformas sociales importantes para que puedas vender donde estén tus clientes.
            </p>

            <div class="bg-primary/10 border border-primary/30 rounded-2xl p-8 my-12">
              <h3 class="text-2xl font-light mb-4 text-white">💡 ¿Sabías que...?</h3>
              <p class="text-gray-300 leading-relaxed font-light text-lg">
                En 2023, las tiendas Shopify generaron más de <strong>$200 mil millones de dólares</strong> en ventas combinadas. La plataforma procesa más de 36,000 pedidos por minuto durante las temporadas altas.
              </p>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Para quién es Shopify?</h2>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Emprendedores que quieren vender internacionalmente</h4>
                  <p class="text-gray-400 font-light">Shopify es ideal si tu objetivo es vender en múltiples países con diferentes monedas y métodos de pago.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Marcas que necesitan crecer rápidamente</h4>
                  <p class="text-gray-400 font-light">La infraestructura de Shopify está construida para escalar sin límites, perfecto para negocios en crecimiento.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Negocios que venden en redes sociales</h4>
                  <p class="text-gray-400 font-light">Con integraciones nativas para Instagram, Facebook y TikTok, puedes gestionar todo desde un solo lugar.</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Costos de Shopify</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Shopify ofrece varios planes según tus necesidades:
            </p>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="text-primary font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Basic:</strong> $39 USD/mes - Perfecto para empezar</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Shopify:</strong> $105 USD/mes - Para negocios en crecimiento</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Advanced:</strong> $399 USD/mes - Para grandes volúmenes</span>
              </li>
            </ul>

            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              Ten en cuenta que Shopify cobra comisiones por transacción (2.9% + $0.30 USD por venta si usas Shopify Payments) y puede haber costos adicionales por apps premium.
            </p>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Consideraciones</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Aunque Shopify es poderoso, hay algunos puntos a considerar:
            </p>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="text-magenta font-normal">⚠️</span>
                <span class="text-gray-300 font-light text-lg"><strong>Transbank en Chile:</strong> Requiere apps de terceros que pueden sumar costos extras</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-magenta font-normal">⚠️</span>
                <span class="text-gray-300 font-light text-lg"><strong>Costos mensuales:</strong> Los planes son en dólares y pueden sumarse rápido con apps premium</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-magenta font-normal">⚠️</span>
                <span class="text-gray-300 font-light text-lg"><strong>Curva de aprendizaje:</strong> Aunque es intuitivo, dominar todas sus funciones toma tiempo</span>
              </li>
            </ul>

            <div class="bg-gradient-to-r from-primary/20 to-magenta/20 border border-primary/30 rounded-2xl p-8 mt-12">
              <h3 class="text-2xl font-light mb-4 text-white">¿Listo para crear tu tienda Shopify?</h3>
              <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                En Landify somos expertos en Shopify. Te ayudamos a configurar, diseñar y optimizar tu tienda para que vendas desde el día uno.
              </p>
              <router-link 
                to="/servicios/shopify" 
                class="inline-block bg-gradient-to-r from-primary to-magenta hover:from-magenta hover:to-primary text-white px-8 py-4 rounded-full font-normal transition-all hover:scale-105"
              >
                Ver servicios Shopify
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
  bottom: 15%;
  right: 15%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { 
    transform: translate(0, 0) scale(1); 
  }
  50% { 
    transform: translate(30px, -30px) scale(1.1); 
  }
}
</style>

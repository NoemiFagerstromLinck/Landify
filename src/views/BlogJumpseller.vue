<!-- Artículo de blog sobre Jumpseller como plataforma chilena ideal para negocios locales -->
<template>
  <div class="min-h-screen relative overflow-hidden">
    <MouseParticles />
    <div class="fixed inset-0" style="z-index: -10;">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark"></div>
      <div class="grid-background"></div>
      
      <!-- Floating Orbs -->
      <div class="absolute inset-0 opacity-20">
        <div class="floating-orb orb-1 w-96 h-96 bg-magenta rounded-full blur-3xl"></div>
        <div class="floating-orb orb-2 w-80 h-80 bg-lavanda rounded-full blur-3xl"></div>
      </div>
    </div>

    <HeaderNav />
    
    <!-- Article Hero -->
    <section class="relative pt-40 pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <router-link to="/#blog" class="inline-flex items-center text-magenta hover:text-primary transition-colors mb-8 text-sm">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al blog
        </router-link>
        
        <div class="mb-8">
          <span class="px-4 py-2 bg-magenta/20 text-magenta text-sm rounded-full border border-magenta/30 inline-block mb-6">Jumpseller</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Jumpseller: La plataforma chilena <span class="bg-gradient-to-r from-magenta to-lavanda bg-clip-text text-transparent">perfecta para tu negocio local</span>
          </h1>
          <div class="flex items-center gap-4 text-gray-400 text-sm">
            <span>📅 Diciembre 2024</span>
            <span>•</span>
            <span>⏱️ 4 min lectura</span>
          </div>
        </div>

        <div class="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=675&fit=crop" 
            alt="Jumpseller Chile" 
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
            
            <h2 class="text-3xl font-light mb-6 text-white">¿Qué es Jumpseller?</h2>
            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              Jumpseller es una plataforma de eCommerce <strong>creada en Latinoamérica para Latinoamérica</strong>. Fundada en Chile en 2011, está diseñada específicamente para las necesidades del mercado local, con soporte nativo para Transbank, WebPay y los métodos de pago más usados en la región.
            </p>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Por qué elegir Jumpseller en Chile?</h2>
            
            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">1. Transbank nativo sin complicaciones</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              A diferencia de otras plataformas, Jumpseller tiene integración directa con Transbank y WebPay. No necesitas apps de terceros ni pagar comisiones extras. Tus clientes chilenos pueden pagar con tarjetas locales sin problemas.
            </p>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">2. Sin comisiones por venta</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Jumpseller cobra una suscripción mensual fija pero <strong>no te cobra comisiones por cada venta</strong>. Esto significa que mientras más vendas, más rentable es tu negocio. Ideal si tienes productos de bajo margen o alto volumen.
            </p>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">3. Precios competitivos</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Los planes de Jumpseller empiezan desde <strong>$14.990 CLP/mes</strong> (aproximadamente $17 USD). Mucho más accesible que plataformas internacionales, especialmente para negocios pequeños y medianos que están comenzando.
            </p>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">4. Soporte en español y horario local</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              El equipo de Jumpseller habla español, entiende el mercado chileno y está disponible en tu horario. No más esperar respuestas de soporte en inglés desde el otro lado del mundo.
            </p>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">5. Fácil de usar</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              La interfaz de Jumpseller es intuitiva y está en español. No necesitas ser un experto técnico para crear y administrar tu tienda. Perfecto si estás comenzando en el mundo del eCommerce.
            </p>

            <div class="bg-magenta/10 border border-magenta/30 rounded-2xl p-8 my-12">
              <h3 class="text-2xl font-light mb-4 text-white">🇨🇱 Hecho en Chile para Chile</h3>
              <p class="text-gray-300 leading-relaxed font-light text-lg">
                Jumpseller fue creada por emprendedores chilenos que entendían las dificultades de vender online en la región. Hoy es la plataforma de eCommerce más popular de Chile con miles de tiendas activas.
              </p>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Para quién es Jumpseller?</h2>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Negocios 100% locales en Chile</h4>
                  <p class="text-gray-400 font-light">Si tu mercado principal es Chile y tus clientes pagan con tarjetas chilenas, Jumpseller es tu mejor opción.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Emprendedores que buscan simplicidad</h4>
                  <p class="text-gray-400 font-light">No quieres complicarte con configuraciones complejas. Jumpseller es directo, simple y efectivo.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Tiendas con márgenes ajustados</h4>
                  <p class="text-gray-400 font-light">Sin comisiones por venta, cada peso que ganas es tuyo. Perfecto si vendes productos con márgenes bajos.</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Planes y precios</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Jumpseller ofrece varios planes en pesos chilenos:
            </p>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="text-magenta font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Starter:</strong> $14.990 CLP/mes - Hasta 100 productos</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-magenta font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Pro:</strong> $29.990 CLP/mes - Hasta 500 productos</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-magenta font-normal">•</span>
                <span class="text-gray-300 font-light text-lg"><strong>Enterprise:</strong> Personalizado - Catálogos grandes</span>
              </li>
            </ul>

            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              <strong>Sin comisiones por transacción.</strong> Lo que pagas es solo la suscripción mensual. Los únicos costos adicionales son los de Transbank (alrededor de 3-4% por transacción).
            </p>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Limitaciones a considerar</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Aunque Jumpseller es excelente para negocios locales, tiene algunas limitaciones:
            </p>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="text-lavanda font-normal">⚠️</span>
                <span class="text-gray-300 font-light text-lg"><strong>Menos apps:</strong> El ecosistema de aplicaciones es más pequeño que Shopify</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-lavanda font-normal">⚠️</span>
                <span class="text-gray-300 font-light text-lg"><strong>Escalabilidad:</strong> Mejor para catálogos de hasta 500-1000 productos</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-lavanda font-normal">⚠️</span>
                <span class="text-gray-300 font-light text-lg"><strong>Enfoque regional:</strong> Optimizado para Latinoamérica, no tanto para mercados globales</span>
              </li>
            </ul>

            <div class="bg-gradient-to-r from-magenta/20 to-lavanda/20 border border-magenta/30 rounded-2xl p-8 mt-12">
              <h3 class="text-2xl font-light mb-4 text-white">¿Lista tu tienda Jumpseller?</h3>
              <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                En Landify somos expertos en Jumpseller. Te ayudamos a crear tu tienda, conectar Transbank y configurar todo para que empieces a vender rápido.
              </p>
              <router-link 
                to="/servicios/jumpseller" 
                class="inline-block bg-gradient-to-r from-magenta to-lavanda hover:from-lavanda hover:to-magenta text-white px-8 py-4 rounded-full font-normal transition-all hover:scale-105"
              >
                Ver servicios Jumpseller
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
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.orb-2 {
  bottom: 15%;
  left: 15%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, 30px) scale(1.1); }
}
</style>

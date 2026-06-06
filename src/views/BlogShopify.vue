<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />

    <article class="pt-40 pb-20 md:pt-48 md:pb-32">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-3xl">
        <router-link to="/#blog" class="inline-flex items-center text-xs tracking-widest text-paper-muted hover:text-paper font-body uppercase border-b border-white/10 hover:border-paper pb-1 transition-all mb-12">
          &larr; Volver al blog
        </router-link>

        <div class="mb-12">
          <span class="text-xs tracking-[0.2em] text-crimson font-body uppercase mb-6 block">Shopify</span>
          <h1 class="text-4xl md:text-6xl font-display font-bold text-paper leading-[1.05] mb-6">
            Shopify: La mejor plataforma para tu tienda online global
          </h1>
          <div class="flex items-center gap-4 text-xs text-paper-muted font-body">
            <span>Julio 2025</span>
            <span class="w-px h-4 bg-white/10"></span>
            <span>5 min lectura</span>
          </div>
        </div>

        <div class="aspect-video bg-charcoal border border-white/5 mb-16 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=675&fit=crop" alt="Shopify Dashboard" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-paper font-body leading-relaxed mb-8">Si estás pensando en dar el salto al eCommerce y tu meta es vender más allá de las fronteras chilenas, Shopify es, sin duda, la plataforma que deberías considerar. Con más de 4 millones de tiendas activas en todo el mundo, Shopify se ha consolidado como el líder indiscutible del comercio electrónico global.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿Por qué Shopify domina el mercado?</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Shopify no es solo un creador de tiendas online; es un ecosistema completo que te permite gestionar cada aspecto de tu negocio digital. Desde la gestión de inventario hasta el marketing multicanal, todo está integrado en una sola plataforma.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Escalabilidad sin límites</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Una de las mayores ventajas de Shopify es su capacidad de escalar contigo. Puedes comenzar con 10 productos y llegar a millones sin necesidad de migrar de plataforma. La infraestructura de Shopify maneja automáticamente el aumento de tráfico y las demandas de tu tienda.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Ecosistema de apps</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Con más de 8,000 aplicaciones disponibles en su App Store, puedes extender las funcionalidades de tu tienda prácticamente sin límites. Desde marketing por email hasta automatizaciones avanzadas, pasando por programas de fidelización y análisis detallados.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Venta multicanal integrada</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Shopify te permite vender no solo en tu tienda online, sino también en Instagram, Facebook, Amazon, TikTok y más. Todo desde un solo panel de administración, sincronizando inventario y pedidos automáticamente.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿Es Shopify adecuado para tu negocio chileno?</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Si bien Shopify es una plataforma global, es perfectamente funcional para el mercado chileno. La principal consideración es que necesitarás apps de terceros para integrar Transbank (WebPay), pero nosotros nos encargamos de toda esa configuración por ti.</p>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Shopify es ideal si planeas vender internacionalmente, necesitas funcionalidades avanzadas, o esperas escalar rápidamente. Para negocios 100% locales, <router-link to="/blog/jumpseller-chile" class="text-paper underline hover:text-crimson transition-colors">Jumpseller</router-link> puede ser una alternativa más económica.</p>
        </div>

        <div class="mt-16 pt-12 border-t border-white/5">
          <p class="text-sm text-paper-muted font-body mb-6">¿Te interesa crear tu tienda Shopify?</p>
          <a href="https://wa.me/56952190811" target="_blank" class="inline-block bg-crimson text-paper px-8 py-3 text-xs tracking-widest font-body uppercase hover:bg-white hover:text-ink transition-all duration-300">
            Cotizar proyecto
          </a>
        </div>
      </div>
    </article>

    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

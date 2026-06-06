<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />

    <article class="pt-40 pb-20 md:pt-48 md:pb-32">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-3xl">
        <router-link to="/#blog" class="inline-flex items-center text-xs tracking-widest text-paper-muted hover:text-paper font-body uppercase border-b border-white/10 hover:border-paper pb-1 transition-all mb-12">
          &larr; Volver al blog
        </router-link>

        <div class="mb-12">
          <span class="text-xs tracking-[0.2em] text-crimson font-body uppercase mb-6 block">Jumpseller</span>
          <h1 class="text-4xl md:text-6xl font-display font-bold text-paper leading-[1.05] mb-6">
            Jumpseller en Chile: La alternativa local para tu eCommerce
          </h1>
          <div class="flex items-center gap-4 text-xs text-paper-muted font-body">
            <span>Julio 2025</span>
            <span class="w-px h-4 bg-white/10"></span>
            <span>4 min lectura</span>
          </div>
        </div>

        <div class="aspect-video bg-charcoal border border-white/5 mb-16 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop" alt="Jumpseller" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-paper font-body leading-relaxed mb-8">Jumpseller es una plataforma de eCommerce chilena que ha ganado popularidad entre las PyMEs locales por su enfoque en la simplicidad y su integración nativa con Transbank. Si tu negocio opera principalmente en Chile, Jumpseller puede ser la solución perfecta.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">Ventajas de Jumpseller para el mercado chileno</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">A diferencia de plataformas internacionales, Jumpseller está diseñado pensando en las necesidades específicas del comercio chileno. Esto se traduce en integraciones directas con servicios locales como Transbank, pagos en CLP y soporte en horario chileno.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Transbank nativo</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">La integración con Webpay Plus viene incluida de fábrica. No necesitas apps de terceros ni configuraciones complejas. Esto significa menos costos mensuales y una configuración más rápida.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Sin comisiones por venta</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Jumpseller cobra una tarifa plana mensual en pesos chilenos, sin importar cuánto vendas. Esto permite tener costos predecibles y márgenes más claros, especialmente importante para pequeños negocios.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Simplicidad y facilidad de uso</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">La interfaz de Jumpseller es intuitiva y está diseñada para emprendedores sin conocimientos técnicos. Puedes agregar productos, configurar envíos y empezar a vender en cuestión de horas, no días.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿Cuándo elegir Jumpseller sobre Shopify?</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Jumpseller es la mejor opción cuando tu mercado principal es Chile, buscas costos predecibles y necesitas una solución simple que funcione desde el día uno. Si planeas expansion internacional o necesitas funcionalidades muy avanzadas, <router-link to="/blog/shopify-tienda-online" class="text-paper underline hover:text-crimson transition-colors">Shopify</router-link> podría ser más adecuado.</p>
        </div>

        <div class="mt-16 pt-12 border-t border-white/5">
          <p class="text-sm text-paper-muted font-body mb-6">¿Quieres crear tu tienda con Jumpseller?</p>
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

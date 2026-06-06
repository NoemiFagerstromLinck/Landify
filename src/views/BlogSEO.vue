<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />

    <article class="pt-40 pb-20 md:pt-48 md:pb-32">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-3xl">
        <router-link to="/#blog" class="inline-flex items-center text-xs tracking-widest text-paper-muted hover:text-paper font-body uppercase border-b border-white/10 hover:border-paper pb-1 transition-all mb-12">
          &larr; Volver al blog
        </router-link>

        <div class="mb-12">
          <span class="text-xs tracking-[0.2em] text-crimson font-body uppercase mb-6 block">SEO</span>
          <h1 class="text-4xl md:text-6xl font-display font-bold text-paper leading-[1.05] mb-6">
            SEO para eCommerce: Cómo vender más con búsqueda orgánica
          </h1>
          <div class="flex items-center gap-4 text-xs text-paper-muted font-body">
            <span>Julio 2025</span>
            <span class="w-px h-4 bg-white/10"></span>
            <span>5 min lectura</span>
          </div>
        </div>

        <div class="aspect-video bg-charcoal border border-white/5 mb-16 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1432889821006-314940be9e83?w=1200&h=675&fit=crop" alt="SEO" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-paper font-body leading-relaxed mb-8">El SEO (Search Engine Optimization) es el conjunto de estrategias y técnicas para mejorar la visibilidad de tu tienda online en los resultados de búsqueda de Google. Para un eCommerce chileno, aparecer en las primeras posiciones puede significar la diferencia entre tener clientes todos los días o pasar desapercibido.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">Lo básico del SEO para tu tienda</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">El SEO se divide en tres grandes áreas: técnica, contenido y autoridad. Las tres son importantes y deben trabajarse en conjunto para obtener resultados.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">SEO técnico</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Tu tienda debe cargar rápido, estar optimizada para móviles y tener una estructura que Google pueda entender fácilmente. Plataformas como Shopify y Jumpseller ya vienen optimizadas, pero hay detalles que marcan la diferencia.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">SEO de contenido</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Las descripciones de tus productos, las categorías y el blog de tu tienda deben contener las palabras clave que tus clientes buscan. No se trata de llenar de palabras clave, sino de crear contenido útil y relevante.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">SEO local</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Para las PyMEs chilenas, el SEO local es especialmente importante. Optimizar tu tienda para búsquedas como "comprar [producto] en Chile" o "tienda online Santiago" puede atraer clientes listos para comprar.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">Resultados a largo plazo</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">El SEO no es una solución mágica ni inmediata. Los resultados toman tiempo (generalmente 3-6 meses), pero una vez que empiezan a llegar, son sostenibles y rentables a largo plazo. A diferencia de la publicidad pagada, el tráfico orgánico es gratis.</p>
        </div>

        <div class="mt-16 pt-12 border-t border-white/5">
          <p class="text-sm text-paper-muted font-body mb-6">¿Quieres que tu tienda aparezca en Google?</p>
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

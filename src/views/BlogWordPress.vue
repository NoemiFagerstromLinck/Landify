<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />

    <article class="pt-40 pb-20 md:pt-48 md:pb-32">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-3xl">
        <router-link to="/#blog" class="inline-flex items-center text-xs tracking-widest text-paper-muted hover:text-paper font-body uppercase border-b border-white/10 hover:border-paper pb-1 transition-all mb-12">
          &larr; Volver al blog
        </router-link>

        <div class="mb-12">
          <span class="text-xs tracking-[0.2em] text-crimson font-body uppercase mb-6 block">WordPress</span>
          <h1 class="text-4xl md:text-6xl font-display font-bold text-paper leading-[1.05] mb-6">
            Landing pages con WordPress: Tu presencia profesional en línea
          </h1>
          <div class="flex items-center gap-4 text-xs text-paper-muted font-body">
            <span>Julio 2025</span>
            <span class="w-px h-4 bg-white/10"></span>
            <span>4 min lectura</span>
          </div>
        </div>

        <div class="aspect-video bg-charcoal border border-white/5 mb-16 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=675&fit=crop" alt="WordPress" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-paper font-body leading-relaxed mb-8">WordPress sigue siendo el rey indiscutido de los sistemas de gestión de contenido (CMS), potenciando más del 40% de todos los sitios web en internet. Para las PyMEs chilenas que buscan una landing page profesional o un sitio corporativo, WordPress ofrece la combinación perfecta de flexibilidad y facilidad de uso.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿Por qué WordPress para tu landing page?</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Una landing page bien diseñada puede ser la diferencia entre un visitante que se va y uno que se convierte en cliente. Con WordPress y herramientas como Elementor Pro, creamos páginas optimizadas para conversión que reflejan profesionalismo y generan confianza.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Fácil de administrar</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Una de las mayores ventajas de WordPress es que tú mismo puedes actualizar tu contenido sin conocimientos técnicos. Cambiar textos, imágenes o agregar páginas nuevas es tan simple como editar un documento.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">SEO optimizado</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">WordPress está construido pensando en SEO. Con plugins como Yoast SEO y una estructura de código limpia, tu sitio tendrá una base sólida para posicionar en Google desde el día uno.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Escalable</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Puedes empezar con una landing page simple y luego agregar un blog, un catálogo de productos, un sistema de reservas o incluso una tienda online con WooCommerce. Todo en la misma plataforma.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿WordPress o desarrollo custom?</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">WordPress es perfecto para sitios de contenido y landing pages. Si necesitas una aplicación web con funcionalidades muy específicas o una experiencia de usuario completamente personalizada, el desarrollo custom con Vue.js o React puede ser la mejor opción. En Landify te asesoramos para elegir la tecnología adecuada para tu proyecto.</p>
        </div>

        <div class="mt-16 pt-12 border-t border-white/5">
          <p class="text-sm text-paper-muted font-body mb-6">¿Necesitas una landing page profesional?</p>
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

<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />

    <article class="pt-40 pb-20 md:pt-48 md:pb-32">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-3xl">
        <router-link to="/#blog" class="inline-flex items-center text-xs tracking-widest text-paper-muted hover:text-paper font-body uppercase border-b border-white/10 hover:border-paper pb-1 transition-all mb-12">
          &larr; Volver al blog
        </router-link>

        <div class="mb-12">
          <span class="text-xs tracking-[0.2em] text-crimson font-body uppercase mb-6 block">Desarrollo Web</span>
          <h1 class="text-4xl md:text-6xl font-display font-bold text-paper leading-[1.05] mb-6">
            Desarrollo web personalizado: Cuando necesitas algo único
          </h1>
          <div class="flex items-center gap-4 text-xs text-paper-muted font-body">
            <span>Julio 2025</span>
            <span class="w-px h-4 bg-white/10"></span>
            <span>5 min lectura</span>
          </div>
        </div>

        <div class="aspect-video bg-charcoal border border-white/5 mb-16 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop" alt="Desarrollo web" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-paper font-body leading-relaxed mb-8">No todos los proyectos web se pueden resolver con una plantilla o un CMS. Cuando tu negocio requiere funcionalidades específicas, integraciones complejas o una experiencia de usuario completamente única, el desarrollo web personalizado es el camino a seguir.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿Cuándo necesitas desarrollo custom?</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">El desarrollo a medida tiene sentido cuando las soluciones predefinidas se quedan cortas. Si necesitas una plataforma con lógica de negocio específica, integraciones con sistemas legacy, o una experiencia de usuario que va más allá de lo que ofrecen las plantillas, el código personalizado es la respuesta.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Tecnologías que usamos</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Trabajamos con Vue.js 3 y React para el frontend, Node.js con Express para el backend, y bases de datos relacionales o NoSQL según lo que necesite tu proyecto. Cada tecnología la elegimos específicamente para resolver tu problema de la mejor manera posible.</p>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Ventajas del desarrollo custom</h3>
          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">Obtienes exactamente lo que necesitas, sin las limitaciones de una plataforma genérica. El rendimiento es superior porque el código está optimizado para tu caso de uso específico. Y no pagas por funcionalidades que no usas.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿WordPress o custom?</h2>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">La respuesta depende de tu proyecto. WordPress es ideal para landing pages y sitios de contenido que necesitas tener online rápidamente. El desarrollo custom es mejor cuando necesitas libertad total, funcionalidades únicas o una aplicación web compleja. En Landify evaluamos tu caso y te recomendamos la mejor opción.</p>
        </div>

        <div class="mt-16 pt-12 border-t border-white/5">
          <p class="text-sm text-paper-muted font-body mb-6">¿Tienes un proyecto único en mente?</p>
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

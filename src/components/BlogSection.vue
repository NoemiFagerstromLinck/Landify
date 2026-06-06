<template>
  <section id="blog" class="py-32 md:py-44">
    <div class="container mx-auto px-8 md:px-12 lg:px-16">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div class="max-w-2xl">
          <span class="text-xs tracking-[0.2em] text-paper-muted font-body uppercase mb-4 block">Blog</span>
          <h2 class="text-3xl md:text-5xl font-display font-bold text-paper leading-[1.1]">
            Artículos y <span class="italic text-crimson">recursos</span>
          </h2>
        </div>
        <p class="text-sm text-paper-muted font-body mt-4 md:mt-0">Guías, comparativas y consejos para tu negocio online</p>
      </div>

      <div class="grid md:grid-cols-3 gap-px bg-white/5">
        <router-link to="/blog/shopify-tienda-online" class="group bg-charcoal p-10 hover:bg-white/5 transition-all duration-500">
          <span class="text-xs tracking-widest text-crimson font-body uppercase mb-4 block">Shopify</span>
          <h3 class="text-xl font-display font-semibold text-paper mb-3 group-hover:text-crimson transition-colors">Guía completa: Tienda online con Shopify</h3>
          <p class="text-sm text-paper-muted font-body leading-relaxed">Todo lo que necesitas saber para crear tu tienda Shopify desde cero en Chile.</p>
        </router-link>

        <router-link to="/blog/jumpseller-chile" class="group bg-charcoal p-10 hover:bg-white/5 transition-all duration-500">
          <span class="text-xs tracking-widest text-crimson font-body uppercase mb-4 block">Jumpseller</span>
          <h3 class="text-xl font-display font-semibold text-paper mb-3 group-hover:text-crimson transition-colors">Jumpseller en Chile: La alternativa local</h3>
          <p class="text-sm text-paper-muted font-body leading-relaxed">Por qué cada vez más PyMEs chilenas eligen Jumpseller para vender online.</p>
        </router-link>

        <router-link to="/blog/shopify-vs-jumpseller" class="group bg-charcoal p-10 hover:bg-white/5 transition-all duration-500">
          <span class="text-xs tracking-widest text-crimson font-body uppercase mb-4 block">Comparativa</span>
          <h3 class="text-xl font-display font-semibold text-paper mb-3 group-hover:text-crimson transition-colors">Shopify vs Jumpseller: ¿Cuál elegir?</h3>
          <p class="text-sm text-paper-muted font-body leading-relaxed">Análisis detallado para ayudarte a decidir la mejor plataforma para tu negocio.</p>
        </router-link>
      </div>

      <div class="mt-12 text-center">
        <router-link to="/blog/que-es-seo" class="text-xs tracking-widest text-paper-muted hover:text-paper font-body uppercase border-b border-white/10 hover:border-paper pb-1 transition-all">
          Más artículos &rarr;
        </router-link>
      </div>
    </div>
  </section>
</template>

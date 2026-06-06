<template>
  <section class="min-h-screen flex items-center relative">
    <div class="container mx-auto px-8 md:px-12 lg:px-16 relative z-10 pt-24">
      <div class="max-w-5xl">
        <div class="mb-4">
          <span class="text-xs tracking-[0.2em] text-paper-muted font-body uppercase">Agencia digital &mdash; Chile</span>
        </div>
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] text-paper mb-8">
          Tu tienda<br>
          <span class="italic text-crimson">online</span><br>
          empieza aquí
        </h1>
        <p class="text-lg md:text-xl text-paper-muted font-body font-light max-w-2xl leading-relaxed mb-12">
          Creamos tiendas eCommerce y sitios web profesionales para PyMEs chilenas. Shopify, Jumpseller, WordPress y desarrollo a medida.
        </p>
        <div class="flex flex-wrap gap-6 items-center">
          <a href="https://wa.me/56952190811" target="_blank" class="inline-block bg-crimson text-paper px-10 py-4 text-sm tracking-widest font-body uppercase hover:bg-white hover:text-ink transition-all duration-300">
            Cotizar proyecto
          </a>
          <router-link to="/#servicios" class="inline-block text-sm tracking-widest text-paper/70 hover:text-paper font-body uppercase border-b border-paper/20 hover:border-paper transition-all pb-1">
            Ver servicios
          </router-link>
        </div>
      </div>
    </div>

    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
      <div class="animate-bounce">
        <svg class="w-5 h-5 text-paper-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

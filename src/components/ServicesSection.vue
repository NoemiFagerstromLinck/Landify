<template>
  <section id="servicios" class="py-32 md:py-44 relative">
    <div class="container mx-auto px-8 md:px-12 lg:px-16">
      <div class="max-w-2xl mb-20">
        <span class="text-xs tracking-[0.2em] text-paper-muted font-body uppercase mb-4 block">Servicios</span>
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-paper leading-[1.05]">
          Construimos tu<br>
          <span class="italic text-crimson">presencia digital</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-px bg-white/5">
        <router-link to="/servicios/shopify" class="group bg-charcoal p-10 md:p-14 hover:bg-white/5 transition-all duration-500">
          <span class="text-2xl font-display text-paper-muted/30 group-hover:text-crimson/30 transition-colors mb-6 block">01</span>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-paper mb-4 group-hover:text-crimson transition-colors">Shopify</h3>
          <p class="text-sm text-paper-muted font-body leading-relaxed mb-8">
            Tiendas escalables para vender internacionalmente. La plataforma más potente del mercado.
          </p>
          <span class="text-xs tracking-widest text-paper-muted group-hover:text-paper font-body uppercase border-b border-white/10 group-hover:border-crimson pb-1 transition-all">
            Ver más
          </span>
        </router-link>

        <router-link to="/servicios/jumpseller" class="group bg-charcoal p-10 md:p-14 hover:bg-white/5 transition-all duration-500">
          <span class="text-2xl font-display text-paper-muted/30 group-hover:text-crimson/30 transition-colors mb-6 block">02</span>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-paper mb-4 group-hover:text-crimson transition-colors">Jumpseller</h3>
          <p class="text-sm text-paper-muted font-body leading-relaxed mb-8">
            eCommerce chileno con Transbank nativo. Simple, local y sin comisiones por venta.
          </p>
          <span class="text-xs tracking-widest text-paper-muted group-hover:text-paper font-body uppercase border-b border-white/10 group-hover:border-crimson pb-1 transition-all">
            Ver más
          </span>
        </router-link>

        <router-link to="/servicios/wordpress" class="group bg-charcoal p-10 md:p-14 hover:bg-white/5 transition-all duration-500">
          <span class="text-2xl font-display text-paper-muted/30 group-hover:text-crimson/30 transition-colors mb-6 block">03</span>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-paper mb-4 group-hover:text-crimson transition-colors">WordPress & Custom</h3>
          <p class="text-sm text-paper-muted font-body leading-relaxed mb-8">
            Landing pages, sitios corporativos y desarrollo web a medida con tecnologías modernas.
          </p>
          <span class="text-xs tracking-widest text-paper-muted group-hover:text-paper font-body uppercase border-b border-white/10 group-hover:border-crimson pb-1 transition-all">
            Ver más
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

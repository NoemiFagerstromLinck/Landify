<!-- Sección de blog con grid de 6 artículos sobre eCommerce y desarrollo web -->
<template>
  <section id="blog" class="py-32 relative overflow-hidden">
    <div class="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
      <div class="text-center mb-20">
        <span class="inline-block px-4 py-2 bg-white/5 text-lavanda rounded-full text-sm font-light border border-lavanda/30 mb-6 tracking-wide backdrop-blur-sm">
          Blog
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
          Aprende sobre
          <span class="block mt-2 bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">
            eCommerce y desarrollo web
          </span>
        </h2>
        <p class="text-base text-gray-400 max-w-2xl mx-auto font-light">
          Guías, tips y comparativas para que tomes las mejores decisiones
        </p>
      </div>

      <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Artículo 1: Shopify -->
        <router-link 
          to="/blog/shopify-tienda-online" 
          class="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop" 
              alt="Shopify" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">Shopify</span>
              <span class="text-gray-500 text-xs">5 min lectura</span>
            </div>
            <h3 class="text-2xl font-light mb-3 text-white group-hover:text-primary transition-colors">
              Shopify: La mejor plataforma para tu tienda online global
            </h3>
            <p class="text-gray-400 text-sm font-light leading-relaxed">
              Descubre por qué Shopify es la elección de millones de emprendedores y cómo puede ayudarte a vender en todo el mundo.
            </p>
            <div class="mt-4 flex items-center text-primary text-sm font-normal">
              Leer más
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Artículo 2: Jumpseller -->
        <router-link 
          to="/blog/jumpseller-chile" 
          class="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-magenta/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-magenta/20"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=450&fit=crop" 
              alt="Jumpseller Chile" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-magenta/20 text-magenta text-xs rounded-full border border-magenta/30">Jumpseller</span>
              <span class="text-gray-500 text-xs">4 min lectura</span>
            </div>
            <h3 class="text-2xl font-light mb-3 text-white group-hover:text-magenta transition-colors">
              Jumpseller: La plataforma chilena perfecta para tu negocio local
            </h3>
            <p class="text-gray-400 text-sm font-light leading-relaxed">
              Conoce por qué Jumpseller es ideal si vendes en Chile, con Transbank nativo y sin comisiones por venta.
            </p>
            <div class="mt-4 flex items-center text-magenta text-sm font-normal">
              Leer más
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Artículo 3: WordPress -->
        <router-link 
          to="/blog/wordpress-landing-pages" 
          class="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-lavanda/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-lavanda/20"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=450&fit=crop" 
              alt="WordPress" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-lavanda/20 text-lavanda text-xs rounded-full border border-lavanda/30">WordPress</span>
              <span class="text-gray-500 text-xs">6 min lectura</span>
            </div>
            <h3 class="text-2xl font-light mb-3 text-white group-hover:text-lavanda transition-colors">
              WordPress: Tu sitio web profesional, fácil y escalable
            </h3>
            <p class="text-gray-400 text-sm font-light leading-relaxed">
              Aprende cómo WordPress puede ayudarte a crear landing pages, blogs y sitios corporativos sin complicaciones.
            </p>
            <div class="mt-4 flex items-center text-lavanda text-sm font-normal">
              Leer más
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Artículo 4: Desarrollo Custom -->
        <router-link 
          to="/blog/desarrollo-web-personalizado" 
          class="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop" 
              alt="Desarrollo Custom" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">Desarrollo</span>
              <span class="text-gray-500 text-xs">7 min lectura</span>
            </div>
            <h3 class="text-2xl font-light mb-3 text-white group-hover:text-primary transition-colors">
              ¿Por qué elegir desarrollo web personalizado?
            </h3>
            <p class="text-gray-400 text-sm font-light leading-relaxed">
              Cuando necesitas funcionalidades únicas, aplicaciones web o bases de datos personalizadas, el código custom es la respuesta.
            </p>
            <div class="mt-4 flex items-center text-primary text-sm font-normal">
              Leer más
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Artículo 5: SEO -->
        <router-link 
          to="/blog/que-es-seo" 
          class="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-magenta/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-magenta/20"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop" 
              alt="SEO" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-magenta/20 text-magenta text-xs rounded-full border border-magenta/30">SEO</span>
              <span class="text-gray-500 text-xs">8 min lectura</span>
            </div>
            <h3 class="text-2xl font-light mb-3 text-white group-hover:text-magenta transition-colors">
              ¿Qué es el SEO y por qué es vital para tu negocio?
            </h3>
            <p class="text-gray-400 text-sm font-light leading-relaxed">
              Aprende cómo el SEO puede hacer que tu sitio web aparezca en Google y atraiga más clientes de forma orgánica.
            </p>
            <div class="mt-4 flex items-center text-magenta text-sm font-normal">
              Leer más
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Artículo 6: Shopify vs Jumpseller -->
        <router-link 
          to="/blog/shopify-vs-jumpseller" 
          class="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-lavanda/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-lavanda/20"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop" 
              alt="Comparativa" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-lavanda/20 text-lavanda text-xs rounded-full border border-lavanda/30">Comparativa</span>
              <span class="text-gray-500 text-xs">6 min lectura</span>
            </div>
            <h3 class="text-2xl font-light mb-3 text-white group-hover:text-lavanda transition-colors">
              Shopify vs Jumpseller: ¿Cuál es mejor para tu negocio?
            </h3>
            <p class="text-gray-400 text-sm font-light leading-relaxed">
              Comparamos ambas plataformas en costos, funcionalidades y casos de uso para ayudarte a elegir.
            </p>
            <div class="mt-4 flex items-center text-lavanda text-sm font-normal">
              Leer más
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>

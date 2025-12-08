<!-- Grid de servicios principales (Shopify, Jumpseller, WordPress/Custom) -->
<template>
  <section class="py-32 relative overflow-hidden">
    <div class="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
      <div class="text-center mb-20">
        <span class="inline-block px-4 py-2 bg-white/5 text-lavanda rounded-full text-sm font-light border border-lavanda/30 mb-6 tracking-wide backdrop-blur-sm">
          Servicios
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
          Todo lo que necesitas para
          <span class="block mt-2 bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">
            estar online
          </span>
        </h2>
        <p class="text-base text-gray-400 max-w-2xl mx-auto font-light">
          Tu presencia digital profesional, fácil de compartir y mostrar
        </p>
      </div>

      <div class="max-w-6xl mx-auto space-y-8">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Shopify -->
          <router-link to="/servicios/shopify" class="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 block">
            <div class="aspect-[1920/940] overflow-hidden">
              <img src="../assets/img/Shopify.png" alt="Shopify" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm">
              <h3 class="text-2xl font-light mb-4 group-hover:text-accent transition-colors">Tiendas Shopify</h3>
              <p class="text-gray-400 leading-relaxed font-light text-sm">
                Tu tienda online profesional, lista para mostrar y compartir con tus clientes.
              </p>
            </div>
          </router-link>

          <!-- Jumpseller -->
          <router-link to="/servicios/jumpseller" class="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 block">
            <div class="aspect-[1920/940] overflow-hidden">
              <img src="../assets/img/Jumpseller.png" alt="Jumpseller" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm">
              <h3 class="text-2xl font-light mb-4 group-hover:text-accent transition-colors">Jumpseller</h3>
              <p class="text-gray-400 leading-relaxed font-light text-sm">
                Presencia online perfecta para el mercado latinoamericano, fácil de gestionar.
              </p>
            </div>
          </router-link>
        </div>

        <div class="flex justify-center">
          <div class="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 w-full md:w-2/3 lg:w-1/2">
            <div class="aspect-[1920/940] overflow-hidden">
              <img src="../assets/img/Codigo.png" alt="Landings WordPress / Dev Custom" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm">
              <h3 class="text-2xl font-light mb-4 group-hover:text-accent transition-colors">Landings WordPress / Dev Custom</h3>
              <p class="text-gray-400 leading-relaxed font-light text-sm">
                Sitios web únicos y profesionales, perfectos para mostrar tus servicios o productos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>

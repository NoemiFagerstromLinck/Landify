<template>
  <footer class="bg-charcoal border-t border-white/5">
    <div class="container mx-auto px-8 md:px-12 lg:px-16 py-20">
      <div class="grid md:grid-cols-4 gap-16 mb-16">
        <div class="space-y-6">
          <h3 class="text-lg font-display font-bold text-paper">
            Landify<span class="text-crimson">.</span>
          </h3>
          <p class="text-sm text-paper-muted font-body leading-relaxed">
            Agencia digital chilena. Creamos tiendas online y sitios web para PyMEs.
          </p>
          <a href="https://www.instagram.com/landify.cl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-paper-muted hover:text-crimson transition-colors font-body">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
            @landify.cl
          </a>
        </div>

        <div>
          <h4 class="text-xs tracking-widest text-paper-muted font-body uppercase mb-6">Navegación</h4>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-sm text-paper/70 hover:text-crimson transition-colors font-body">Inicio</router-link></li>
            <li><a href="/#blog" class="text-sm text-paper/70 hover:text-crimson transition-colors font-body">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs tracking-widest text-paper-muted font-body uppercase mb-6">Servicios</h4>
          <ul class="space-y-3">
            <li><router-link to="/servicios/shopify" class="text-sm text-paper/70 hover:text-crimson transition-colors font-body">Shopify</router-link></li>
            <li><router-link to="/servicios/jumpseller" class="text-sm text-paper/70 hover:text-crimson transition-colors font-body">Jumpseller</router-link></li>
            <li><router-link to="/servicios/wordpress" class="text-sm text-paper/70 hover:text-crimson transition-colors font-body">WordPress & Custom</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs tracking-widest text-paper-muted font-body uppercase mb-6">Contacto</h4>
          <ul class="space-y-3">
            <li><a href="https://wa.me/56952190811" target="_blank" class="text-sm text-paper/70 hover:text-crimson transition-colors font-body">+56 9 5219 0811</a></li>
            <li><a href="https://www.instagram.com/landify.cl" target="_blank" class="text-sm text-paper/70 hover:text-crimson transition-colors font-body">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-paper-muted font-body">&copy; {{ currentYear }} Landify. Chile.</p>
        <div class="flex gap-8 text-xs text-paper-muted font-body">
          <span>Hecho con dedicación en Chile</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

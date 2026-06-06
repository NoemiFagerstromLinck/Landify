<template>
  <header class="fixed top-0 left-0 w-full z-50 mix-blend-difference">
    <nav class="container mx-auto px-8 md:px-12 lg:px-16 py-6">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center">
          <span class="text-xl font-body font-medium tracking-wider text-white">
            LANDIFY<span class="text-white/50">.</span>
          </span>
        </router-link>

        <div class="hidden md:flex items-center space-x-16">
          <div class="relative group">
            <button class="text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300 font-body uppercase">
              Servicios
            </button>
            <div class="absolute left-1/2 -translate-x-1/2 mt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="bg-[#141414] border border-white/10 rounded-sm">
                <router-link to="/servicios/shopify" class="block px-6 py-4 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors font-body tracking-wide">Shopify</router-link>
                <router-link to="/servicios/jumpseller" class="block px-6 py-4 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors font-body tracking-wide">Jumpseller</router-link>
                <router-link to="/servicios/wordpress" class="block px-6 py-4 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors font-body tracking-wide">WordPress & Custom</router-link>
              </div>
            </div>
          </div>
          <router-link to="/#blog" class="text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300 font-body uppercase">Blog</router-link>
          <a href="https://wa.me/56952190811" target="_blank" class="text-sm tracking-widest text-white hover:text-crimson transition-colors duration-300 font-body uppercase border border-white/20 hover:border-crimson px-6 py-3">Contacto</a>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white">
          <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden mt-6 pb-6 space-y-6 border-t border-white/10 pt-6">
        <p class="text-xs tracking-widest text-white/40 font-body uppercase px-4">Servicios</p>
        <router-link @click="mobileMenuOpen = false" to="/servicios/shopify" class="block px-4 py-2 text-sm text-white/80 hover:text-white font-body tracking-wide">Shopify</router-link>
        <router-link @click="mobileMenuOpen = false" to="/servicios/jumpseller" class="block px-4 py-2 text-sm text-white/80 hover:text-white font-body tracking-wide">Jumpseller</router-link>
        <router-link @click="mobileMenuOpen = false" to="/servicios/wordpress" class="block px-4 py-2 text-sm text-white/80 hover:text-white font-body tracking-wide">WordPress & Custom</router-link>
        <div class="border-t border-white/10 pt-4">
          <router-link @click="mobileMenuOpen = false" to="/#blog" class="block px-4 py-2 text-sm text-white/80 hover:text-white font-body tracking-wide">Blog</router-link>
          <a href="https://wa.me/56952190811" target="_blank" class="block px-4 py-2 mt-2 text-sm text-crimson font-body tracking-wide">Contacto</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

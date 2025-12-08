<!-- Navegación principal fija con dropdown de servicios -->
<template>
  <header class="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl text-white z-50 border-b border-white/5">
    <nav class="container mx-auto px-8 md:px-12 lg:px-16 py-8">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center">
          <span class="text-3xl font-light tracking-tight">
            <span class="text-white">LANDIFY</span>
            <span class="text-primary">.</span>
          </span>
        </router-link>

        <div class="hidden md:flex items-center space-x-12">
          <div class="relative group">
            <button class="flex items-center text-base text-white/80 hover:text-white transition-colors duration-300 font-light">
              Servicios
              <svg class="w-4 h-4 ml-2 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-6 w-72 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
              <router-link to="/servicios/shopify" class="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-white/5 transition-all font-light">Tiendas Shopify</router-link>
              <router-link to="/servicios/jumpseller" class="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-white/5 transition-all font-light">Tiendas Jumpseller</router-link>
              <router-link to="/servicios/wordpress" class="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-white/5 transition-all font-light">WordPress & Código Custom</router-link>
            </div>
          </div>
          <router-link to="/#blog" class="text-base text-white/80 hover:text-white transition-colors duration-300 font-light">Blog</router-link>
        </div>

        <div class="flex items-center space-x-4">
          <button class="hidden md:block bg-gradient-to-r from-primary to-magenta hover:from-magenta hover:to-primary text-white px-8 py-4 rounded-full font-normal text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            Contáctanos
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white">
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-6 pb-6 space-y-4 border-t border-white/10 pt-6">
        <div class="space-y-2">
          <p class="text-sm text-white/60 font-light px-4">SERVICIOS</p>
          <router-link @click="mobileMenuOpen = false" to="/servicios/shopify" class="block px-4 py-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all font-light">Tiendas Shopify</router-link>
          <router-link @click="mobileMenuOpen = false" to="/servicios/jumpseller" class="block px-4 py-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all font-light">Tiendas Jumpseller</router-link>
          <router-link @click="mobileMenuOpen = false" to="/servicios/wordpress" class="block px-4 py-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all font-light">WordPress & Código Custom</router-link>
        </div>
        <router-link @click="mobileMenuOpen = false" to="/#blog" class="block px-4 py-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all font-light">Blog</router-link>
        <button class="w-full bg-gradient-to-r from-primary to-magenta text-white px-8 py-4 rounded-full font-normal text-base transition-all duration-300">
          Contáctanos
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
</style>

<!-- Sección de estadísticas con círculos animados y efectos glassmorphism -->
<template>
  <section class="py-12 md:py-20 relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="relative">
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-magenta to-lavanda opacity-30 -translate-y-1/2 hidden md:block"></div>
          
          <div class="relative grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
            <div class="flex flex-col items-center">
                <div class="group relative">
                  <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-magenta opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-magenta to-transparent animate-spin-slow"></div>
                  <div class="relative w-40 h-40 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <div class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">
                      +<span ref="stat1">0</span>
                    </div>
                    <svg class="w-4 h-4 md:w-6 md:h-6 text-primary mt-1 md:mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              <div class="text-center mt-3 md:mt-6">
                <div class="text-sm md:text-lg text-white font-semibold">Proyectos</div>
                <div class="text-xs md:text-sm text-gray-400">Digitales</div>
              </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="group relative">
                  <div class="absolute inset-0 rounded-full bg-gradient-to-r from-magenta to-lavanda opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-magenta via-lavanda to-transparent animate-spin-slow" style="animation-delay: -2s;"></div>
                  <div class="relative w-40 h-40 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <div class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">
                      +<span ref="stat2">0</span>
                    </div>
                    <svg class="w-4 h-4 md:w-6 md:h-6 text-magenta mt-1 md:mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              <div class="text-center mt-3 md:mt-6">
                <div class="text-sm md:text-lg text-white font-semibold">Industrias</div>
                <div class="text-xs md:text-sm text-gray-400">Atendidas</div>
              </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="group relative">
                  <div class="absolute inset-0 rounded-full bg-gradient-to-r from-lavanda to-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-lavanda via-primary to-transparent animate-spin-slow" style="animation-delay: -4s;"></div>
                  <div class="relative w-40 h-40 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <div class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent">
                      +<span ref="stat3">0</span>
                    </div>
                    <svg class="w-4 h-4 md:w-6 md:h-6 text-lavanda mt-1 md:mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
              <div class="text-center mt-3 md:mt-6">
                <div class="text-sm md:text-lg text-white font-semibold">Años de</div>
                <div class="text-xs md:text-sm text-gray-400">Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)

const animateValue = (element, start, end, duration) => {
  if (!element) return
  
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    element.textContent = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(stat1.value, 0, 15, 2000)
        animateValue(stat2.value, 0, 10, 2000)
        animateValue(stat3.value, 0, 5, 2000)
        observer.disconnect()
      }
    })
  })
  
  if (stat1.value) {
    observer.observe(stat1.value)
  }
})
</script>

<style scoped>
</style>

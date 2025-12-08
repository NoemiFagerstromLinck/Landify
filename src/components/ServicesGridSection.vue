<template>
  <section class="py-20 md:py-32 relative">
    <div class="w-full overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-hidden py-2">
      <div 
        ref="carousel"
        class="flex gap-6 md:gap-10 px-4 select-none"
        :class="{ 'md:animate-carousel': !isDragging && !isHovering }"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="handleMouseLeave"
        @mouseenter="isHovering = true"
        @dragstart.prevent
      >
        <ServiceCard
          v-for="(service, index) in [...services, ...services]"
          :key="index"
          :icon="service.icon"
          :title="service.name"
          :subtitle="service.description"
          class="flex-shrink-0 w-64 md:w-[380px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from './ServiceCard.vue'

const carousel = ref(null)
const isDragging = ref(false)
const isHovering = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

const services = [
  { name: 'Marketing Digital', icon: 'marketing', description: 'Estrategias para aumentar tu presencia online y visibilidad.' },
  { name: 'SEO & Posicionamiento', icon: 'seo', description: 'Haz que te encuentren fácilmente en Google y otros buscadores.' },
  { name: 'Publicidad Online', icon: 'publicidad', description: 'Campañas en Google, Meta y más para dar a conocer tu marca.' },
  { name: 'Branding & Identidad', icon: 'branding', description: 'Diseño visual profesional para destacar y ser recordado.' },
  { name: 'Estrategia Web', icon: 'estrategia', description: 'Planificación y consultoría para tu presencia digital.' },
  { name: 'Analítica & Métricas', icon: 'analitica', description: 'Medición de resultados y mejora continua de tu presencia.' }
]

const startDrag = (e) => {
  if (window.innerWidth < 768) return // Deshabilitar drag en mobile, usar scroll nativo
  isDragging.value = true
  const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
  startX.value = pageX - carousel.value.offsetLeft
  scrollLeft.value = carousel.value.scrollLeft
}

const onDrag = (e) => {
  if (!isDragging.value || window.innerWidth < 768) return
  e.preventDefault()
  const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
  const x = pageX - carousel.value.offsetLeft
  const walk = (x - startX.value) * 2
  carousel.value.scrollLeft = scrollLeft.value - walk
}

const endDrag = () => {
  isDragging.value = false
}

const handleMouseLeave = () => {
  isDragging.value = false
  isHovering.value = false
}
</script>

<style scoped>
.select-none {
  user-select: none;
  -webkit-user-drag: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes carousel {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-carousel {
  animation: carousel 40s linear infinite;
}

.bg-glass {
  background: rgba(30, 22, 92, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(195, 184, 255, 0.12);
}
</style>

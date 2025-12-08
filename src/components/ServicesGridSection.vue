<template>
  <section class="py-32 relative overflow-hidden">
    <!-- Carrusel infinito a ancho completo -->
    <div class="relative w-full px-4">
      <div class="flex animate-carousel gap-10">
        <!-- Primera copia de las tarjetas -->
        <ServiceCard
          v-for="(service, index) in [...services, ...services]"
          :key="index"
          :icon="service.icon"
          :title="service.name"
          :subtitle="service.description"
          class="flex-shrink-0 w-[380px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue';

const services = [
  { name: 'Marketing Digital', icon: 'marketing', description: 'Estrategias para aumentar tu presencia online y visibilidad.' },
  { name: 'SEO & Posicionamiento', icon: 'seo', description: 'Haz que te encuentren fácilmente en Google y otros buscadores.' },
  { name: 'Publicidad Online', icon: 'publicidad', description: 'Campañas en Google, Meta y más para dar a conocer tu marca.' },
  { name: 'Branding & Identidad', icon: 'branding', description: 'Diseño visual profesional para destacar y ser recordado.' },
  { name: 'Estrategia Web', icon: 'estrategia', description: 'Planificación y consultoría para tu presencia digital.' },
  { name: 'Analítica & Métricas', icon: 'analitica', description: 'Medición de resultados y mejora continua de tu presencia.' }
]
</script>

<style scoped>
/* Glassmorphism effect for cards */
.bg-glass {
  background: rgba(30, 22, 92, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(195, 184, 255, 0.12);
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
  animation: carousel 25s linear infinite;
}

.animate-carousel:hover {
  animation-play-state: paused;
}
</style>

<!-- Tarjeta individual de servicio con efecto glassmorphism y hover -->
<template>
  <div class="service-card relative rounded-3xl p-8 shadow-xl flex flex-col justify-end min-h-[260px] group transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div class="absolute left-4 top-4 w-32 h-32 opacity-15 pointer-events-none">
      <div v-html="icons[icon]" class="w-full h-full"></div>
    </div>
    <div class="absolute top-8 right-8 z-20">
      <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-white bg-transparent">
        <div v-html="icons[icon]" class="w-7 h-7"></div>
      </div>
    </div>
    <div class="relative z-10 mt-24">
      <h3 class="text-xl font-light mb-2 tracking-wide text-white">
        {{ title }}
      </h3>
      <p class="text-gray-300 text-sm font-light mb-2 leading-relaxed">{{ subtitle }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  icon: String,
  title: String,
  subtitle: String
});
const icons = {
  marketing: `<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"20\" r=\"16\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/><path d=\"M20 12v8l6 4\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>`,
  seo: `<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"8\" width=\"24\" height=\"24\" rx=\"6\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/><path d=\"M16 24l8-8\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>`,
  publicidad: `<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,6 34,34 6,34\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/></svg>`,
  branding: `<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"20\" cy=\"20\" rx=\"14\" ry=\"10\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/></svg>`,
  estrategia: `<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"20\" height=\"20\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/></svg>`,
  analitica: `<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 30V20M18 30V14M26 30V24M34 30V18\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>`
}
</script>

<style scoped>
.service-card {
  background: rgba(159, 140, 255, 0.15);
  border: 1.5px solid rgba(159, 140, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(159, 140, 255, 0.1);
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  overflow: hidden;
}
</style>

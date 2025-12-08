<template>
  <div class="faq-item bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-gray-900/60 border border-gray-800/50">
    <button @click="open = !open" class="w-full text-left flex items-center justify-between focus:outline-none group">
      <span class="text-lg md:text-xl font-normal text-white group-hover:text-lavanda transition-colors">{{ question }}</span>
      <svg :class="{'rotate-180': open}" class="w-5 h-5 text-lavanda transition-transform duration-300 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <transition name="faq-expand">
      <div v-if="open" class="mt-4 text-gray-300 text-base md:text-lg font-light leading-relaxed">
        {{ answer }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  question: String,
  answer: String
});
const open = ref(false);
</script>

<style scoped>
.faq-expand-enter-active, .faq-expand-leave-active {
  transition: all 0.3s ease;
}
.faq-expand-enter-from, .faq-expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.faq-expand-enter-to, .faq-expand-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

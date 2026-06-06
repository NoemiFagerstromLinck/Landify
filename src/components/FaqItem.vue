<template>
  <div class="py-6">
    <button
      @click="isOpen = !isOpen"
      class="w-full flex items-center justify-between text-left group"
    >
      <span class="text-base md:text-lg font-display font-semibold text-paper group-hover:text-crimson transition-colors pr-8">{{ question }}</span>
      <span class="flex-shrink-0 text-paper-muted transition-transform duration-300" :class="{ 'rotate-45': isOpen }">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
    <div
      v-show="isOpen"
      class="mt-4 text-sm text-paper-muted font-body leading-relaxed max-w-2xl"
    >
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true }
})

const isOpen = ref(false)
</script>

<template>
  <router-link :to="to" class="group block bg-charcoal border border-white/5 hover:border-crimson/30 transition-all duration-500 p-10">
    <span class="text-xs tracking-widest text-crimson font-body uppercase mb-4 block">{{ tag }}</span>
    <h3 class="text-2xl font-display font-bold text-paper mb-3 group-hover:text-crimson transition-colors">{{ title }}</h3>
    <p class="text-sm text-paper-muted font-body leading-relaxed mb-8">{{ description }}</p>
    <span class="text-xs tracking-widest text-paper-muted group-hover:text-paper font-body uppercase border-b border-white/10 group-hover:border-crimson pb-1 transition-all">
      Ver más &rarr;
    </span>
  </router-link>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  tag: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

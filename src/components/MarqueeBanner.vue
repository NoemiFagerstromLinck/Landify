<template>
  <div class="py-16 md:py-20 border-t border-b border-white/5 overflow-hidden">
    <div class="flex whitespace-nowrap animate-marquee">
      <div class="flex items-center gap-16 mx-8">
        <span v-for="i in 6" :key="i" class="text-sm tracking-widest text-paper-muted font-body uppercase">Shopify</span>
        <span class="w-px h-6 bg-white/10"></span>
        <span v-for="i in 6" :key="i+6" class="text-sm tracking-widest text-paper-muted font-body uppercase">Jumpseller</span>
        <span class="w-px h-6 bg-white/10"></span>
        <span v-for="i in 6" :key="i+12" class="text-sm tracking-widest text-paper-muted font-body uppercase">WordPress</span>
        <span class="w-px h-6 bg-white/10"></span>
        <span v-for="i in 6" :key="i+18" class="text-sm tracking-widest text-paper-muted font-body uppercase">Vue.js</span>
        <span class="w-px h-6 bg-white/10"></span>
        <span v-for="i in 6" :key="i+24" class="text-sm tracking-widest text-paper-muted font-body uppercase">React</span>
        <span class="w-px h-6 bg-white/10"></span>
        <span v-for="i in 6" :key="i+30" class="text-sm tracking-widest text-paper-muted font-body uppercase">Node.js</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
</style>

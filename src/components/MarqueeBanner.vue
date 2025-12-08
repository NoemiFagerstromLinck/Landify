<template>
  <div class="bg-white py-4 overflow-hidden relative">
    <div class="marquee-container">
      <div class="marquee-content">
        <div v-for="i in 4" :key="i" class="flex items-center space-x-12 text-primary font-bold text-base whitespace-nowrap uppercase tracking-widest">
          <span class="flex items-center">
            MAS QUE SITIOS WEB, CREAMOS NEGOCIOS ONLINE 
          </span>
          <span class="flex items-center">
            LANZAMIENTO EN DIAS, NO MESES
          </span>
          <span class="flex items-center">
            DISEÑO PREMIUM, RESULTADOS REALES
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.marquee-container {
  display: flex;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

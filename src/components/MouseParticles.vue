<template>
  <div class="fixed inset-0 pointer-events-none z-50">
    <svg v-for="p in particles" :key="p.id" :style="{
      left: p.x + 'px',
      top: p.y + 'px',
      position: 'absolute',
      transform: `scale(${p.scale})`,
      opacity: p.opacity,
      transition: 'opacity 0.3s',
    }" :width="p.size" :height="p.size" :viewBox="`0 0 ${p.size} ${p.size}`">
      <template v-if="p.shape === 'circle'">
        <circle :cx="p.size/2" :cy="p.size/2" :r="p.size/2" fill="#fff" />
      </template>
      <template v-else-if="p.shape === 'square'">
        <rect x="0" y="0" :width="p.size" :height="p.size" fill="#fff" />
      </template>
      <template v-else-if="p.shape === 'triangle'">
        <polygon :points="`0,${p.size} ${p.size/2},0 ${p.size},${p.size}`" fill="#fff" />
      </template>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const particles = ref([])
let particleId = 0
const shapes = ['circle', 'square', 'triangle']
let animationFrame
const MAX_PARTICLES = 80 // máximo de partículas activas

function spawnParticleBurst(x, y) {
  const numParticles = 2 + Math.floor(Math.random() * 2) // 2-3 partículas por ráfaga
  for (let i = 0; i < numParticles; i++) {
    if (particles.value.length >= MAX_PARTICLES) break
    const size = Math.random() * 6 + 4
    const shape = shapes[Math.floor(Math.random() * shapes.length)]
    const opacity = 0.18 + Math.random() * 0.22
    const scale = 0.7 + Math.random() * 0.3
    // Dirección y velocidad aleatoria
    const angle = Math.random() * 2 * Math.PI
    const speed = 0.7 + Math.random() * 1.2
    const vx = Math.cos(angle) * speed
    const vy = Math.sin(angle) * speed - 1.2 // tendencia a subir
    const id = particleId++
    // Posición inicial en círculo más pequeño
    const radius = 3 + Math.random() * 7 // radio reducido: 3-10px
    const offsetX = Math.cos(angle) * radius
    const offsetY = Math.sin(angle) * radius
    particles.value.push({
      id,
      x: x + offsetX,
      y: y + offsetY,
      vx,
      vy,
      size,
      shape,
      opacity,
      scale,
      life: 0,
      maxLife: 60 + Math.random() * 30
    })
  }
}

function animateParticles() {
  for (const p of particles.value) {
    p.x += p.vx
    p.y += p.vy
    p.life++
    p.opacity = Math.max(0, (1 - p.life / p.maxLife) * (0.18 + Math.random() * 0.22))
  }
  particles.value = particles.value.filter(p => p.life < p.maxLife && p.opacity > 0.01)
  animationFrame = requestAnimationFrame(animateParticles)
}

function handleMouse(e) {
  spawnParticleBurst(e.clientX, e.clientY)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouse)
  animationFrame = requestAnimationFrame(animateParticles)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouse)
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
</style>

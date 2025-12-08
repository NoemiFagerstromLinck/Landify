<!-- Sección hero principal con fondo parallax, partículas flotantes y contador animado -->
<template>
  <section class="relative text-white pt-40 pb-32 min-h-screen flex items-center overflow-hidden">
    <div class="fixed inset-0" style="z-index: -10;">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark"></div>
      <div class="grid-background"></div>
      
      <div class="particles-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <!-- Floating Orbs -->
      <div class="absolute inset-0 opacity-30">
        <div class="floating-orb orb-1 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="floating-orb orb-2 w-80 h-80 bg-magenta rounded-full blur-3xl"></div>
        <div class="floating-orb orb-3 w-72 h-72 bg-lavanda rounded-full blur-3xl"></div>
      </div>
    </div>

    <div class="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
      <div class="max-w-6xl mx-auto text-center space-y-8">
        <!-- Badge -->
        <div class="inline-block animate-fade-in-down">
          <span class="px-6 py-3 bg-white/5 text-white rounded-full text-sm font-light border border-white/20 backdrop-blur-sm inline-flex items-center gap-2">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Tu Agencia de Presencia Digital
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.2] animate-fade-in-up">
          <span class="text-white">Llevamos tu marca </span>
          <span class="bg-gradient-to-r from-primary via-magenta to-lavanda bg-clip-text text-transparent animate-gradient">
            al mundo digital
          </span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto font-light animate-fade-in">
          Creamos tu <span class="text-primary font-normal">sitio web</span> profesional y fácil de mostrar.
          <span class="block mt-2 text-base">Shopify · Jumpseller · WordPress · Código Custom</span>
        </p>


        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-300">
          <button class="group relative bg-gradient-to-r from-primary to-magenta text-white px-10 py-5 rounded-full text-base font-normal transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 overflow-hidden">
            <span class="relative z-10 flex items-center gap-2">
              Iniciar Proyecto
              <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-magenta to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button class="group px-10 py-5 rounded-full text-base font-normal border border-primary/30 hover:border-primary transition-all duration-300 hover:bg-primary/10 backdrop-blur-sm flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            VER PROYECTOS
          </button>
        </div>


        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in animation-delay-500">
          <div class="stat-item">
            <div class="text-5xl md:text-6xl font-light bg-gradient-to-r from-primary to-magenta bg-clip-text text-transparent counter" data-target="15">0</div>
            <div class="text-sm md:text-base text-gray-400 mt-2 font-light">Proyectos Digitales</div>
          </div>
          <div class="stat-item">
            <div class="text-5xl md:text-6xl font-light bg-gradient-to-r from-magenta to-lavanda bg-clip-text text-transparent counter" data-target="10">0</div>
            <div class="text-sm md:text-base text-gray-400 mt-2 font-light">Industrias Atendidas</div>
          </div>
          <div class="stat-item">
            <div class="text-5xl md:text-6xl font-light bg-gradient-to-r from-lavanda to-primary bg-clip-text text-transparent counter" data-target="5">0</div>
            <div class="text-sm md:text-base text-gray-400 mt-2 font-light">Años de Experiencia</div>
          </div>
          <div class="stat-item">
            <div class="text-5xl md:text-6xl font-light bg-gradient-to-r from-primary to-magenta bg-clip-text text-transparent counter" data-target="98">0</div>
            <div class="text-sm md:text-base text-gray-400 mt-2 font-light">% Satisfacción</div>
          </div>
        </div>


        <div class="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in animation-delay-700">
          <div class="tech-badge">SHOPIFY</div>
          <div class="tech-badge">JUMPSELLER</div>
          <div class="tech-badge">WORDPRESS</div>
          <div class="tech-badge">VUE.JS</div>
          <div class="tech-badge">REACT</div>
          <div class="tech-badge">NODE.JS</div>
        </div>
      </div>
    </div>


    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Counter Animation con Intersection Observer
  const counters = document.querySelectorAll('.counter');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  };

  // Usar Intersection Observer para animar cuando sea visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});

const heroIcons = [
  `<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 28L24 28L28 8L4 8L8 28Z\" fill=\"#fff\"/><text x=\"16\" y=\"22\" text-anchor=\"middle\" font-size=\"8\" fill=\"#fff\">S</text></svg>`,
  `<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"13\" fill=\"#fff\"/><text x=\"16\" y=\"20\" text-anchor=\"middle\" font-size=\"8\" fill=\"#fff\">J</text></svg>`,
  `<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"6\" width=\"20\" height=\"20\" rx=\"5\" fill=\"#fff\"/><text x=\"16\" y=\"20\" text-anchor=\"middle\" font-size=\"8\" fill=\"#fff\">WP</text></svg>`,
  `<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"16,5 28,28 4,28\" fill=\"#fff\"/></svg>`
]
</script>

<style scoped>
/* Particles */
.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #6B4EFF;
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 15s infinite;
  box-shadow: 0 0 10px #6B4EFF;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; animation-delay: 2s; }
.particle:nth-child(3) { left: 30%; animation-delay: 4s; }
.particle:nth-child(4) { left: 40%; animation-delay: 1s; }
.particle:nth-child(5) { left: 50%; animation-delay: 3s; }
.particle:nth-child(6) { left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; animation-delay: 2.5s; }
.particle:nth-child(8) { left: 80%; animation-delay: 4.5s; }
.particle:nth-child(9) { left: 90%; animation-delay: 1.5s; }
.particle:nth-child(10) { left: 15%; animation-delay: 3.5s; }
.particle:nth-child(11) { left: 25%; animation-delay: 0.5s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(12) { left: 35%; animation-delay: 2.8s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(13) { left: 45%; animation-delay: 4.2s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(14) { left: 55%; animation-delay: 1.8s; background: #E46BFF; box-shadow: 0 0 10px #E46BFF; }
.particle:nth-child(15) { left: 65%; animation-delay: 3.2s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(16) { left: 75%; animation-delay: 5.5s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(17) { left: 85%; animation-delay: 2.2s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(18) { left: 95%; animation-delay: 4.8s; background: #C3B8FF; box-shadow: 0 0 10px #C3B8FF; }
.particle:nth-child(19) { left: 12%; animation-delay: 1.2s; width: 6px; height: 6px; }
.particle:nth-child(20) { left: 88%; animation-delay: 3.8s; width: 6px; height: 6px; }

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

/* Typing Animation */
.typing-text {
  overflow: hidden;
  border-right: 3px solid #6B4EFF;
  white-space: nowrap;
  animation: typing 2s steps(11) 1s forwards, blink 0.75s step-end infinite;
  width: 0;
  display: inline-block;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #6B4EFF;
  }
}

/* Grid Background */
.grid-background {
  background-image: 
    linear-gradient(rgba(107, 78, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(107, 78, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Floating Orbs */
.floating-orb {
  position: absolute;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  top: 60%;
  right: 15%;
  animation-delay: -7s;
}

.orb-3 {
  bottom: 15%;
  left: 20%;
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 30px) scale(0.9);
  }
}

/* Gradient Animation */
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Fade In Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: both;
}

.animation-delay-500 {
  animation-delay: 0.5s;
  animation-fill-mode: both;
}

.animation-delay-700 {
  animation-delay: 0.7s;
  animation-fill-mode: both;
}

/* Stats */
.stat-item {
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

/* Tech Badges */
.tech-badge {
  padding: 12px 24px;
  background: rgba(107, 78, 255, 0.1);
  border: 1px solid rgba(107, 78, 255, 0.3);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  color: #C3B8FF;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: default;
}

.tech-badge:hover {
  background: rgba(107, 78, 255, 0.2);
  border-color: #6B4EFF;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(107, 78, 255, 0.3);
}
</style>

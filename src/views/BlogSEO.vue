<!-- Artículo educativo sobre SEO: qué es, por qué es importante y cómo trabajarlo -->
<template>
  <div class="min-h-screen relative overflow-hidden">
    <MouseParticles />
    <div class="fixed inset-0" style="z-index: -10;">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark"></div>
      <div class="grid-background"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="floating-orb orb-1 w-96 h-96 bg-magenta rounded-full blur-3xl"></div>
        <div class="floating-orb orb-2 w-80 h-80 bg-lavanda rounded-full blur-3xl"></div>
      </div>
    </div>

    <HeaderNav />
    
    <section class="relative pt-40 pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <router-link to="/#blog" class="inline-flex items-center text-magenta hover:text-primary transition-colors mb-8 text-sm">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al blog
        </router-link>
        
        <div class="mb-8">
          <span class="px-4 py-2 bg-magenta/20 text-magenta text-sm rounded-full border border-magenta/30 inline-block mb-6">SEO</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            ¿Qué es el SEO y <span class="bg-gradient-to-r from-magenta to-lavanda bg-clip-text text-transparent">por qué es vital para tu negocio?</span>
          </h1>
          <div class="flex items-center gap-4 text-gray-400 text-sm">
            <span>📅 Diciembre 2024</span>
            <span>•</span>
            <span>⏱️ 8 min lectura</span>
          </div>
        </div>

        <div class="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=675&fit=crop" 
            alt="SEO Strategy" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <article class="prose prose-invert prose-lg max-w-none">
          <div class="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            
            <h2 class="text-3xl font-light mb-6 text-white">¿Qué es el SEO?</h2>
            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              <strong>SEO (Search Engine Optimization)</strong> es el conjunto de técnicas y estrategias para mejorar la visibilidad de tu sitio web en los resultados de búsqueda de Google y otros buscadores. El objetivo es aparecer en las primeras posiciones cuando alguien busca términos relacionados con tu negocio.
            </p>

            <div class="bg-magenta/10 border border-magenta/30 rounded-2xl p-8 my-8">
              <h3 class="text-2xl font-light mb-4 text-white">🎯 El dato clave</h3>
              <p class="text-gray-300 leading-relaxed font-light text-lg">
                El <strong>75% de los usuarios nunca pasa de la primera página</strong> de resultados de Google. Si tu sitio no está en el top 10, prácticamente eres invisible. Y los primeros 3 resultados se llevan el 60% de todos los clics.
              </p>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Por qué el SEO es vital?</h2>
            
            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">1. Tráfico orgánico de calidad</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Las personas que te encuentran en Google ya están buscando lo que ofreces. No es publicidad intrusiva: son clientes potenciales con intención de compra. El SEO atrae visitantes calificados sin pagar por cada clic.
            </p>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">2. Retorno de inversión a largo plazo</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              A diferencia de la publicidad pagada (Google Ads, Facebook Ads), el SEO sigue funcionando aunque dejes de invertir. Una vez que rankeas bien, el tráfico orgánico es "gratis" y sostenible en el tiempo.
            </p>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">3. Credibilidad y confianza</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Los usuarios confían más en los resultados orgánicos que en los anuncios. Aparecer en los primeros lugares de Google transmite autoridad y profesionalismo. Es como tener la mejor ubicación en una calle comercial.
            </p>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">4. Ventaja competitiva</h3>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Si tus competidores están en Google y tú no, estás perdiendo ventas. Si tú estás en Google y ellos no, te llevas esos clientes. Simple: quien aparece primero, vende más.
            </p>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Los 3 pilares del SEO</h2>

            <div class="space-y-6 mb-8">
              <div class="bg-gray-800/40 rounded-2xl p-6 border border-magenta/20">
                <h4 class="text-xl font-normal text-magenta mb-3">1. SEO On-Page (En tu sitio)</h4>
                <p class="text-gray-300 font-light mb-4">
                  Todo lo que puedes optimizar dentro de tu sitio web:
                </p>
                <ul class="space-y-2 text-gray-300 font-light">
                  <li>• <strong>Contenido de calidad:</strong> Textos útiles, bien escritos y relevantes</li>
                  <li>• <strong>Palabras clave:</strong> Términos que tus clientes buscan en Google</li>
                  <li>• <strong>Títulos y meta descripciones:</strong> Lo que aparece en Google</li>
                  <li>• <strong>URLs amigables:</strong> /servicios/seo en vez de /page?id=123</li>
                  <li>• <strong>Imágenes optimizadas:</strong> Peso reducido y texto alternativo</li>
                  <li>• <strong>Estructura del sitio:</strong> Jerarquía clara con H1, H2, H3</li>
                </ul>
              </div>

              <div class="bg-gray-800/40 rounded-2xl p-6 border border-magenta/20">
                <h4 class="text-xl font-normal text-magenta mb-3">2. SEO Técnico (Bajo el capó)</h4>
                <p class="text-gray-300 font-light mb-4">
                  Aspectos técnicos que Google valora:
                </p>
                <ul class="space-y-2 text-gray-300 font-light">
                  <li>• <strong>Velocidad de carga:</strong> Sitios rápidos (menos de 3 segundos)</li>
                  <li>• <strong>Mobile-friendly:</strong> Diseño responsive que funciona perfecto en móviles</li>
                  <li>• <strong>HTTPS:</strong> Certificado SSL para seguridad</li>
                  <li>• <strong>Sitemap XML:</strong> Mapa para que Google indexe todas tus páginas</li>
                  <li>• <strong>Robots.txt:</strong> Indica a Google qué puede rastrear</li>
                  <li>• <strong>Core Web Vitals:</strong> Métricas de experiencia de usuario</li>
                </ul>
              </div>

              <div class="bg-gray-800/40 rounded-2xl p-6 border border-magenta/20">
                <h4 class="text-xl font-normal text-magenta mb-3">3. SEO Off-Page (Fuera de tu sitio)</h4>
                <p class="text-gray-300 font-light mb-4">
                  Factores externos que influyen en tu ranking:
                </p>
                <ul class="space-y-2 text-gray-300 font-light">
                  <li>• <strong>Backlinks:</strong> Enlaces desde otros sitios hacia el tuyo (votos de confianza)</li>
                  <li>• <strong>Autoridad del dominio:</strong> Reputación de tu sitio construida con el tiempo</li>
                  <li>• <strong>Menciones de marca:</strong> Que hablen de ti en otros sitios</li>
                  <li>• <strong>Redes sociales:</strong> Compartidos y engagement indirectamente ayudan</li>
                  <li>• <strong>Reseñas:</strong> Opiniones en Google My Business y otros sitios</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Cómo trabajamos el SEO?</h2>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 font-normal text-magenta">
                  1
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Investigación de palabras clave</h4>
                  <p class="text-gray-400 font-light">Identificamos qué términos buscan tus clientes potenciales y cuánta competencia hay. Usamos herramientas como Google Keyword Planner, SEMrush y Ahrefs.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 font-normal text-magenta">
                  2
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Auditoría SEO</h4>
                  <p class="text-gray-400 font-light">Analizamos tu sitio actual (si lo tienes) para encontrar problemas técnicos, oportunidades de mejora y qué está funcionando bien.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 font-normal text-magenta">
                  3
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Optimización técnica</h4>
                  <p class="text-gray-400 font-light">Mejoramos velocidad, estructura, mobile-friendliness, sitemaps, schema markup y todo el SEO técnico.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 font-normal text-magenta">
                  4
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Creación de contenido</h4>
                  <p class="text-gray-400 font-light">Escribimos contenido optimizado pero natural, que responde las preguntas de tus clientes y posiciona para tus keywords objetivo.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 font-normal text-magenta">
                  5
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Link building</h4>
                  <p class="text-gray-400 font-light">Construimos enlaces de calidad desde sitios relevantes y confiables hacia tu sitio para aumentar tu autoridad.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-magenta/20 flex items-center justify-center flex-shrink-0 font-normal text-magenta">
                  6
                </div>
                <div>
                  <h4 class="text-xl font-normal text-white mb-2">Monitoreo y ajustes</h4>
                  <p class="text-gray-400 font-light">Seguimiento mensual de rankings, tráfico y conversiones. Ajustamos la estrategia según los resultados.</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">¿Cuánto tiempo toma ver resultados?</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              El SEO no es magia instantánea. Google necesita tiempo para rastrear, indexar y evaluar tu sitio:
            </p>

            <ul class="space-y-3 mb-8 text-gray-300 font-light text-lg">
              <li>• <strong>1-3 meses:</strong> Mejoras técnicas y primeros cambios en rankings</li>
              <li>• <strong>3-6 meses:</strong> Crecimiento significativo en tráfico orgánico</li>
              <li>• <strong>6-12 meses:</strong> Resultados sólidos y rankings competitivos</li>
            </ul>

            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              El SEO es una maratón, no un sprint. Pero una vez que posicionas, los resultados son duraderos y rentables.
            </p>

            <div class="bg-lavanda/10 border border-lavanda/30 rounded-2xl p-8 my-12">
              <h3 class="text-2xl font-light mb-4 text-white">⚠️ Cuidado con las promesas falsas</h3>
              <p class="text-gray-300 leading-relaxed font-light text-lg">
                Desconfía de agencias que prometen "primera posición en Google en 2 semanas" o "resultados garantizados". El SEO ético toma tiempo. Las técnicas de spam (black hat SEO) pueden penalizarte permanentemente.
              </p>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">SEO Local: Perfecto para negocios locales</h2>
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Si tienes un negocio físico o atiendes a una zona geográfica específica, el <strong>SEO Local</strong> es fundamental:
            </p>

            <ul class="space-y-3 mb-8 text-gray-300 font-light text-lg">
              <li>• Aparecer en Google Maps y "Cerca de mí"</li>
              <li>• Optimización de Google My Business</li>
              <li>• Reseñas de clientes locales</li>
              <li>• Keywords con ubicación ("tienda shopify Santiago")</li>
            </ul>

            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              El 46% de las búsquedas en Google tienen intención local. Si no estás optimizado para búsquedas locales, estás perdiendo clientes de tu zona.
            </p>

            <div class="bg-gradient-to-r from-magenta/20 to-lavanda/20 border border-magenta/30 rounded-2xl p-8 mt-12">
              <h3 class="text-2xl font-light mb-4 text-white">¿Quieres aparecer en Google?</h3>
              <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                En Landify optimizamos tu sitio web para SEO desde el día uno. Ya sea Shopify, Jumpseller, WordPress o desarrollo custom, todos nuestros proyectos incluyen optimización SEO básica.
              </p>
              <router-link 
                to="/#servicios" 
                class="inline-block bg-gradient-to-r from-magenta to-lavanda hover:from-lavanda hover:to-magenta text-white px-8 py-4 rounded-full font-normal transition-all hover:scale-105"
              >
                Ver nuestros servicios
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </section>

    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import MouseParticles from '../components/MouseParticles.vue'
import HeaderNav from '../components/HeaderNav.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

<style scoped>
.grid-background {
  background-image: 
    linear-gradient(rgba(107, 78, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(107, 78, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.floating-orb {
  position: absolute;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.orb-2 {
  bottom: 15%;
  right: 20%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}
</style>

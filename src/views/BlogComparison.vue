<!-- Comparativa detallada entre Shopify y Jumpseller con tabla y casos de uso -->
<template>
  <div class="min-h-screen relative overflow-hidden">
    <MouseParticles />
    <div class="fixed inset-0" style="z-index: -10;">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark"></div>
      <div class="grid-background"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="floating-orb orb-1 w-96 h-96 bg-lavanda rounded-full blur-3xl"></div>
        <div class="floating-orb orb-2 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>
    </div>

    <HeaderNav />
    
    <section class="relative pt-40 pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <router-link to="/#blog" class="inline-flex items-center text-lavanda hover:text-primary transition-colors mb-8 text-sm">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al blog
        </router-link>
        
        <div class="mb-8">
          <span class="px-4 py-2 bg-lavanda/20 text-lavanda text-sm rounded-full border border-lavanda/30 inline-block mb-6">Comparativa</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Shopify vs Jumpseller: <span class="bg-gradient-to-r from-lavanda to-primary bg-clip-text text-transparent">¿Cuál es mejor para tu negocio?</span>
          </h1>
          <div class="flex items-center gap-4 text-gray-400 text-sm">
            <span>📅 Diciembre 2024</span>
            <span>•</span>
            <span>⏱️ 6 min lectura</span>
          </div>
        </div>

        <div class="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop" 
            alt="Shopify vs Jumpseller" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
        <article class="prose prose-invert prose-lg max-w-none">
          <div class="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            
            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              ¿Shopify o Jumpseller? Es una de las preguntas más frecuentes que nos hacen. Ambas plataformas son excelentes, pero tienen enfoques diferentes. Te ayudamos a decidir según tu situación específica.
            </p>

            <div class="bg-primary/10 border border-primary/30 rounded-2xl p-8 my-8">
              <h3 class="text-2xl font-light mb-4 text-white">🎯 La respuesta corta</h3>
              <p class="text-gray-300 leading-relaxed font-light text-lg mb-4">
                <strong>Shopify</strong> si vendes internacionalmente, necesitas escalar mucho o quieres el ecosistema más grande de apps.
              </p>
              <p class="text-gray-300 leading-relaxed font-light text-lg">
                <strong>Jumpseller</strong> si tu negocio es 100% local en Chile, buscas simplicidad y precios predecibles sin comisiones por venta.
              </p>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Comparación detallada</h2>

            <div class="overflow-x-auto mb-12">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-white/20">
                    <th class="py-4 px-4 text-white font-normal text-lg">Aspecto</th>
                    <th class="py-4 px-4 text-primary font-normal text-lg">Shopify</th>
                    <th class="py-4 px-4 text-magenta font-normal text-lg">Jumpseller</th>
                  </tr>
                </thead>
                <tbody class="text-gray-300 font-light">
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Precio mensual</td>
                    <td class="py-4 px-4">Desde $39 USD</td>
                    <td class="py-4 px-4">Desde $14.990 CLP (~$17 USD)</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Comisión por venta</td>
                    <td class="py-4 px-4">2.9% + $0.30 USD</td>
                    <td class="py-4 px-4">Sin comisiones ✓</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Transbank nativo</td>
                    <td class="py-4 px-4">No (requiere apps)</td>
                    <td class="py-4 px-4">Sí ✓</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Aplicaciones disponibles</td>
                    <td class="py-4 px-4">+8,000</td>
                    <td class="py-4 px-4">~100-200</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Escalabilidad</td>
                    <td class="py-4 px-4">Ilimitada</td>
                    <td class="py-4 px-4">Hasta ~1,000 productos</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Ventas internacionales</td>
                    <td class="py-4 px-4">Excelente ✓</td>
                    <td class="py-4 px-4">Limitado</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Soporte</td>
                    <td class="py-4 px-4">24/7 en inglés</td>
                    <td class="py-4 px-4">Horario local en español</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4 font-normal">Curva de aprendizaje</td>
                    <td class="py-4 px-4">Media</td>
                    <td class="py-4 px-4">Baja</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Análisis por categorías</h2>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">💰 Costos: El factor decisivo</h3>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-primary/10 border border-primary/30 rounded-2xl p-6">
                <h4 class="text-lg font-normal text-primary mb-3">Shopify</h4>
                <ul class="space-y-2 text-gray-300 text-base">
                  <li>• Plan Basic: $39 USD/mes</li>
                  <li>• Comisión: 2.9% + $0.30 por venta</li>
                  <li>• Apps premium: $10-100 USD/mes</li>
                  <li>• <strong>Ejemplo:</strong> Si vendes $1M CLP/mes, pagas ~$40,000 CLP en comisiones</li>
                </ul>
              </div>

              <div class="bg-magenta/10 border border-magenta/30 rounded-2xl p-6">
                <h4 class="text-lg font-normal text-magenta mb-3">Jumpseller</h4>
                <ul class="space-y-2 text-gray-300 text-base">
                  <li>• Plan Pro: $29.990 CLP/mes</li>
                  <li>• Sin comisiones por venta ✓</li>
                  <li>• Solo Transbank: ~3.5%</li>
                  <li>• <strong>Ejemplo:</strong> Si vendes $1M CLP/mes, pagas $0 en comisiones a Jumpseller</li>
                </ul>
              </div>
            </div>

            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              <strong>Veredicto:</strong> Para ventas locales con alto volumen, Jumpseller es más rentable. Para ventas internacionales con márgenes altos, las comisiones de Shopify valen la pena por su ecosistema global.
            </p>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">🌎 Alcance geográfico</h3>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-1 text-lg">Shopify</p>
                  <p class="text-gray-400 font-light">Múltiples monedas, idiomas, pagos internacionales. Perfecto para vender en USA, Europa, Asia. Integraciones con Amazon, eBay, Walmart.</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-magenta flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-normal mb-1 text-lg">Jumpseller</p>
                  <p class="text-gray-400 font-light">Optimizado para Chile y Latinoamérica. Transbank, Webpay, Mercado Pago nativos. Puede vender internacionalmente pero no es su fuerte.</p>
                </div>
              </div>
            </div>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">🔧 Funcionalidades y apps</h3>
            
            <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
              Aquí Shopify gana por goleada. Con más de 8,000 aplicaciones en su App Store, puedes agregar casi cualquier funcionalidad:
            </p>

            <ul class="space-y-2 mb-6 text-gray-300 font-light text-lg">
              <li>• Email marketing avanzado (Klaviyo, Mailchimp)</li>
              <li>• Programas de lealtad y membresías</li>
              <li>• Suscripciones recurrentes</li>
              <li>• Dropshipping automatizado</li>
              <li>• Reviews y contenido generado por usuarios</li>
              <li>• Análisis avanzado y reportes</li>
            </ul>

            <p class="text-gray-300 leading-relaxed mb-8 font-light text-lg">
              Jumpseller tiene un ecosistema más pequeño pero incluye las funcionalidades esenciales de serie. Si no necesitas apps complejas, esto es suficiente.
            </p>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">📈 Escalabilidad</h3>
            
            <div class="bg-lavanda/10 border border-lavanda/30 rounded-2xl p-6 mb-8">
              <p class="text-gray-300 leading-relaxed font-light text-lg">
                <strong>Shopify</strong> puede manejar desde 10 hasta 100,000+ productos sin problemas. Marcas como Gymshark hacen millones de dólares en Shopify. Si tu visión es crecer masivamente, Shopify no te limitará.
              </p>
              <p class="text-gray-300 leading-relaxed font-light text-lg mt-4">
                <strong>Jumpseller</strong> funciona mejor para catálogos de hasta 500-1,000 productos. Perfecto para pequeñas y medianas empresas, pero puede quedarse corto si explotas en ventas.
              </p>
            </div>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Casos de uso: ¿Cuál te conviene?</h2>

            <h3 class="text-2xl font-light mb-4 text-primary mt-8">Elige Shopify si:</h3>
            <ul class="space-y-3 mb-8 text-gray-300 font-light text-lg">
              <li>✓ Planeas vender internacionalmente (USA, Europa, etc.)</li>
              <li>✓ Necesitas un catálogo grande o escalabilidad ilimitada</li>
              <li>✓ Quieres vender en Instagram, Facebook, TikTok, Amazon</li>
              <li>✓ Tu margen de ganancia permite absorber comisiones</li>
              <li>✓ Necesitas apps avanzadas (subscripciones, lealtad, dropshipping)</li>
            </ul>

            <h3 class="text-2xl font-light mb-4 text-magenta mt-8">Elige Jumpseller si:</h3>
            <ul class="space-y-3 mb-8 text-gray-300 font-light text-lg">
              <li>✓ Tu mercado es 100% Chile (o Latinoamérica)</li>
              <li>✓ Necesitas Transbank/Webpay nativo sin complicaciones</li>
              <li>✓ Prefieres costos fijos predecibles sin comisiones por venta</li>
              <li>✓ Tu catálogo es pequeño/mediano (hasta 500 productos)</li>
              <li>✓ Buscas simplicidad y soporte en español</li>
            </ul>

            <h2 class="text-3xl font-light mb-6 text-white mt-12">Nuestra recomendación honesta</h2>
            
            <div class="space-y-6 mb-8">
              <div class="bg-gray-800/40 rounded-2xl p-6 border border-white/10">
                <h4 class="text-xl font-normal text-white mb-3">🏪 Tienda física en Chile</h4>
                <p class="text-gray-400 font-light">
                  <strong>Jumpseller</strong> – Tus clientes ya te conocen localmente, Transbank es esencial, y no necesitas apps complejas. Ahorra en comisiones.
                </p>
              </div>

              <div class="bg-gray-800/40 rounded-2xl p-6 border border-white/10">
                <h4 class="text-xl font-normal text-white mb-3">🚀 Startup con ambiciones globales</h4>
                <p class="text-gray-400 font-light">
                  <strong>Shopify</strong> – Mejor plataforma para escalar internacionalmente. Invierte desde el inicio en la infraestructura que te llevará lejos.
                </p>
              </div>

              <div class="bg-gray-800/40 rounded-2xl p-6 border border-white/10">
                <h4 class="text-xl font-normal text-white mb-3">👕 Marca de ropa/accesorios</h4>
                <p class="text-gray-400 font-light">
                  <strong>Shopify</strong> – Integraciones con Instagram Shopping, looks generados por clientes, dropshipping. El ecosistema fashion es muy fuerte en Shopify.
                </p>
              </div>

              <div class="bg-gray-800/40 rounded-2xl p-6 border border-white/10">
                <h4 class="text-xl font-normal text-white mb-3">🍕 Negocio local (restaurant, servicios)</h4>
                <p class="text-gray-400 font-light">
                  <strong>Jumpseller</strong> – Catálogo simple, clientes locales que pagan con Transbank. No necesitas complicarte con herramientas globales.
                </p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-primary/20 via-magenta/20 to-lavanda/20 border border-primary/30 rounded-2xl p-8 mt-12">
              <h3 class="text-2xl font-light mb-4 text-white">¿Aún no estás seguro?</h3>
              <p class="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                Conversemos sobre tu proyecto específico. Te ayudamos a elegir la plataforma correcta según tus objetivos, presupuesto y mercado. Sin compromiso.
              </p>
              <div class="flex flex-wrap gap-4">
                <router-link 
                  to="/servicios/shopify" 
                  class="inline-block bg-gradient-to-r from-primary to-magenta hover:from-magenta hover:to-primary text-white px-6 py-3 rounded-full font-normal transition-all hover:scale-105 text-sm"
                >
                  Ver Shopify
                </router-link>
                <router-link 
                  to="/servicios/jumpseller" 
                  class="inline-block bg-gradient-to-r from-magenta to-lavanda hover:from-lavanda hover:to-magenta text-white px-6 py-3 rounded-full font-normal transition-all hover:scale-105 text-sm"
                >
                  Ver Jumpseller
                </router-link>
              </div>
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
  top: 20%;
  right: 15%;
  animation-delay: 0s;
}

.orb-2 {
  bottom: 25%;
  left: 10%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, 20px) scale(1.1); }
}

table {
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  table {
    font-size: 0.85rem;
  }
}
</style>

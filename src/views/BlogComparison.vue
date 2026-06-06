<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />

    <article class="pt-40 pb-20 md:pt-48 md:pb-32">
      <div class="container mx-auto px-8 md:px-12 lg:px-16 max-w-3xl">
        <router-link to="/#blog" class="inline-flex items-center text-xs tracking-widest text-paper-muted hover:text-paper font-body uppercase border-b border-white/10 hover:border-paper pb-1 transition-all mb-12">
          &larr; Volver al blog
        </router-link>

        <div class="mb-12">
          <span class="text-xs tracking-[0.2em] text-crimson font-body uppercase mb-6 block">Comparativa</span>
          <h1 class="text-4xl md:text-6xl font-display font-bold text-paper leading-[1.05] mb-6">
            Shopify vs Jumpseller: ¿Cuál elegir para tu negocio en Chile?
          </h1>
          <div class="flex items-center gap-4 text-xs text-paper-muted font-body">
            <span>Julio 2025</span>
            <span class="w-px h-4 bg-white/10"></span>
            <span>7 min lectura</span>
          </div>
        </div>

        <div class="aspect-video bg-charcoal border border-white/5 mb-16 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop" alt="Comparación plataformas" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-paper font-body leading-relaxed mb-8">Elegir la plataforma adecuada para tu tienda online es una de las decisiones más importantes que tomarás como emprendedor. En Chile, dos opciones destacan: Shopify, el gigante global del eCommerce, y Jumpseller, la plataforma local que ha ganado terreno rápidamente. En este artículo las comparamos para ayudarte a decidir.</p>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">Comparativa rápida</h2>

          <div class="bg-charcoal border border-white/5 p-8 mb-8">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-3 pr-4 font-display font-semibold text-paper">Característica</th>
                  <th class="text-left py-3 pr-4 font-display font-semibold text-paper">Shopify</th>
                  <th class="text-left py-3 font-display font-semibold text-paper">Jumpseller</th>
                </tr>
              </thead>
              <tbody class="text-paper-muted font-body">
                <tr class="border-b border-white/5">
                  <td class="py-3 pr-4">Precio mensual</td>
                  <td class="py-3 pr-4 text-paper">Desde $39 USD</td>
                  <td class="py-3 text-paper">Desde $14.990 CLP</td>
                </tr>
                <tr class="border-b border-white/5">
                  <td class="py-3 pr-4">Comisiones por venta</td>
                  <td class="py-3 pr-4 text-paper">0.5% - 2%</td>
                  <td class="py-3 text-paper">0%</td>
                </tr>
                <tr class="border-b border-white/5">
                  <td class="py-3 pr-4">Transbank nativo</td>
                  <td class="py-3 pr-4 text-paper">Requiere app</td>
                  <td class="py-3 text-paper">Sí, incluido</td>
                </tr>
                <tr class="border-b border-white/5">
                  <td class="py-3 pr-4">Apps / Plugins</td>
                  <td class="py-3 pr-4 text-paper">8,000+</td>
                  <td class="py-3 text-paper">Limitado</td>
                </tr>
                <tr class="border-b border-white/5">
                  <td class="py-3 pr-4">Venta internacional</td>
                  <td class="py-3 pr-4 text-paper">Excelente</td>
                  <td class="py-3 text-paper">Básica</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Escalabilidad</td>
                  <td class="py-3 pr-4 text-paper">Ilimitada</td>
                  <td class="py-3 text-paper">Media</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 class="text-2xl md:text-3xl font-display font-bold text-paper mt-16 mb-6">¿Cuál elegir?</h2>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Elige Shopify si:</h3>
          <ul class="space-y-2 mb-8 text-paper-muted font-body text-base">
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span> Planeas vender internacionalmente</li>
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span> Necesitas escalar rápidamente</li>
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span> Requieres integraciones avanzadas</li>
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span>Tienes un catálogo grande (+1000 productos)</li>
          </ul>

          <h3 class="text-xl font-display font-semibold text-paper mt-12 mb-4">Elige Jumpseller si:</h3>
          <ul class="space-y-2 mb-8 text-paper-muted font-body text-base">
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span> Tu mercado principal es Chile</li>
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span> Buscas costos predecibles y menores</li>
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span> Necesitas Transbank sin complicaciones</li>
            <li class="flex items-start gap-3"><span class="text-crimson mt-0.5">&mdash;</span> Estás empezando y quieres simplicidad</li>
          </ul>

          <p class="text-base text-paper-muted font-body leading-relaxed mb-6">¿Aún no estás seguro? Contáctanos y te asesoramos sin compromiso. Analizamos tu negocio y te recomendamos la plataforma ideal.</p>
        </div>

        <div class="mt-16 pt-12 border-t border-white/5">
          <p class="text-sm text-paper-muted font-body mb-6">¿Necesitas ayuda para decidir?</p>
          <a href="https://wa.me/56952190811" target="_blank" class="inline-block bg-crimson text-paper px-8 py-3 text-xs tracking-widest font-body uppercase hover:bg-white hover:text-ink transition-all duration-300">
            Cotizar proyecto
          </a>
        </div>
      </div>
    </article>

    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

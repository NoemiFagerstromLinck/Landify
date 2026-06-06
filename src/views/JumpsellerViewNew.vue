<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />

    <section class="pt-44 pb-20 md:pt-52 md:pb-32">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="max-w-4xl">
          <span class="text-xs tracking-[0.2em] text-paper-muted font-body uppercase mb-6 block">Hecho en Chile &mdash; Jumpseller</span>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-paper leading-[0.95] mb-8">
            Tiendas<br>
            <span class="italic text-crimson">Jumpseller</span>
          </h1>
          <p class="text-lg md:text-xl text-paper-muted font-body font-light max-w-2xl leading-relaxed mb-10">
            La plataforma eCommerce chilena que entiende tu negocio local. Transbank nativo, precios en pesos y sin comisiones por venta.
          </p>
          <a href="https://wa.me/56952190811" target="_blank" class="inline-block bg-crimson text-paper px-10 py-4 text-sm tracking-widest font-body uppercase hover:bg-white hover:text-ink transition-all duration-300">
            Cotizar proyecto
          </a>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 border-t border-white/5">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="max-w-5xl mx-auto">
          <div class="mb-16">
            <span class="text-xs tracking-[0.2em] text-paper-muted font-body uppercase mb-4 block">Análisis</span>
            <h2 class="text-3xl md:text-5xl font-display font-bold text-paper leading-[1.1]">¿Es Jumpseller para ti?</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-16">
            <div>
              <h3 class="text-lg font-display font-semibold text-paper mb-8 border-b border-white/5 pb-4">Ventajas</h3>
              <ul class="space-y-8">
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Transbank nativo</p>
                  <p class="text-sm text-paper-muted font-body">Integración directa con Webpay Plus sin apps de terceros. Listo para vender en Chile desde el día uno.</p>
                </li>
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Sin comisiones por venta</p>
                  <p class="text-sm text-paper-muted font-body">Pagas una mensualidad fija en pesos chilenos. Sin sorpresas ni porcentajes por transacción.</p>
                </li>
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Precios competitivos</p>
                  <p class="text-sm text-paper-muted font-body">Desde $14.990/mes. Más accesible para PyMEs y emprendedores que están comenzando.</p>
                </li>
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Soporte local</p>
                  <p class="text-sm text-paper-muted font-body">Atención en español y horario chileno. Resolución rápida sin barreras de idioma ni huso horario.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-display font-semibold text-paper mb-8 border-b border-white/5 pb-4">Consideraciones</h3>
              <ul class="space-y-8">
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Catálogo de apps limitado</p>
                  <p class="text-sm text-paper-muted font-body">Menos integraciones disponibles comparado con Shopify. Suficiente para la mayoría de los negocios locales.</p>
                </li>
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Escalabilidad media</p>
                  <p class="text-sm text-paper-muted font-body">Óptimo para catálogos de hasta 500-1000 productos. Para catálogos masivos, Shopify es más adecuado.</p>
                </li>
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Enfoque latinoamericano</p>
                  <p class="text-sm text-paper-muted font-body">Si planeas vender globalmente desde el inicio, considera Shopify como alternativa.</p>
                </li>
                <li>
                  <p class="text-base font-display font-semibold text-paper mb-1">Personalización acotada</p>
                  <p class="text-sm text-paper-muted font-body">Tiene acceso al código pero las opciones de personalización son más limitadas que Shopify.</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-16 p-8 md:p-12 bg-charcoal border border-white/5">
            <p class="text-sm text-paper-muted font-body leading-relaxed">
              <span class="text-crimson font-semibold">&mdash;</span> Recomendamos Jumpseller si tu negocio es 100% local en Chile, buscas simplicidad y costos predecibles. Para venta internacional o catálogos grandes, considera <router-link to="/servicios/shopify" class="text-paper underline hover:text-crimson transition-colors">Shopify</router-link>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 border-t border-white/5">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="max-w-5xl mx-auto">
          <span class="text-xs tracking-[0.2em] text-paper-muted font-body uppercase mb-4 block">Proceso</span>
          <h2 class="text-3xl md:text-5xl font-display font-bold text-paper leading-[1.1] mb-16">Cómo creamos tu tienda</h2>

          <div class="space-y-16">
            <div class="grid md:grid-cols-5 gap-8 items-start">
              <div class="md:col-span-1">
                <span class="text-6xl font-display font-bold text-paper-muted/10">01</span>
              </div>
              <div class="md:col-span-4">
                <h3 class="text-2xl font-display font-bold text-paper mb-3">Configuración inicial</h3>
                <p class="text-sm text-paper-muted font-body leading-relaxed mb-6">Creamos tu cuenta Jumpseller, configuramos el plan y establecemos la estructura de tu tienda. Conectamos dominio, Transbank y envíos.</p>
                <ul class="space-y-2">
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Selección y activación del plan</span>
                  </li>
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Integración de Transbank/Webpay Plus</span>
                  </li>
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Configuración de dominio personalizado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="grid md:grid-cols-5 gap-8 items-start">
              <div class="md:col-span-1">
                <span class="text-6xl font-display font-bold text-paper-muted/10">02</span>
              </div>
              <div class="md:col-span-4">
                <h3 class="text-2xl font-display font-bold text-paper mb-3">Diseño y personalización</h3>
                <p class="text-sm text-paper-muted font-body leading-relaxed mb-6">Elegimos y personalizamos un tema que refleje tu marca, con colores, tipografías y páginas adaptadas a tu negocio.</p>
                <ul class="space-y-2">
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Personalización completa del tema</span>
                  </li>
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Diseño responsive</span>
                  </li>
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Integración de identidad visual</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="grid md:grid-cols-5 gap-8 items-start">
              <div class="md:col-span-1">
                <span class="text-6xl font-display font-bold text-paper-muted/10">03</span>
              </div>
              <div class="md:col-span-4">
                <h3 class="text-2xl font-display font-bold text-paper mb-3">Lanzamiento</h3>
                <p class="text-sm text-paper-muted font-body leading-relaxed mb-6">Subimos tus productos, probamos todo el flujo de compra y lanzamos. Te capacitamos para administrar tu tienda sin ayuda técnica.</p>
                <ul class="space-y-2">
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Carga y optimización de productos</span>
                  </li>
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Testing completo del checkout</span>
                  </li>
                  <li class="text-sm text-paper-muted font-body flex items-start gap-3">
                    <span class="text-crimson mt-0.5">&mdash;</span>
                    <span>Capacitación para administrar tu tienda</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 md:py-44 border-t border-white/5">
      <div class="container mx-auto px-8 md:px-12 lg:px-16">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl md:text-6xl font-display font-bold text-paper leading-[1.05] mb-8">
            ¿Listo para vender<br>
            <span class="italic text-crimson">con Jumpseller?</span>
          </h2>
          <p class="text-base text-paper-muted font-body mb-12 max-w-xl mx-auto">Conversemos sobre tu proyecto y te entregamos una cotización personalizada.</p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/56952190811" target="_blank" class="bg-crimson text-paper px-10 py-4 text-sm tracking-widest font-body uppercase hover:bg-white hover:text-ink transition-all duration-300">
              Iniciar mi proyecto
            </a>
            <a href="https://wa.me/56952190811" target="_blank" class="border border-white/20 text-paper px-10 py-4 text-sm tracking-widest font-body uppercase hover:bg-white hover:text-ink hover:border-white transition-all duration-300">
              Agendar reunión
            </a>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

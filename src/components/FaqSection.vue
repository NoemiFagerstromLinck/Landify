<template>
  <section class="py-32 md:py-44 border-t border-white/5">
    <div class="container mx-auto px-8 md:px-12 lg:px-16">
      <div class="max-w-2xl mb-16">
        <span class="text-xs tracking-[0.2em] text-paper-muted font-body uppercase mb-4 block">FAQ</span>
        <h2 class="text-3xl md:text-5xl font-display font-bold text-paper leading-[1.1]">
          Preguntas <span class="italic text-crimson">frecuentes</span>
        </h2>
      </div>

      <div class="max-w-3xl divide-y divide-white/5">
        <FaqItem
          question="¿Cuánto tiempo toma crear una tienda online?"
          answer="Dependiendo de la complejidad, una tienda básica puede estar lista en 1-2 semanas. Proyectos más complejos con integraciones personalizadas pueden tomar 3-4 semanas."
        />
        <FaqItem
          question="¿Necesito conocimientos técnicos para administrar mi tienda?"
          answer="No. Te capacitamos para que puedas gestionar tu tienda sin conocimientos técnicos. Las plataformas que usamos son intuitivas y fáciles de usar."
        />
        <FaqItem
          question="¿Qué incluye el servicio de desarrollo?"
          answer="Incluye configuración de la plataforma, diseño personalizado, carga de productos, integración de medios de pago, SEO básico y capacitación."
        />
        <FaqItem
          question="¿Ofrecen mantenimiento después del lanzamiento?"
          answer="Sí, ofrecemos planes de mantenimiento y soporte continuo para mantener tu tienda actualizada, segura y funcionando óptimamente."
        />
        <FaqItem
          question="¿Puedo vender internacionalmente con estas plataformas?"
          answer="Shopify es ideal para venta internacional con múltiples monedas e idiomas. Jumpseller está optimizado para el mercado chileno y latinoamericano."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FaqItem from './FaqItem.vue'
</script>

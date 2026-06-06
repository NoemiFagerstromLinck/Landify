<template>
  <div class="bg-ink min-h-screen">
    <HeaderNav />
    <HeroSection />
    <ServicesSection />
    <StatsSection />
    <ServicesGridSection />
    <BlogSection />
    <FaqSection />
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import StatsSection from '../components/StatsSection.vue'
import ServicesGridSection from '../components/ServicesGridSection.vue'
import BlogSection from '../components/BlogSection.vue'
import FaqSection from '../components/FaqSection.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

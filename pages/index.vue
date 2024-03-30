<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
);
</script>

<template>
  <HeroSection />
  <SponserSection />
  <AboutSection />
  <HIWSection/>
  <FeaturesSection />
  <ServiceSection />
  <CTASection />
  <TestimonialSection />
  <TeamSection />
  <PricingSection />
  <NewsletterSection />
  <FAQSection />
</template>

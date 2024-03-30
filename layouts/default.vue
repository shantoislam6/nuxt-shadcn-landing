<script setup lang="ts">
  const route = useRoute();
</script>
<template>
  <NuxtLoadingIndicator color="hsl(var(--primary))" />
  <main>
    <HeaderSection />
     <div>
        <slot />
     </div>
    <FooterSection />
  </main>
</template>

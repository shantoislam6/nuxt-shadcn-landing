<script setup lang="ts">
// is user prefers dark theme
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>
<template>
<ClientOnly>
    <img
      v-if="!isDark"
      src="/images/brand-light.png"
      class="h-[50px]"
      alt=""
    />
    <img
      v-if="isDark"
      src="/images/brand-dark.png"
      class="h-[50px]"
      alt=""
    />
    <template #fallback>
      <img
        src="/images/brand-light.png"
        class="h-[50px]"
        alt=""
      />
    </template>
</ClientOnly>
</template>

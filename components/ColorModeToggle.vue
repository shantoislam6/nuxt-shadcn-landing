<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button';
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
    <Button
      variant="ghost"
      size="sm"
      class="h-15 aspect-square rounded-full"
      @click="isDark = !isDark"
    >
      <Icon
        icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition"
        class="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
      />
      <Icon
        icon="line-md:sunny-filled-loop"
        class="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
    <template #fallback>
      <Button
        variant="ghost"
        size="sm"
        class="h-15 w-15 aspect-square rounded-full"
        @click="isDark = !isDark"
      >
        <div class="h-[1.3rem] w-[1.3rem]"></div>
      </Button>
    </template>
  </ClientOnly>
</template>

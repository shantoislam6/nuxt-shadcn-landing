<script setup lang="ts">
import { delay } from '~/lib/utils';

await delay(1000);
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
);
</script>

<template>
  <div class="max-container">
    <h1 class="bg-break text-brack text-4xl">
      {{ page?.hero.title }}
    </h1>
    <button @click="page!.hero.title = 'shanton'">Change title</button>
    <ContentDoc path="/" />
  </div>
</template>

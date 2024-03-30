<script setup lang="ts">
interface statsProps {
  quantity: string;
  description: string;
}

const stats: statsProps[] = [
  {
    quantity: '2.7K+',
    description: 'Users',
  },
  {
    quantity: '1.8K+',
    description: 'Subscribers',
  },
  {
    quantity: '112',
    description: 'Downloads',
  },
  {
    quantity: '4',
    description: 'Products',
  },
];
</script>
<template>
  <section id="statistics">
    <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
      <div
        v-for="{ quantity, description } in stats"
        :key="description"
        class="space-y-2 text-center"
      >
        <h2 class="text-2xl font-bold sm:text-3xl">{{ quantity }}</h2>
        <p class="sm:text-xl text-md text-muted-foreground">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

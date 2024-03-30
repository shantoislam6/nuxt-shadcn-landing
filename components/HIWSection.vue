<script setup lang="ts">
import { Icon } from '@iconify/vue';
interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: 'clarity:accessibility-1-solid',
    title: 'Accesibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
  {
    icon: 'fluent:people-community-16-filled',
    title: 'Community',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
  {
    icon: 'solar:scale-outline',
    title: 'Scalability',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
  {
    icon: 'streamline:give-gift-solid',
    title: 'Gamification',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
];
</script>
<template>
  <section
    id="howItWorks"
    class="max-container py-24 text-center sm:py-32"
  >
    <h2 class="text-3xl font-bold md:text-4xl">
      How It
      <span
        class="text-primary"
      >
        Works
      </span>
      Step-by-Step Guide
    </h2>
    <p class="mx-auto mb-12 mt-4 text-xl text-muted-foreground md:w-3/4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor
      pariatur sit!
    </p>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <Card
        v-for="{ icon, title, description } in features"
        :key="title"
        class="bg-muted/40"
      >
        <CardHeader>
          <CardTitle class="grid place-items-center gap-4">
            <Icon :icon="icon" class="text-primary w-14 h-14" /> {{ title }}
          </CardTitle>
        </CardHeader>
        <CardContent>{{ description }}</CardContent>
      </Card>
    </div>
  </section>
</template>

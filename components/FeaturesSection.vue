<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: 'Responsive Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/images/art/looking-ahead.png',
  },
  {
    title: 'Intuitive user interface',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/images/art/reflecting.png',
  },
  {
    title: 'AI-Powered insights',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/images/art/growth.png',
  },
];

const featureList: string[] = [
  'Dark/Light theme',
  'Reviews',
  'Features',
  'Pricing',
  'Contact form',
  'Our team',
  'Responsive design',
  'Newsletter',
  'Minimalist',
];
</script>
<template>
  <section
    id="features"
    class="max-container space-y-8 py-24 sm:py-32"
  >
    <h2 class="text-3xl font-bold md:text-center lg:text-4xl">
      Many
      <span
        class="text-primary"
      >
        Great Features
      </span>
    </h2>

    <div class="flex flex-wrap gap-2 md:justify-center">
      <div
        v-for="feature in featureList"
        :key="feature"
      >
        <Badge
          variant="secondary"
          class="text-sm"
        >
          {{ feature }}
        </Badge>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="{ title, description, image } in features"
        :key="title"
        class=" bg-muted/40"
      >
        <CardHeader>
          <CardTitle>{{ title }}</CardTitle>
        </CardHeader>

        <CardContent>{{ description }}</CardContent>

        <CardFooter>
          <img
            :src="image"
            alt="About feature"
            class="mx-auto w-[200px] lg:w-[300px]"
          />
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

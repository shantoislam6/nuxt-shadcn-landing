<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}
const testimonials: TestimonialProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe',
    comment: 'This landing page is awesome!',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe1',
    comment:
      'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },

  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe2',
    comment:
      'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe3',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe4',
    comment:
      'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe5',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
</script>
<template>
  <section
    id="testimonials"
    class="max-container py-24 sm:py-32"
  >
    <div class="pb-12 sm:px-0 px-10">
      <h2 class="text-3xl font-bold md:text-4xl">
        Discover Why
        <span
          class="text-primary"
        >
          People Love
        </span>
        This Landing Page
      </h2>

      <p class="pt-4 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>
    </div>

    <div
      class="mx-auto grid columns-2 justify-center space-y-4 sm:block md:grid-cols-2 lg:columns-3 lg:grid-cols-4 lg:gap-6 lg:space-y-6"
    >
      <Card
        v-for="{ image, name, userName, comment } in testimonials"
        :key="userName"
        class="max-w-md gap-y-3 overflow-hidden bg-muted/40 md:break-inside-avoid"
      >
        <CardHeader class="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              :alt="name"
              :src="image"
            />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>

          <div class="flex flex-col">
            <CardTitle class="text-lg">{{ name }}</CardTitle>
            <CardDescription>{{ userName }}</CardDescription>
          </div>
        </CardHeader>

        <CardContent>{{ comment }}</CardContent>
      </Card>
    </div>
  </section>
</template>

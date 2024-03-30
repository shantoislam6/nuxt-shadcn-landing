<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const serviceList: ServiceProps[] = [
  {
    title: 'Code Collaboration',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    icon: 'vaadin:line-bar-chart',
  },
  {
    title: 'Project Management',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    icon: 'uit:bag',
  },
  {
    title: 'Task Automation',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    icon: 'gis:search-globe',
  },
];
</script>
<template>
  <section class="max-container py-24 sm:py-32">
    <div class="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold">
          <span class="text-primary"> Client-Centric </span>
          Services
        </h2>

        <p class="text-muted-foreground text-xl mt-4 mb-8 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          dolor.
        </p>
        <div class="flex flex-col gap-8">
          <Card
            v-for="{ icon, title, description } in serviceList"
            :key="title"
            class="bg-muted/40"
          >
            <CardHeader
              class="space-y-1 flex md:flex-row justify-start items-start gap-4 "
            >
              <div class="mt-1 bg-primary/20 p-4 rounded-2xl">
                <Icon :icon="icon" class="text-primary w-8 h-8" />
              </div>
              <div>
                <CardTitle>{{ title }}</CardTitle>
                <CardDescription class="text-md mt-2">
                  {{ description }}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
      <img
        src="/images/art/cube-leg.png"
        class="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
        alt="About services"
      />
    </div>
  </section>
</template>

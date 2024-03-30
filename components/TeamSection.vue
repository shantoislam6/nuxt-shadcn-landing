<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface SociaNetworkslProps {
  name: string;
  url: string;
  icon: string;
}

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

const teamList: TeamProps[] = [
  {
    imageUrl: 'https://i.pravatar.cc/150?img=35',
    name: 'Emma Smith',
    position: 'Product Manager',
    socialNetworks: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: 'mdi:facebook',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: 'mdi:instagram',
      },
      {
        name: 'Linkedin',
        url: 'https://www.instagram.com/',
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'John Doe',
    position: 'Tech Lead',
    socialNetworks: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: 'mdi:facebook',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: 'mdi:instagram',
      },
      {
        name: 'Linkedin',
        url: 'https://www.instagram.com/',
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=36',
    name: 'Ashley Ross',
    position: 'Frontend Developer',
    socialNetworks: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: 'mdi:facebook',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: 'mdi:instagram',
      },
      {
        name: 'Linkedin',
        url: 'https://www.instagram.com/',
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=17',
    name: 'Bruce Rogers',
    position: 'Backend Developer',
    socialNetworks: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: 'mdi:facebook',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: 'mdi:instagram',
      },
      {
        name: 'Linkedin',
        url: 'https://www.instagram.com/',
        icon: 'mdi:linkedin',
      },
    ],
  },
];
</script>
<template>
  <section
    id="team"
    class="max-container py-24 sm:py-32"
  >
    <h2 class="text-3xl font-bold md:text-4xl">
      Our Dedicated
      <span class="text-primary"> Crew </span>
    </h2>
    <p class="mb-12 mt-4 text-xl text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor
      pariatur sit!
    </p>

    <div class="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
      <Card
        v-for="{ imageUrl, name, position, socialNetworks } in teamList"
        :key="name"
        class="relative mt-8 flex flex-col items-center justify-center bg-muted/40"
      >
        <CardHeader class="mt-8 flex items-center justify-center pb-2">
          <img
            :src="imageUrl"
            :alt="name"
            class="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover"
          />
          <CardTitle class="text-center">{{ name }}</CardTitle>
          <CardDescription class="text-primary">
            {{ position }}
          </CardDescription>
        </CardHeader>

        <CardContent class="pb-2 text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </CardContent>

        <CardFooter>
          <div class="flex gap-5 mt-2 py-2">
            <a
              v-for="{ name, url, icon } in socialNetworks"
              :key="name"
              :href="url"
              target="_blank"
            >
              <Icon
                :icon="icon"
                class="h-8 w-8 text-primary"
              />
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

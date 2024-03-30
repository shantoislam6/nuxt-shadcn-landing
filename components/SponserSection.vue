<script setup lang="ts">
import { Icon } from '@iconify/vue';
interface SponsorProps {
  icon: string;
  name: string;
}
const sponsors: SponsorProps[] = [
  {
    icon: 'simple-icons:stripe',
    name: 'Stripe',
  },
  {
    icon: 'devicon-plain:woocommerce',
    name: 'Woocommerce',
  },
  {
    icon: 'arcticons:spacetrader',
    name: 'Sponsor 3',
  },
  {
    icon: 'arcticons:spacetrader',
    name: 'Sponsor 4',
  },
  {
    icon: 'arcticons:spacetrader',
    name: 'Sponsor 5',
  },
  {
    icon: 'arcticons:gcm-trader',
    name: 'Sponsor 6',
  },
];
</script>
<template>
  <section
    id="sponsors"
    class="max-container pt-24 sm:py-32"
  >
    <h2 class="text-md mb-12 text-center font-bold text-primary text-3xl">
      Investors and founders
    </h2>

    <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
      <div
        v-for="({ icon, name }, i) in sponsors"
        :key="name"
        class="flex items-center gap-1 flex-col text-muted-foreground/60"
      >
        <Icon :icon="icon" class="sm:w-[3rem] sm:h-[3rem] h-[2rem] w-[2rem]" />
        <h3 class="sm:text-xl text-md font-bold">{{ name }}</h3>
      </div>
    </div>
  </section>
</template>

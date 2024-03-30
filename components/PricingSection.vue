<script setup lang="ts">
import { Icon } from '@iconify/vue';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: 'Free',
    popular: 0,
    price: 0,
    description:
      'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
    buttonText: 'Get Started',
    benefitList: [
      '1 Team member',
      '2 GB Storage',
      'Upto 4 pages',
      'Community support',
      'lorem ipsum dolor',
    ],
  },
  {
    title: 'Premium',
    popular: 1,
    price: 5,
    description:
      'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
    buttonText: 'Start Free Trial',
    benefitList: [
      '4 Team member',
      '4 GB Storage',
      'Upto 6 pages',
      'Priority support',
      'lorem ipsum dolor',
    ],
  },
  {
    title: 'Enterprise',
    popular: 0,
    price: 40,
    description:
      'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
    buttonText: 'Contact US',
    benefitList: [
      '10 Team member',
      '8 GB Storage',
      'Upto 10 pages',
      'Priority support',
      'lorem ipsum dolor',
    ],
  },
];
</script>
<template>
  <section
    id="pricing"
    class="max-container py-24 sm:py-32"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-center">
      Get
      <span
        class="text-primary"
      >
        Unlimited
      </span>
      Access
    </h2>
    <h3 class="text-xl text-center text-muted-foreground pt-4 pb-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis.
    </h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        class="bg-muted/40"
        v-for="pricing in pricingList"
        :key="pricing.title"
        :class="{
          'shadow-black/10 drop-shadow-xl dark:shadow-white/10':
            pricing.popular === PopularPlanType.YES,
        }"
      >
        <CardHeader>
          <CardTitle class="flex item-center justify-between">
            {{ pricing.title }}
            <Badge
              v-if="pricing.popular === PopularPlanType.YES"
              variant="secondary"
              class="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span class="text-3xl font-bold">${{ pricing.price }}</span>
            <span class="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>{{ pricing.description }}</CardDescription>
        </CardHeader>

        <CardContent>
          <Button class="w-full">{{ pricing.buttonText }}</Button>
        </CardContent>

        <hr class="w-4/5 m-auto mb-4" />

        <CardFooter class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in pricing.benefitList"
              :key="benefit"
              class="flex items-center gap-1"
            >
              <Icon class="text-primary w-5 h-5" icon="pajamas:check-sm" />
              <h3 class="ml-2">{{ benefit }}</h3>
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

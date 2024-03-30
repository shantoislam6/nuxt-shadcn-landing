<script setup lang="ts">
interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Is this template free?',
    answer: 'Yes. It is a free ChadcnUI template.',
    value: 'item-1',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
    value: 'item-2',
  },
  {
    question:
      'Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?',
    value: 'item-3',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    value: 'item-4',
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
    value: 'item-5',
  },
];
</script>
<template>
  <section
    id="faq"
  >
    <div class="max-container py-24 sm:py-32">
      <h2 class="mb-10 text-3xl font-bold md:text-4xl">
        Frequently Asked
        <span class="text-primary"> Questions </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        class="AccordionRoot w-full"
      >
        <AccordionItem
          v-for="({ question, answer, value }, i) in FAQList"
          :key="value"
          :value="value"
        >
          <AccordionTrigger class="text-left text-base lg:text-lg">
            {{ question }}
          </AccordionTrigger>
          <AccordionContent class="p-5 text-base bg-muted/20">{{
            answer
          }}</AccordionContent>
        </AccordionItem>
        <h3 class="mt-5 text-base font-medium lg:text-lg">
          Still have questions?
          <a
            href="#"
            class="border-primary text-primary transition-all hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </Accordion>
    </div>
  </section>
</template>

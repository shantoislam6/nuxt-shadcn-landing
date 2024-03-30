<script setup lang="ts">
const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log('Subscribed!');
};
</script>
<template>
  <section id="newsletter" class="bg-muted/40 border dark:border-none">
    <div class="max-container py-24 sm:py-32">
      <h3 class="text-center text-4xl font-bold md:text-5xl">
        Join Our Daily
        <span
          class="text-primary"
        >
          Newsletter
        </span>
      </h3>
      <p class="mb-8 mt-4 text-center text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <form
        class="mx-auto flex w-full flex-col gap-4 md:w-6/12 md:flex-row md:gap-2 lg:w-4/12"
        @submit="handleSubmit"
      >
        <Input
          placeholder="leomirandadev@gmail.com"
          class="bg-muted/50 dark:bg-muted/80"
          aria-label="email"
        />
        <Button>Subscribe</Button>
      </form>
    </div>
  </section>
</template>

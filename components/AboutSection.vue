<script setup lang="ts"></script>

<template>
  <section
    id="about"
    class="border dark:border-none bg-muted/40 "
  >
    <div class="max-container py-24 sm:py-32">
      <div
        class="flex flex-col-reverse gap-8 px-6 max-lg:items-center md:flex-row md:gap-12"
      >
        <img
          src="/images/art/pilot.png"
          alt="About section image"
          class="w-[300px] rounded-lg object-contain"
        />
        <div class="flex flex-col justify-between gap-10">
          <div class="pb-6">
            <h2 class="text-3xl font-bold md:text-4xl">
              <span class="text-primary"> About </span>
              Company
            </h2>
            <p class="mt-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>

          <Statistics />
        </div>
      </div>
    </div>
  </section>
</template>

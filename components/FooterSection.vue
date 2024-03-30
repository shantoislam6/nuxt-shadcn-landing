<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
  <footer
    id="footer"
    class="border-t"
  >
    <section class="max-container">
      <div
        class="grid sm:grid-cols-4 gap-10 py-10 pt-24 px-10 "
      >
        <div class="flex flex-col gap-2 items-center">
          <NuxtLink
            to="/"
            class="flex text-xl font-bold"
          >
            <LogoBrand />
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <a
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Web
          </a>

          <a
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Mobile
          </a>

          <a
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Desktop
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">About</h3>
          <NuxtLink
            to="/#features"
            class="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            Features
          </NuxtLink>

          <NuxtLink
            to="/#testimonials"
            class="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            Testimonials
          </NuxtLink>

          <NuxtLink
            to="/"
            class="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            Pricing
          </NuxtLink>

          <NuxtLink
            to="/"
            class="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            FAQ
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">Community</h3>
          <a
            target="_blank"
            href="#"
            class="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            <Icon
              icon="logos:facebook"
              class="w-[1rem]"
            />
            Facebook
          </a>

          <a
            target="_blank"
            href="#"
            class="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            <Icon
              icon="skill-icons:discord"
              class="w-[1rem]"
            />
            Discord
          </a>

          <a
            target="_blank"
            href="#"
            class="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            <Icon
              icon="skill-icons:twitter"
              class="w-[1rem]"
            />Twitch
          </a>
        </div>
      </div>
    </section>
    <section class="max-container my-5 pb-5 ">
      <h3 class="lg:px-32">
        &copy; 2024 |
        <NuxtLink
          to="/"
          class="group"
        >
          <span
            class="border-b-primary font-bold text-primary transition-all group-hover:border-b"
            >AUATOMATISERA</span
          >
          <span class="border-b-foreground transition-all group-hover:border-b"
            >MERA</span
          >
        </NuxtLink>
      </h3>
    </section>
  </footer>
</template>

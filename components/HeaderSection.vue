<script setup lang="ts">
import { Icon } from '@iconify/vue';
type TNavLink = {
  href: string;
  label: string;
};
const navLinks: TNavLink[] = [
  {
    href: '/#features',
    label: 'Features',
  },
  {
    href: '/#testimonials',
    label: 'Testimonials',
  },
  {
    href: '/#pricing',
    label: 'Pricing',
  },
  {
    href: '/#faq',
    label: 'FAQ',
  },
];

const openMenuSheet = useState('openMenuSheet', () => false);

const handleOpenMenuSheet = (state: boolean) => {
  openMenuSheet.value = state;
};
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b-[1px] bg-white/50 backdrop-blur-lg dark:border-b-slate-800/70 dark:bg-background/50 shadow-sm"
  >
    <nav class="max-container flex items-center justify-between py-2">
      <ul class="flex font-bold">
        <NuxtLink to="/">
          <LogoBrand />
        </NuxtLink>
      </ul>

      <!-- Desktop -->
      <nav class="hidden gap-2 md:flex">
        <Button
          as-child
          size="sm"
          variant="ghost"
          v-for="({ href, label }, index) in navLinks"
          :key="index"
        >
          <NuxtLink :to="href"> {{ label }} </NuxtLink>
        </Button>
      </nav>
      <div class="items-center gap-2 flex flex-row-reverse md:flex-row">
        
        <!-- Mobile -->
        <span class="flex gap-2 md:hidden">
          <Sheet
            :open="openMenuSheet"
            @update:open="handleOpenMenuSheet"
          >
            <SheetTrigger
              class="px-2"
              @click="openMenuSheet = true"
            >
              <Menu class="flex md:hidden">
                <Icon
                  icon="line-md:menu-fold-left"
                  class="h-[1.3rem] w-[1.3rem]"
                />
                <span class="sr-only">Menu Icon</span>
              </Menu>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle class="flex justify-center text-xl font-bold">
                  <NuxtLink
                    to="/"
                    @click="openMenuSheet = false"
                  >
                    <LogoBrand />
                  </NuxtLink>
                </SheetTitle>
              </SheetHeader>
              <nav class="mt-5 flex flex-col items-center justify-center gap-2">
                <Button
                  as-child
                  size="sm"
                  variant="ghost"
                  v-for="({ href, label }, index) in navLinks"
                  :key="index"
                  @click="openMenuSheet = false"
                >
                  <NuxtLink :to="href"> {{ label }} </NuxtLink>
                </Button>
                <div class="">
                  <Button
                    as-child
                    size="sm"
                    @click="openMenuSheet = false"
                    to="/posts"
                  >
                    <NuxtLink to="/posts"> Get Started </NuxtLink>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </span>
        <Button
          as-child
          size="sm"
          to="/posts"
          @click="openMenuSheet = false"
          class="hidden md:flex"
        >
          <NuxtLink to="/posts"> Get Started </NuxtLink>
        </Button>

        <ColorModeToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped></style>

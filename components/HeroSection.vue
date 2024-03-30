<template>
  <section
    class="max-container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2"
  >
    <div class="space-y-6 text-center lg:text-start">
      <main class="text-5xl font-bold md:text-6xl">
        <h1 class="inline">
          <span
            class="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent"
          >
            Shadcn
          </span>
          landing page
        </h1>
        for
        <h2 class="inline">
          <span
            class="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent"
          >
            React
          </span>
          developers
        </h2>
      </main>

      <p class="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
        Build your React landing page effortlessly with the required sections to
        your project.
      </p>

      <div class="space-y-4 md:space-x-4 md:space-y-0">
        <Button
          as-child
          size="lg"
          to="/posts"
          @click="openMenuSheet = false"
          class=""
        >
          <NuxtLink to="/posts"> Get Started </NuxtLink>
        </Button>
        <Button
          as-child
          size="lg"
          to="/posts"
          @click="openMenuSheet = false"
          variant="outline"
        >
          <NuxtLink to="/posts"> Go Down </NuxtLink>
        </Button>
      </div>
    </div>

    <!-- {/* Hero cards sections */} -->
    <div class="z-10">
      <HeroCards />
    </div>
    <!-- 
    {/* Shadow effect */} -->
    <div class="shadow"></div>
  </section>
</template>

<style>
.shadow {
  position: absolute;
  background: hsl(var(--primary) / 0%);
  border-radius: 24px;
  rotate: 35deg;

  width: 260px;
  top: 200px;
  height: 400px;
  filter: blur(150px);
  animation: shadow-slide infinite 4s linear alternate;
}

@keyframes shadow-slide {
  from {
    background: hsl(var(--primary) / 20%);
    right: 460px;
  }
  to {
    background: hsl(var(--primary) / 80%);
    right: 160px;
  }
}

@media (max-width: 1024px) {
  .shadow {
    top: 70px;
  }

  @keyframes shadow-slide {
    from {
      background: hsl(var(--primary) / 20%);
      right: 460px;
    }
    to {
      background: hsl(var(--primary) / 50%);
      right: 160px;
    }
  }
}

@media (max-width: 768px) {
  .shadow {
    top: 70px;
    width: 100px;
    height: 350px;
    filter: blur(60px);
  }

  @keyframes shadow-slide {
    from {
      background: hsl(var(--primary) / 20%);
      right: 280px;
    }
    to {
      background: hsl(var(--primary) / 30%);
      right: 100px;
    }
  }
}
</style>

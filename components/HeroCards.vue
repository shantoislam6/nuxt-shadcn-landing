<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
  <div
    class="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex"
  >
    <!-- {/* Testimonial */} -->
    <Card
      class="absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10"
    >
      <CardHeader class="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarImage
            alt=""
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>

        <div class="flex flex-col">
          <CardTitle class="text-lg">John Doe React</CardTitle>
          <CardDescription>@john_doe</CardDescription>
        </div>
      </CardHeader>

      <CardContent>This landig page is awesome!</CardContent>
    </Card>

    <!-- {/* Team */} -->
    <Card
      class="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10"
    >
      <CardHeader class="mt-8 flex items-center justify-center pb-2">
        <img
          src="https://i.pravatar.cc/150?img=58"
          alt="user avatar"
          class="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover grayscale-[0%]"
        />
        <CardTitle class="text-center">Leo Miranda</CardTitle>
        <CardDescription class="font-normal text-primary">
          Frontend Developer
        </CardDescription>
      </CardHeader>

      <CardContent class="pb-2 text-center">
        <p>
          I really enjoy transforming ideas into functional software that
          exceeds expectations
        </p>
      </CardContent>

      <CardFooter>
        <div class="flex gap-2 items-center">
          <a
            href="https://github.com/leoMirandaa"
            target="_blank"
          >
            <span class="sr-only">Github icon</span>
            <Icon class="h-6 w-6"  icon="mdi:github" />
          </a>
          <a
            href="https://twitter.com/leo_mirand4"
            target="_blank"
          >
            <span class="sr-only">X icon</span>
            <Icon class="h-6 w-6" icon="ri:twitter-x-fill" />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <span class="sr-only">Linkedin icon</span>
            <Icon class="h-6 w-6" icon="ri:linkedin-fill" />
          </a>
        </div>
      </CardFooter>
    </Card>

    <!-- {/* Pricing */} -->
    <Card
      class="absolute left-[50px] top-[150px] w-72 shadow-black/10 drop-shadow-xl dark:shadow-white/10"
    >
      <CardHeader>
        <CardTitle class="item-center flex justify-between">
          Free
          <Badge
            variant="secondary"
            class="text-sm text-primary"
          >
            Most popular
          </Badge>
        </CardTitle>
        <div>
          <span class="text-3xl font-bold">$0</span>
          <span class="text-muted-foreground"> /month</span>
        </div>

        <CardDescription>
          Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button class="w-full">Start Free Trial</Button>
      </CardContent>

      <hr class="m-auto mb-4 w-4/5" />

      <CardFooter class="flex">
        <div class="space-y-4">
          <span class="flex">
            <Icon class="text-primary w-5 h-5" icon="pajamas:check-sm" />
            <h3 class="ml-2">4 Team member</h3>
          </span>

          <span class="flex">
            <Icon class="text-primary w-5 h-5" icon="pajamas:check-sm" />
            <h3 class="ml-2">4 GB Storage</h3>
          </span>

          <span class="flex">
            <Icon class="text-primary w-5 h-5" icon="pajamas:check-sm" />
            <h3 class="ml-2">Upto 6 pages</h3>
          </span>
        </div>
      </CardFooter>
    </Card>

    <!-- {/* Service */} -->
    <Card
      class="absolute -right-[10px] bottom-[35px] w-[350px] shadow-black/10 drop-shadow-xl dark:shadow-white/10"
    >
      <CardHeader
        class="flex items-start justify-start gap-4 space-y-1 md:flex-row"
      >
        <div class="mt-1 rounded-2xl bg-primary/20 p-2">
          <Icon icon="mage:light-bulb" class="text-primary w-8 h-8"  />
        </div>
        <div>
          <CardTitle>Light & dark mode</CardTitle>
          <CardDescription class="text-md mt-2">
            Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
            natusm.
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  </div>
</template>

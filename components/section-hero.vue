<template>
  <section id="hero" class="hero min-h-[calc(100vh-4rem)] container mx-auto">
    <div class="hero-content flex-col lg:flex-row-reverse gap-8 py-16">
      <div class="lg:w-1/2">
        <img src="https://placehold.co/600x400?text=Hello" class="w-full rounded-lg shadow-xl">
      </div>
      <div class="lg:w-1/2">
        <h1 class="text-5xl font-bold leading-tight">
          Revolutionize your business with our <span class="text-primary">dynamic</span> solutions.
        </h1>
        <p class="py-6 text-base-content/70 text-lg">
          Elevate your business to new heights with our cutting-edge solutions. Seamlessly integrate powerful features, flexible pricing, and dedicated support.
        </p>
        <div class="flex gap-4">
          <NuxtLink to="#" class="btn btn-primary">
            Get Started
          </NuxtLink>
          <NuxtLink to="#features" class="btn btn-ghost">
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

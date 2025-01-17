<template>
  <div id="hero" class="hero bg-base-200 h-[calc(100vh-4rem)]">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://placehold.co/600x400?text=..."
        class="w-xl max-w-full rounded-lg shadow-sm"
      >
      <div class="px-6">
        <h1 class="text-5xl font-bold">
          Lorem Ipsum
        </h1>
        <p class="py-6">
          Aliquam mauris velit, lobortis sed dignissim bibendum, semper at orci. Cras bibendum, nisl a tempor tincidunt, nibh eros aliquam massa, eu tempus risus turpis vitae ex.
        </p>
        <NuxtLink to="#" class="btn btn-primary">
          Get Started
        </NuxtLink>
        <NuxtLink to="#features" class="btn btn-ghost ml-4">
          Learn More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

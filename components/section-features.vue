<script lang="ts" setup>
import type { Feature } from '~/types'

const features: Feature[] = [
  {
    title: 'First Feature',
    description: 'Donec laoreet ut augue a porta. Cras maximus libero eu ipsum ultrices, at finibus ante vestibulum. Mauris nec tristique neque. Nam consectetur mauris mi, sit amet dictum nibh semper at. Cras eu mauris nisi. Phasellus in magna quis mi pellentesque gravida ac a sapien. Donec in mi sit amet justo viverra scelerisque eget vitae magna.',
    image: 'https://placehold.co/600x400?text=One',
  },
  {
    title: 'Second Feature',
    description: 'Nullam vitae hendrerit metus. In hac habitasse platea dictumst. In faucibus, elit id hendrerit blandit, ex magna fermentum nisi, vitae feugiat metus orci imperdiet dui. Vivamus ac nunc venenatis, consequat orci nec, efficitur nulla. Proin pretium ipsum at rhoncus convallis. Morbi aliquet tortor viverra erat maximus dictum.',
    image: 'https://placehold.co/600x400?text=Two',
  },
  {
    title: 'Third Feature',
    description: 'Morbi cursus sodales molestie. Donec urna ipsum, tincidunt pulvinar ornare maximus, porttitor eu orci. Vivamus vehicula congue sapien ac aliquet. Etiam ac facilisis ipsum. Duis pellentesque scelerisque purus porttitor viverra. Ut odio odio, pharetra ac lectus a, ullamcorper posuere dui. Ut finibus erat eu venenatis faucibus.',
    image: 'https://placehold.co/600x400?text=Three',
  },
]
</script>

<template>
  <div id="features" class="bg-base-100 pt-12">
    <h1 class="text-4xl text-center font-bold">
      Features
    </h1>
    <p class="text-center py-6">
      Vivamus ac nunc venenatis, consequat orci nec, efficitur nulla
    </p>
    <div v-for="(feature, index) in features" :key="feature.title" class="hero py-12">
      <div
        class="hero-content flex-col lg:flex-row"
        :class="{ 'lg:flex-row': index % 2 === 0, 'lg:flex-row-reverse': index % 2 === 1 }"
      >
        <img
          :src="feature.image"
          class="w-xl max-w-full rounded-lg shadow-sm"
        >
        <div class="px-6">
          <h1 class="text-5xl font-bold">
            {{ feature.title }}
          </h1>
          <p class="py-6">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

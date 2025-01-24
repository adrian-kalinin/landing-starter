<script lang="ts" setup>
import type { Feature } from '~/types'

const features: Feature[] = [
  {
    title: 'Fully Controlled Panel',
    description: 'Elevate control with our dynamic SaaS dashboard—real-time insights, intuitive navigation, seamless customization.',
    image: 'https://placehold.co/600x400?text=One',
    badge: 'Dashboard',
    features: [
      'Real-Time Data Insights',
      'Customizable Widgets',
      'Intuitive User Interface',
      'Performance Metrics at a Glance',
    ],
  },
  {
    title: 'Managing Entities',
    description: 'Our platform offers seamless management, allowing you to effortlessly oversee users, projects, and resources in one centralized hub. Gain real-time insights, streamline workflows, and optimize resource allocation for unparalleled efficiency.',
    image: 'https://placehold.co/600x400?text=Two',
    badge: 'Control',
    features: [
      'User-Friendly Tools',
      'Resource Management',
      'Task Assignment',
      'Robust Control',
    ],
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect key tools seamlessly with our SaaS platform, streamlining your processes and boosting productivity. Experience a cohesive digital ecosystem that empowers your business for innovation and growth.',
    image: 'https://placehold.co/600x400?text=Three',
    badge: 'Workflows',
    features: [
      'Real-time chat with Slack',
      'Engage your customer with Email',
      'Getting order from Amazon',
      'Using AI from OpenAI',
    ],
  },
]
</script>

<template>
  <section id="features" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-4xl font-bold">
        Magical Things
      </h2>
      <p class="mt-4 text-lg text-base-content/70">
        Unlock the Full Potential of Your Business with Our Platform's Key Features
      </p>
    </div>
    <div class="mt-16 space-y-24">
      <div v-for="(feature, index) in features" :key="feature.title" class="hero">
        <div class="hero-content flex-col lg:gap-8" :class="{ 'lg:flex-row': index % 2 === 0, 'lg:flex-row-reverse': index % 2 === 1 }">
          <div class="lg:w-1/2">
            <img :src="feature.image" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="lg:w-1/2">
            <span class="badge badge-primary text-white rounded-xl">{{ feature.badge }}</span>
            <h3 class="mt-4 text-3xl font-bold">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-base-content/70">
              {{ feature.description }}
            </p>
            <ul class="mt-6 space-y-2">
              <li v-for="item in feature.features" :key="item" class="flex items-center">
                <Icon name="fa6-solid:check" class="h-5 w-5 mr-2 text-primary" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

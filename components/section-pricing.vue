<script setup lang="ts">
import type { PricingPlan } from '~/types'

const pricingPlans: PricingPlan[] = [
  {
    name: 'Solo',
    price: 29,
    description: 'Experience essential features at a great value, perfect for growing businesses.',
    features: [
      'Only 1 user',
      'Basic features',
      '10BG storage',
    ],
    style: {
      button: 'btn-outline',
      icon: 'text-success',
    },
  },
  {
    name: 'Business',
    price: 79,
    description: 'Unlock advanced features and elevate your experience with our premium plan.',
    features: [
      'Up to 10 users',
      'Advanced features',
      '20GB storage',
    ],
    style: {
      button: 'btn-outline border-primary text-primary hover:bg-primary hover:border-primary hover:text-white',
      icon: 'text-primary',
      accent: 'text-primary',
    },
  },
]
</script>

<template>
  <section id="pricing" class="py-16">
    <div class="mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          Pricing Plans
        </h2>
        <p class="text-base-content/70">
          Explore flexible pricing that scales with your needs. No hidden fees, just transparent options for your
          success.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div v-for="plan in pricingPlans" :key="plan.name" class="border border-base-300 hover:shadow-xl">
          <div class="card-body">
            <h3 class="text-xl font-bold" :class="[plan.style.accent]">
              {{ plan.name }}
            </h3>
            <div class="my-4">
              <span class="text-4xl font-bold" :class="[plan.style.accent]">
                €{{ plan.price }}
              </span>
              <span class="text-base-content/70">/month</span>
            </div>
            <p class="text-base-content/70 mb-6">
              {{ plan.description }}
            </p>
            <ul class="space-y-3 mb-6">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                <Icon name="fa6-solid:circle-check" class="h-5 w-5 mr-2" :class="[plan.style.icon]" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <div class="card-actions">
              <NuxtLink to="#" class="btn w-full" :class="[plan.style.button]">
                Get Started
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

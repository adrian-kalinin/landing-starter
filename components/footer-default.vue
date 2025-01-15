<script setup lang="ts">
import type { Link } from '~/types'

const exploreLinks: Link[] = [
  { label: 'Features', to: '#' },
  { label: 'Pricing', to: '#' },
  { label: 'FAQ', to: '#' },
]

const legalLinks: Link[] = [
  { label: 'Terms of use', to: '#' },
  { label: 'Privacy policy', to: '#' },
  { label: 'Cookie policy', to: '#' },
]

const companyLinks: Link[] = [
  { label: 'About us', to: '#' },
  { label: 'Contact', to: '#' },
]
</script>

<template>
  <footer class="footer bg-neutral text-neutral-content p-10">
    <nav>
      <h6 class="footer-title">
        Explore
      </h6>
      <NuxtLink
        v-for="link in exploreLinks"
        :key="link.label"
        :to="link.to"
        class="link link-hover"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
    <nav>
      <h6 class="footer-title">
        Legal
      </h6>
      <NuxtLink
        v-for="link in legalLinks"
        :key="link.label"
        :to="link.to"
        class="link link-hover"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
    <nav>
      <h6 class="footer-title">
        Company
      </h6>
      <NuxtLink
        v-for="link in companyLinks"
        :key="link.label"
        :to="link.to"
        class="link link-hover"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </footer>
</template>

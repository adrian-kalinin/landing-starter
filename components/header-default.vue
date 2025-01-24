<script setup lang="ts">
import type { Link } from '~/types'

const links: Link[] = [
  { label: 'Features', to: '#features' },
  { label: 'Pricing', to: '#pricing' },
  { label: 'FAQ', to: '#' },
]
</script>

<template>
  <nav class="navbar justify-between h-4">
    <!-- Logo -->
    <a class="btn btn-ghost text-lg">
      Company
    </a>

    <!-- Menu for mobile -->
    <div class="dropdown dropdown-end sm:hidden z-[1] shadow-md">
      <button class="btn btn-ghost">
        <Icon name="fa6-solid:bars" class="text-lg" />
      </button>

      <ul tabindex="0" class="dropdown-content menu bg-base-200 p-6 rounded-box shadow gap-2 text-nowrap">
        <li v-for="link in links" :key="link.label">
          <NuxtLink :to="link.to">
            {{ link.label }}
          </NuxtLink>
        </li>
        <a class="btn btn-sm btn-primary">Sign up</a>
      </ul>
    </div>

    <!-- Menu for desktop -->
    <ul class="hidden menu sm:menu-horizontal gap-2">
      <li v-for="link in links" :key="link.label">
        <NuxtLink :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </li>
      <a class="btn btn-sm btn-primary">Sign up</a>
    </ul>
  </nav>
</template>

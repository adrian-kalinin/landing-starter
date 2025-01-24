<script setup lang="ts">
import type { FaqItem } from '~/types'

const faqItems: FaqItem[] = [
  {
    question: 'How does this platform benefit my business?',
    answer: 'This platform offers several advantages, including cost-effectiveness, scalability, automatic updates, and accessibility. It allows businesses to focus on core operations while the software provider handles maintenance and updates.',
  },
  {
    question: 'What features are included in your platform?',
    answer: 'Our platform includes comprehensive features such as real-time analytics, user management, customizable dashboards, automated workflows, and seamless integrations. All features are designed to enhance your business productivity.',
  },
  {
    question: 'How can I upgrade my plan?',
    answer: 'Upgrading your plan is simple. You can do it directly from your dashboard. Changes take effect immediately, and we\'ll prorate any payments.',
  },
  {
    question: 'Is there a trial period for your platform?',
    answer: 'No, we currently do not offer a trial period for our platform.',
  },
  {
    question: 'How is data security handled on your platform?',
    answer: 'We implement industry-leading security measures including encryption, regular backups, and compliance with international security standards to ensure your data is protected at all times.',
  },
]
</script>

<template>
  <section id="faq" class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          FAQs
        </h2>
        <p class="text-base-content/70">
          Find solutions, tips, and more to enhance your experience.
        </p>
      </div>
      <div class="max-w-3xl mx-auto">
        <div class="join join-vertical w-full">
          <div v-for="(item, index) in faqItems" :key="index" class="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" :checked="index === 0">
            <div class="collapse-title text-xl font-medium">
              {{ item.question }}
            </div>
            <div class="collapse-content">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

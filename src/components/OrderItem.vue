<script setup>
import { RouterLink } from 'vue-router'

const { order } = defineProps({
  order: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    :to="`/details/${order.id}`"
    :key="order.id"
    class="block bg-black/10 rounded-md p-2 mb-2 hover:scale-105 transition ease-in-out duration-100 ring-1 ring-white/10 dark:ring-white/20 hover:ring-2 hover:ring-purple-700 dark:hover:ring-purple-700"
  >
    <h2 class="text-xl font-bold mb-2 text-yellow-600">Order ID: {{ order.id }}</h2>
    <p class="text-gray-400">Customer Name: {{ order.title }}</p>
    <p class="text-gray-400">Description: {{ order.description }}</p>
  </RouterLink>
</template>

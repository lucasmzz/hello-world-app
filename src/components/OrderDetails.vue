<script setup>
const { order } = defineProps({
  order: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    style="margin: 0 auto"
    class="max-w-5xl mx-auto flex flex-col items-center justify-center p-4 rounded-md bg-black/10"
  >
    <h1 class="text-xl mb-2 font-bold text-gray-400 text-center">{{ order.title }}</h1>
    <p class="text-gray-400">{{ order.description }}</p>
  </div>
</template>

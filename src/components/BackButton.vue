<script setup>
import { RouterLink } from 'vue-router'
import { PhArrowLeft } from '@phosphor-icons/vue'
</script>

<template>
  <div class="pt-6 flex items-center justify-center">
    <RouterLink to="/">
      <div
        class="inline-flex items-center ring-1 ring-yellow-600 px-4 py-1 rounded-md gap-2 bg-black/10 hover:scale-105"
      >
        <PhArrowLeft :size="20" color="violet" />
        <span class="text-md text-purple-500">Back to orders</span>
      </div>
    </RouterLink>
  </div>
</template>

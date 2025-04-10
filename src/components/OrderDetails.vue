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
    <h2 class="text-xl font-bold mb-2 text-yellow-600">Order ID: {{ order.id }}</h2>
    <p class="text-gray-400">Customer Name: {{ order.customerName }}</p>
    <p class="text-gray-400">Total Items: {{ order.items.length }}</p>
    <p class="text-gray-400">Total: {{ order.total }}</p>
    <p class="text-gray-400">Status: {{ order.status }}</p>
    <p class="text-gray-400">Created At: {{ new Date(order.createdAt).toLocaleDateString() }}</p>
    <div>
      <h3 class="text-lg font-bold mb-2 text-yellow-600">Items:</h3>
      <ul class="list-disc list-inside">
        <li v-for="item in order.items" :key="item.id" class="text-gray-400">
          {{ item.name }} - {{ item.quantity }} pcs ({{ item.price }} each). TOTAL:
          {{ item.price * item.quantity }}
        </li>
      </ul>
    </div>
    >
  </div>
</template>

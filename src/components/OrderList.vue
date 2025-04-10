<script setup>
import { useOrderStore } from '@/stores/orders'
import { onMounted } from 'vue'
import OrderItem from './OrderItem.vue'

const orderStore = useOrderStore()

onMounted(async () => {
  await orderStore.getOrders()
})
</script>

<template>
  <section>
    <div style="margin: 0 auto" class="max-w-4xl mx-auto flex flex-col gap-2">
      <OrderItem v-for="order in orderStore.orders" :key="order.id" :order="order" />
    </div>
  </section>
</template>

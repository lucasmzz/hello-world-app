<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useOrderStore } from '@/stores/orders'
import OrderDetails from '@/components/OrderDetails.vue'
import BackButton from '@/components/BackButton.vue'

const route = useRoute()
const orderStore = useOrderStore()
const order = ref()

watch(
  () => route.params.id,
  (newId) => {
    order.value = orderStore.getOrderById(newId)
  },
)

onMounted(async () => {
  if (!orderStore.orders.length) {
    await orderStore.getOrders()
  }

  order.value = orderStore.getOrderById(+route.params.id)
})
</script>

<template>
  <section class="min-h-screen flex-col items-center pt-4">
    <OrderDetails v-if="order" :order="order" />

    <BackButton />
  </section>
</template>

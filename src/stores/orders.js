import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchOrders } from '@/services/ordersService'

export const useOrderStore = defineStore('orders', () => {
  const isLoading = ref(false)
  const orders = ref([])
  
  const getOrders = async () => {
    try {
      isLoading.value = true
      orders.value = await fetchOrders()      
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      isLoading.value = false
    }
  }

  const getOrderById = (id) => orders.value.find(order => order.id == id)

  return { 
    orders,
    getOrders,
    getOrderById
  }
})

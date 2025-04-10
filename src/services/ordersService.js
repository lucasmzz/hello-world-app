export const fetchOrders = async () => {
  const response = await fetch('/orders')

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()
  return data
}

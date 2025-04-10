const baseUrl = import.meta.env.VITE_API_URL

export const fetchOrders = async () => {
  const response = await fetch(`${baseUrl}`)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()
  return data
}

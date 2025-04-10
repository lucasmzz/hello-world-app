export const fetchOrders = async () => {
    const response = await fetch('https://6300ff309a1035c7f8fc2586.mockapi.io/jobposts')
    
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
}
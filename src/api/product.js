const baseURL = 'https://fakestoreapi.com/products'

export const getData = async () => {
    try {
        const response = await fetch(baseURL)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        return false
    }
}
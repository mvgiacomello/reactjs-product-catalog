const ENDPOINT = process.env.ENDPOINT || 'https://demo4690370.mockable.io'

async function retrieveProducts() {
    const response = await fetch(`${ENDPOINT}/products`)
    const jsonBody = await response.json()
    return jsonBody
}

async function retrieveProduct(id) {
    const response = await fetch(`${ENDPOINT}/products/${id}`)
    const jsonBody = await response.json()
    return jsonBody
}

export { retrieveProducts, retrieveProduct }
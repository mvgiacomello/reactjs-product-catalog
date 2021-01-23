const ENDPOINT = 'https://demo4690370.mockable.io'

async function retrieveProducts() {
    const response = await fetch(`${ENDPOINT}/products`);
    const jsonBody = await response.json();
    return jsonBody
}

async function retrieveProduct(id) {
    // const response = await fetch(`${ENDPOINT}/products/${id}`);
    // const jsonBody = await response.json();
    // return jsonBody
    return {
        "id": 111,
        "title": "John Legend Live",
        "description": "Come and join one of the world's most beloved artists as he performs live and just for you from MelodyVR’s studio in LA.",
        "artist": "John Legend",
        "isFree": false,
        "image1": "https://d17jafawxl91z1.cloudfront.net/MVR_FDC_L0103_App_Hero-1607341456001.jpg",
        "image2": "https://d17jafawxl91z1.cloudfront.net/MVR_FDC_L0103_App_Square-1607341456001.jpg",
        "accentColor": "#f52459",
        "backgroundColor": "#841225",
        "textColor": "#ffffff",
        "feature_order": "4",
        "price": "12.99"
    }
}

export { retrieveProducts, retrieveProduct }
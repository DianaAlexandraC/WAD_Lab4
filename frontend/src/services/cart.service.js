export async function addToCartApi(productId) {
    const response = await fetch(`/api/cart/add?pid=${productId}`);
    return response.json();
}

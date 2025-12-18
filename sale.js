function addToCart(productId) {
  let size = document.getElementById(`size-${productId}`)
    ? document.getElementById(`size-${productId}`).value
    : 'N/A';

  let quantity = document.getElementById(`quantity-${productId}`)
    ? document.getElementById(`quantity-${productId}`).value
    : 1;

  let price = document
    .querySelector(`[data-id="${productId}"]`)
    .getAttribute('data-price');

  console.log(`Product ID: ${productId}`);
  console.log(`Size: ${size}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Price: $${price}`);

  alert(`Product ${productId} added to cart at price $${price}`);
}

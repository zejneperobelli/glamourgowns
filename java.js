function addToCart(productId) {
  let productElement = document.querySelector(`[data-id="${productId}"]`);
  if (!productElement) return;

  let sizeSelect = productElement.querySelector(".size-select");
  let size = sizeSelect ? sizeSelect.value : "";

  let quantityInput = productElement.querySelector(".quantity-input");
  let quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

  let price = parseFloat(productElement.getAttribute("data-price")) || 0;

  let imageElem = productElement.querySelector(".product-image");
  let image = imageElem ? imageElem.getAttribute('src') : "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => Number(item.id) === productId && item.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, size, quantity, price, image });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

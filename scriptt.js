document.addEventListener('DOMContentLoaded', function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItemsDiv = document.getElementById('cart-items');
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<tr><td colspan="7">Your cart is empty.</td></tr>';
  } else {
    cart.forEach((item, index) => {
      let totalItem = item.quantity * item.price;
      totalPrice += totalItem;

      let row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${item.image}" class="product-image" /></td>
        <td>Product ${item.id}</td>
        <td>${item.size}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
        <td>$${totalItem.toFixed(2)}</td>
        <td><button class="remove-btn" data-index="${index}">Remove</button></td>
      `;
      cartItemsDiv.appendChild(row);
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        let idx = this.getAttribute('data-index');
        cart.splice(idx,1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
      });
    });
  }

  document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
});



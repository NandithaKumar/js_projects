let productList = '';

products.forEach((product) => {
  productList += `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">₹${product.price}</div>

          <div class="product-quantity-container ">
            <select class="js-product-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id= ${
            product.id
          }>Add to Cart</button>
        </div>`;
});

document.querySelector('.products-grid').innerHTML = productList;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    //console.log(button.dataset.productId);
    const productId = button.dataset.productId;
    const quantity = document.querySelector(
      `.js-product-quantity-${productId}`
    ).value;
    //console.log(quantity);
    const item = {
      productId,
      quantity,
    };

    /*if (cart.length === 0) {
      cart.push(item);
    }*/
    let matchingItem;

    cart.forEach((cartItem) => {
      if (cartItem.productId === item.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity = item.quantity;
    } else {
      cart.push(item);
    }

    console.log(cart);
  });
});

export let cart = [
  { productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', quantity: 2 },
  { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', quantity: 1 },
];

//export const cart = [];

export function addToCart(productId) {
  const quantity = Number(
    document.querySelector(`.js-product-quantity-${productId}`).value
  );
  const item = {
    productId,
    quantity,
  };

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
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId != productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}

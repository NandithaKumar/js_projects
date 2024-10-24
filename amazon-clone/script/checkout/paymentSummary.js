import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../deliveryOptions.js';

export function renderPaymentSummary(productId) {
  let productPrice = 0;
  let shippingCost = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingCost += deliveryOption.price;
  });

  const totalBeforeTax = productPrice + shippingCost;
  const tax = totalBeforeTax * 0.1;
  const totalPrice = totalBeforeTax + tax;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">Order Summary</div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">₹${productPrice}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">₹${shippingCost}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">₹${totalBeforeTax}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">₹${tax}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">₹${totalPrice}</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}

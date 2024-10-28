import { addToCart, cart } from '../../data/cart.js';

describe('test suite: addtoCart', () => {
  beforeEach(() => {
    // Create a mock input element
    const mockInput = document.createElement('input');
    mockInput.value = 2; // Mock the quantity
    mockInput.classList.add(
      'js-product-quantity-e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    );

    // Append the mock input to the document body
    document.body.appendChild(mockInput);
  });

  afterEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = '';
  });

  it('update an existing product in the cart', () => {});

  it('add a new product to the cart', () => {
    /*spyOn(localStorage, 'getItem').add.callFake(() => {
      return JSON.stringify([]);
    });
    console.log(localStorage.getItem('cart'));*/

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
  });
});

/* eslint-disable no-param-reassign */
(function (sc) {
  var sc = sc || {};
  function Cart() {
    this.items = [];
  }

  Cart.prototype.addItem = function (item) {
    this.items.push(item);
  };

  if (shoppingCart.Cart) {
    console.error('shoppingCart.Cart already exists');
  } else {
    sc.Cart = Cart;
  }
}(shoppingCart));

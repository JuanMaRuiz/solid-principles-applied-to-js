(function (scope) {
  function Cart() {
    this.items = [];
  }

  Cart.prototype.addItem = function (item) {
    this.items.push(item);
  };

  scope.app = scope.app || {};
  scope.app.Cart = Cart;
}(window));

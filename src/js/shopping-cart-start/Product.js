/* eslint-disable no-param-reassign */
(function (scope) {
  var shoppingCart = scope.shoppingCart || {};

  function Product(id, description) {
    this.id = id;
    this.description = description;
  }

  Product.prototype.getId = function () {
    return this.id;
  };
  Product.prototype.getDescription = function () {
    return this.description;
  };

  if (!scope.shoppingCart) {
    scope.shoppingCart = shoppingCart;
    shoppingCart.Product = Product;
  } else {
    console.error('shoppingCart already exists');
  }
}(window));

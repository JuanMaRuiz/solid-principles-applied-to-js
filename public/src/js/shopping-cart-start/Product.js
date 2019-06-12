(function (scope) {
  'use strict';

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

  scope.app = scope.app || {};
  scope.app.Product = Product;
}(window));

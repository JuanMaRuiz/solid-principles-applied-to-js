(function (scope) {
  'use strict';

  function Product(id, name, description, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image
  }

  Product.prototype.getId = function () {
    return this.id;
  };

  Product.prototype.getDescription = function () {
    return this.description;
  };

  Product.prototype.getName = function() {
    return this.name;
  };

  Product.prototype.getImage = function() {
    return this.image;
  };

  scope.app = scope.app || {};
  scope.app.Product = Product;
}(window));
